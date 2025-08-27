import {
  getGraphEmbeddings,
  addRowLabels,
  addRowDefinitions,
  addRowEmbeddings,
  computeCosineSimilarity,
  sortSimilarity,
} from "./row";

export const vectorSearch = (
  socket,
  flowId,
  addActivity,
  removeActivity,
  term: string,
) => {
  const api = socket.flow(flowId);

  const searchAct = "Search: " + term;
  addActivity(searchAct);

  return api
    .embeddings(term)
    .then(getGraphEmbeddings(api, addActivity, removeActivity, 10))
    .then(addRowLabels(api, addActivity, removeActivity))
    .then(addRowDefinitions(api, addActivity, removeActivity))
    .then(addRowEmbeddings(api, addActivity, removeActivity))
    .then(computeCosineSimilarity(addActivity, removeActivity))
    .then(sortSimilarity(addActivity, removeActivity))
    .then((x) => {
      removeActivity(searchAct);
      return {
        view: x,
        entities: x.map((row) => {
          return {
            uri: row.uri,
            label: row.label ? row.label : "n/a",
          };
        }),
      };
    })
    .catch((err) => {
      removeActivity(searchAct);
      throw err;
    });
};

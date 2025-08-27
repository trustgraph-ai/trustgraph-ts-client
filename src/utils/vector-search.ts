import {
  getGraphEmbeddings,
  addRowLabels,
  addRowDefinitions,
  addRowEmbeddings,
  computeCosineSimilarity,
  sortSimilarity,
} from "./row";

export const vectorSearch = (
  socket: any,
  flowId: string,
  addActivity: (s: string) => void,
  removeActivity: (s: string) => void,
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
    .then(computeCosineSimilarity())
    .then(sortSimilarity())
    .then((x: any) => {
      removeActivity(searchAct);
      return {
        view: x,
        entities: x.map((row: any) => {
          return {
            uri: row.uri,
            label: row.label ? row.label : "n/a",
          };
        }),
      };
    })
    .catch((err: any) => {
      removeActivity(searchAct);
      throw err;
    });
};

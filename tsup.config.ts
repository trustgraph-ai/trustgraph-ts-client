import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'state/index': 'src/state/index.ts',
    'tables/index': 'src/tables/index.ts',
    'types/index': 'src/types/index.ts',
    'providers/index': 'src/providers/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: false,
  outDir: 'dist',
  target: 'es2020',
})
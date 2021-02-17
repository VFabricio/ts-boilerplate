import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs', name: 'home-sweet-home', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'es', sourcemap: true },
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    resolve(),
    commonjs(),
  ],
}

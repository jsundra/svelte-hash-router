import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

/** @type {import('rollup').RollupOptions} */
export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        name: 'svelte-hash-router',
        format: 'es'
    },
    plugins: [
        typescript(),
        svelte({
            preprocess: autoPreprocess()
        }),
        commonjs(),
        nodeResolve()
    ]
}
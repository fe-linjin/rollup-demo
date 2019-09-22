import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'index.js',
    output: [{
        file: 'dist/dist.cjs.js',
        name: 'cjs_test',
        format: 'iife'
    }
    ],
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ]
}
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: 'index.js',
    output: [{
        file: 'dist/dist.cjs.js',
        name: 'cjs_test',
        format: 'iife'
    }
    ],
    plugins: [
        commonjs()
    ]
}
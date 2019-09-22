import builtins from 'rollup-plugin-node-builtins'

export default {
    input: 'index.js',
    output: [{
        file: 'dist/dist.cjs.js',
        name: 'cjs_test',
        format: 'iife'
    }],
    plugins: [
        builtins()
    ]
}
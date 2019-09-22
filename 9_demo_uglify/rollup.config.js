import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'index.js',
    output: [{
        file: 'dist/dist.js',
        format: 'iife',
        name: 'test',
        sourcemap: true
    }],
    plugins: [
        uglify()
    ]
}
import babel from 'rollup-plugin-babel';

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/dist.es.js',
            format: 'es'
        }, {
            file: 'dist/dist.cjs.js',
            format: 'cjs'
        }, {
            file: 'dist/dist.umd.js',
            name: 'dist_umd',
            format: 'umd'
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
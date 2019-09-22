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
    watch: {
        exclude: ['lib.js']
    }
}
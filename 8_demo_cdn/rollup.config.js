export default {
    input: 'index.js',
    output: [{
        file: 'dist/dist.amd.js',
        format: 'amd',
        globals: {
            jquery: 'JQuery'
        }
    }],
    external: ['jquery'],
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js'
    }
}
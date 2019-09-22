import eslint from 'rollup-plugin-eslint';

export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/dist.js',
        format: 'iife',
        name: 'test',
        sourcemap: true
    }],
    plugins: [
        eslint.eslint({
            throwOnError: true,
            throwOnWarning: true,
            include: ['src/**'],
            exclude: ['node_modules/**']
        })
    ]
}
import { uglify } from 'rollup-plugin-uglify'

let isProd = process.env.NODE_ENV === 'production'

// 通用的插件
const basePlugins = []
  // 开发环境需要使用的插件
const devPlugins = []
  // 生产环境需要使用的插件
const prodPlugins = [uglify()]

let plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins)
let outputFilePath = isProd ? './dist/dist.min.js' : './dist/dist.js'

export default {
  input: 'src/index.js',
  output: [{
    file: outputFilePath,
    format: 'iife',
    name: 'test',
    sourcemap: isProd,
    intro: 'const DEVELOPMENT = ' + !isProd
  }],
  plugins: plugins
}
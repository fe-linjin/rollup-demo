const rollup = require('rollup').rollup

rollup({
  input: 'src/index.js'
}).then(bundle => {
  // save all promise list
  let writePromiseList = []

  // 声明所有需要打包的类型
  let moduleTypeList = ['es', 'cjs', 'amd', 'umd', 'iife']

  moduleTypeList.forEach((moduleType) => {
    writePromiseList.push(bundle.write({
      output: {
        file: `./dist/dist.${moduleType}.js`,
        format: moduleType,
        sourcemap: true
      }
    }))
  })
})
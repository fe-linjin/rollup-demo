import compact from 'lodash/compact'
import JQuery from 'jquery'

const array = [0, 1, false, 2, '', 3]
const compctedArray = compact(array)
console.log(compctedArray)
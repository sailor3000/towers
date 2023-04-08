// import jsPlugIn from './js-plugIn'

// /**
//  * Author：戴向天
//  * createdTime: 2020-09-04
//  * 
//  * 创建该文件的目的是为了将vue文件进行相对应的转换成字符串
//  * 然后通过解析字符串来进行生成vue文件
//  * 
//  * 因为有些机制的传输数据格式必须为字符串形式
//  * 所以可以通过jsonUtils来进行操作编译和反编译
//  * 
//  */

// const jsonUtils = window.JSON

// jsonUtils.JsonValToString = function (obj = {}) {
//     const resObj = {}
//     for (let key in obj) {
//         if (jsPlugIn.getType(obj[key], 'function')) {
//             resObj[key] = obj[key].toString();
//         } else if (jsPlugIn.getType(obj[key], 'json')) {
//             resObj[key] = jsonUtils.JsonValToString(obj[key])
//         } else {
//             resObj[key] = obj[key]
//         }
//     }
//     return resObj
// }

// jsonUtils.JsonValToJson = function (obj = {}) {
//     const resObj = {}
//     for (let key in obj) {
//         if (jsPlugIn.getType(obj[key], 'string') && !obj[key].indexOf('function')) {
//             const arr = obj[key].split(' ')
//             arr.shift()
//             const funName = arr.join('').split('(')[0]
//             if (['String', 'Number', 'Array', 'Boolean', 'Object', 'Function'].indexOf(funName) >= 0) {
//                 resObj[key] = eval("(" + funName + ")")
//             } else {
//                 resObj[key] = eval("(" + obj[key] + ")")
//             }
//         } else if (jsPlugIn.getType(obj[key], 'json')) {
//             resObj[key] = jsonUtils.JsonValToJson(obj[key])
//         } else {
//             resObj[key] = obj[key]
//         }
//     }
//     return resObj
// }

// jsonUtils.JsonToString = (obj = {}) => jsonUtils.stringify(jsonUtils.JsonValToString(obj))

// jsonUtils.StringToJson = (str = '') => jsonUtils.JsonValToJson(jsonUtils.parse(str))

// export default jsonUtils
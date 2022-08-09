// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj}
  newDriver[key] = value
  return newDriver
}
updateDriverWithKeyAndValue(driver, 'name', 'Sam')


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
destructivelyUpdateDriverWithKeyAndValue(driver, 'name', 'Sam')


function deleteFromDriverByKey(obj, key) {
  const newDriver = Object.assign({}, obj)
  delete newDriver[key]
  return newDriver
}
deleteFromDriverByKey(driver, 'name')
/* -------------------------- OPTIONAL ---------------*/
// function deleteFromDriverByKey(obj, key) {
//   const newDriver = {...obj}
//   delete newDriver[key]
//   return newDriver
// }
// deleteFromDriverByKey(driver, 'name')


function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}
destructivelyDeleteFromDriverByKey(driver, 'name')

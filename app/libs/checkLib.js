'use srict'

let trim = (x) => {
  let value = String(x)
  return value.replace(/^\s+|\s+$/gm, '')
}
let isEmpty = (value) => {
  if (value === null || value === undefined || trim(value) === '' || value.length === 0 || value == 'null') {
    return true
  } else {
    return false
  }
}

let validateArrayValues = (givenArray)=>{
  
  let findNull = givenArray.indexOf(null)
  let findUndefined = givenArray.indexOf(undefined)
  let findEmpty = givenArray.indexOf("")
  if(findNull== -1 && findUndefined==-1 && findEmpty ==-1){
    console.log("all values okay")
    return true
  }
  else{
    return false
  }


}// end validateArrayValues


let checkSearchKeyword = (value) => {
  if (value === null || value === undefined || trim(value) === '' || value.length < 4) {
    return true
  } else {
    return false
  }
}


/**
 * exporting functions.
 */
module.exports = {
  isEmpty,
  trim,
  validateArrayValues,
  checkSearchKeyword
}

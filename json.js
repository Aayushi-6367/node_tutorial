//convert json string to object
const jsonstring='{"name":"aayushi","age":"19"}';
const toobject=JSON.parse(jsonstring)
console.log(toobject.name)
//convert object to jsonstring
const object_convert={name:"bhumika",age:14}
const json=JSON.stringify(object_convert)
console.log(json)
console.log(typeof json)


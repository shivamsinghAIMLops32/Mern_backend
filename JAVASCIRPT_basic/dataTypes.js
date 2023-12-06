// Number -> integer values
const k = 9;

// String -> a group of characters like (double quotes,single quote,backticks`` stores all strings)
const playerName = `shivam`;
const playerName1 = 'shivam singh';
const playerName2 = "shiv";
console.log(playerName2);

// Boolean -> true(0) or false(0) a keyword
let a = true;
console.log(typeof a);               // type is boolean

// Undefined-> something not defined yet but may be defined later on.
var name;
console.log(typeof name);
name = 'now i am defined calue im having a value'
console.log(typeof name);           // now the type is of string.

// NULL -> 
const Null = null;
console.log(typeof Null);          // Null is of object type

// Objects -> If we have to store keyValue pairs then we do use objects and to store multiple data types.  objectName = {key1:value1,key2:value2......}
obj = {
  name : 'shivam',
  signUp : true,
  subscriptionRenew : undefined,
  planExpiry : "20/8/90",
  totalSubscription : 40
}
//console.log(obj);      // type of object
//console.log(typeof obj.signUp);       // typeOf boolean and this is how we can access the values of objects

// Two types of data types.

// PRIMITIVE DATA TYPES = they are atomic in nature like num,string.  they are get assigned or get copy
// NON PRIMITIVE DATA TYPES = they use multiple data types and dependent on primitive data types.  ... they are of reference type.

// Example of non pritive data types is object and array

const userInfo = {
  name : "shivam",
  age : 20,
  posts : {
    postDate : " jan 12 2013",
    text : 'my first post',
    postCategory :{
      field : "tech",
      reachOfPost : [
        {likes: "20k",comments : "300"},{dislikes : "4k",
        reported : { category : "fake likes", reportedCount : 35}}]   
    }
  }
}
console.log(userInfo.posts.postCategory.reachOfPost[1].reported);

// Array can contain array of string,objects,num or combo of all of them. 
// Objects can contain object of object, object of array etc
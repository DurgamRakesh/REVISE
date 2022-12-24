

/*JavaScript:
JavaScript is a lightweight, object-oriented, interpreted pgm lag.
which is used by several websites for scripting webpages.
it is an interpreted, full-fledged pgm lag that enables dynamic webpages.JavaScript

or

JavaScript is a lightweight, interpreted, or just-in-time(JIT), compiled pgm lag with first-class functions.

interpreted -> executed line-by-line.

JavaScript is used to create client-side dynamic webpages.JavaScript

the standared of js is ECMAScript-lanugage-specification(ECMA-262).

Dev by Brendan Eich(NetScape) in 1995

applications of js/ advantages of js:
it is used for create interactive websites
1.client-side validation
2.dynamic drop-down menus
3.display date and time
4.display clocks etc

dis adv:
1.less secure
2.js enable browsers

we can write js code in 3 ways:
1.internal-head tag
2.internal-body tag
3.external in the head section */

//diff ways of printing in js:

// console.log('hello');->this will be display on console
// console.log('welcome to js')
// document.write("hello")->this will be display on screen
// console.warn('this is waring');->this will be display on console like showing waring msg
// window.alert("hello")->display data in alert box

/* variable: A variable is a nemed memory location that is used to store the value.
ex: var variable1 = 200
    var variable2 = "hello"

    var variable1 -> declaring variable.
    var variable1 = 200 -> initilizing varible

 DATA-TYPES IN JS: Nothing but type of data that js understand.

    there are 2 types of datatypes in js:
    1.primitive datatypes(PDTs): 6 types

      1.String:
        represents sequence of characters
        ex:console.log("hello");
           console.log('hello');
           console.log(`hello`);

           string1 = 'welcome'
           string2 = 'javascript'
           print = string1+string2
           console.log(print);
      2.Number:
        represents Number values
        ex:console.log(100);

        add two numbers:-
        num1 = 100
        num2 = 200
        sum = num1+num2
        console.log(sum);
      3.Boolean:
        represents Boolean values either true of false
        ex:console.log(true); or console.log(false);
      4.undefiend:
        represents undefined values,not existing
        ex:console.log(undefiend);
      5.null:
        represents null i.e,varible with no values
        ex:console.log(null);
      6.symbol

    2.non-primitive datatypes(non-PDTs): 
      1.object:
        represents instance of through which we can access members
      2.Array:
        represents group of similar values
      3.RegEx:
        represents regular expressions

JavaScript Scopes: var, let, const
    var: It is a public identifier, accessed inside and outside of the block
    ex: var variable = 100

    let:It is a private identifier, accessed only inside the block
    ex: let variable = 100

    const:It is a private identifier, accessed inside the block 
    ->we can not declared and initilized value separtly it will give error
    ->value cannot be changed
    ex: const variable = 100 */



// JS function: a function is a self-contained piece of code that performs a particular "function".
// a function is a reuseble code-block that will be executed by when the function is called.

//  Syntax: function function_name (parameters){
//      ...(code-block)
//  }

// functions with printing values:
// function display(name){
//     console.log(name);
// }
//  display("welcome to js functions-1");
//  display('welcome to js functions-2');
//  display(`welcome to js functions-3`);

//  functions with returns values:
// function display(name){
//     return name;
// }
// const show = display(`welcome to js functions-3`);
// console.log(show);

// add three numbers:

// function add(n1,n2,n3){
//     return n1+n2+n3
// }
// const total = add(10,20,30)
// console.log(total);

// console.log(typeof(total));
// console.log(total + total);
// console.log(total - total);
// console.log(total * total);
// console.log(total / total);
// console.log(total % total);

// Arrow functions: to creat an represant any function like variable
// SYNTAX:
// variable function_name(parameters)=>{code-block or statements}

// const myfirstfunction = (name)=>{
//     console.log(name);
// }
// myfirstfunction('welcome to arrow functions in javascript')

// const myfirstfunction = (name)=>{
//     return name
// }
// const show = myfirstfunction('welcome to arrow functions in javascript')
// console.log(show);

// // add two numbers:

// const add = (num1,num2) => {
//     return (num1+num2)
// }
// const sum = add(10,20)
// console.log(sum);

// const myfun = (n1,n2) => {
//     if(typeof(n1) === 'number' && typeof(n2) === 'number'){
//         return (n1+n2)
//     }
//     else if(typeof(n1) === 'string' && typeof(n2) === 'string'){
//         return n1+n2
//     }
//     else{
//         return 'invalid format'
//     }
// }
// const show = myfun(30,40)
// const show = myfun('hi ','hello')
// console.log(show);

// print table:
// number = 9
// for(let i = 1; i <= 10; i++){
//     console.log(`${number} * ${i} = ${number * i}`);
// }

// print star patterns with loop:

//1.sqr type pattern:

// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= 5; j++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:

// *****
// *****
// *****
// *****
// *****

// for(let i = 0; i < 4; i++){
//   for(let j = 0; j < 4; j++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:
// ****
// ****
// ****
// ****
// <------------------------------------------------------------>

//2.Leftside Triangle:             [just change innerloop(j) condition = i]

// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= i; j++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:

// *
// **
// ***
// ****
// *****

// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= i; j++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:

// *
// **
// ***
// ****
// *****
// <------------------------------------------------------------>

//3.Leftside reverse Triangle:      [just change innerloop1(j) initalvalue  = outerloop(i) initalvalue and condition = i condition ]

// let rows = 6
// for(let i = 1; i <= rows; i++){
//   for(let j = i; j <= rows; j++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:

// *****
// ****
// ***
// **
// *
// <------------------------------------------------------------>

// 4.Rightside Triangle:              [just change innerloop1(j) initalvalue  = outerloop(i) initalvalue and condition = i condition-i ]
//                                    [just change innerloop2(k) initalvalue  = outerloop(i) and condition = i ]

// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= 5 - i; j++){
//     document.write('&nbsp;&nbsp;')
//   }
//   for(let k = 1; k <= i; k++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:

//     *
//    **
//   ***
//  ****
// *****

// <------------------------------------------------------------>

// 5.Rightside reverse Triangle:             [just change innerloop1(j) initalvalue  = outerloop(i) initalvalue and condition = i]
//                                           [just change innerloop2(k) initalvalue  = i and condition = outerloop(i) condition]

// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= i; j++){
//     document.write('&nbsp;&nbsp;')
//   }
//   for(let k = i; k <= 5; k++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:

// *****
//  ****
//   ***
//    **
//     * 

   // <------------------------------------------------------------>

// 6.(i).Pyramid or Triangle:               [same as rightside triangle just remove one space(&nbsp;) from innerloop1(j)]

// for(let i = 1; i <= 5; i++){
//   for(let k = 1; k <= 5 - i; k++){
//     document.write('&nbsp;')
//   }
//   for(let j = 1; j <= i; j++){
//     document.write('*')
//   }
//   document.write('<br>')
// }

// output:

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// <------------------------------------------------------------>

// 6.(ii).Pyramid or Triangle:            [jusu add new innerloop3(l) intialvalue = 2 andcondition = i]

//  for(let i = 1; i <= 5; i++){
//    for(let j = 1; j <= 5 - i; j++){
//      document.write('&nbsp;&nbsp;')
//    }
//    for(let k = 1; k <= i; k++){
//      document.write('*')
//    }
//    for(let l = 2; l <= i; l++){
//     document.write('*')
//    }
//    document.write('<br>')
//  }

//  output:

//     *
//    ***
//   *****
//  *******
// *********
// <------------------------------------------------------------>

// <------------------------------------------------------------>
//  Higher-order array methods:

// 1.The forEach() :method executes a provided function once for each array element.

//SYNTAX:
// Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// Inline callback function
// forEach(function (element) { /* … */ })
// forEach(function (element, index) { /* … */ })
// forEach(function (element, index, array) { /* … */ })
// forEach(function (element, index, array) { /* … */ }, thisArg)

// const arr = [1,2,3,5]
// let sum = 0
//  function fname(index){
//    sum += index
//  }
//  arr.forEach(fname);
//  console.log(sum);

//  let mul = 1
//  arr.forEach(i => {mul*=i})
//  console.log(mul);

//  count the letters how many times occuor:

// const letarr = ['d','r','e','a','b','a','b','c','a','r']
// let count = []
// letarr.forEach(i =>{
//   if(count[i]){
//     count[i]++
//   }else {
//     count[i] =1
//   }
// } )
// console.log(count);

//  letarr.forEach((i,r) => {
//   console.log(`a[${r}] = ${i}`);
// })

// 2.The map(): method creates a new array populated with the results of calling a provided function on every element in the calling array. and return the array

// const arr = [1,2,3,4,5]

// const newarr = arr.map((element , index) => element * index) //[1,2,3,4,5] * [0,1,2,3,4]
//mul each element with * index values                  
// console.log(newarr);

// const prices = [
//   {
//     name:'laptop',
//     price:'5000',
//     count: 4
//   },
//   {
//     name:'desktop',
//     price:'9000',
//     count: 6
//   },
//   {
//     name:'mobile',
//     price:'4000',
//     count: 3
//   },
// ]

// let list = prices.map(item => item.count)

// let list = prices.map(item => item.count * item.price)

// let list = prices.map((item,index) => (item.count * index))
// console.log(list);

// 3.The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','rakesh'];
// const result = words.filter(word => word.length >= 6);
// console.log(result);

// const numbers = [1,2,3,4,5,6,7,8,9]

// function evenno(index){
//   if(index % 2 === 0){
//     return index
//   }
// }

// function oddno(index){
//   if(index % 2 !== 0){
//     return index
//   }
// }

// const num = numbers.filter(evenno)
// console.log(num);
// const num = numbers.filter(oddno)
// console.log(num);

// 4.reduce():


// const array1 = [1, 2, 3, 4,5,6,7,8,9];
// const initialValue = 6;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// const newarr = array.reduce(reducer);
// console.log(newarr);
// output:
// accumulator: 15, currentValue: 16, index: 1, returns: 31
// accumulator: 31, currentValue: 17, index: 2, returns: 48
// accumulator: 48, currentValue: 18, index: 3, returns: 66
// accumulator: 66, currentValue: 19, index: 4, returns: 85
// 85

// const prices = [
//     {
//       name:'laptop',
//       price: 5000,
//       count: 4
//     },
//     {
//       name:'desktop',
//       price: 9000,
//       count: 6
//     },
//     {
//       name:'mobile',
//       price: 4000,
//       count: 3
//     }
//   ]

//   const total = prices.reduce((acc, item) => acc + (item.price * item.count),100)

//   console.log(total);

// 5.The sort(): method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// Syntax:
// Functionless
// sort()

// Arrow function
// sort((a, b) => { /* … */ } )

// Compare function
// sort(compareFn)

// Inline compare function
// sort(function compareFn(a, b) {s /* … */ })

// function compareFn(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }


// compareFn(a, b) return value         	sort order

//       > 0	                              sort a after b (b comes first)
//       < 0	                              sort a before b(a comes first)
//       === 0	                            keep original order of a and b

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]




// const stringArray = ["Blue", "Humpback", "Beluga"];
// const numberArray = [40, 1, 5, 200];
// const numericStringArray = ["80", "9", "700"];
// const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// stringArray.join(); // 'Blue,Humpback,Beluga'
// stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

// numberArray.join(); // '40,1,5,200'
// numberArray.sort(); // [1, 200, 40, 5]
// numberArray.sort(compareNumbers); // [1, 5, 40, 200]

// numericStringArray.join(); // '80,9,700'
// numericStringArray.sort(); // ['700', '80', '9']
// numericStringArray.sort(compareNumbers); // ['9', '80', '700']

// mixedNumericArray.join(); // '80,9,700,40,1,5,200'
// mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
// mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']



// OBJECTS -> A way of represting any data/info in the form of key: value
// ARRAYS AND OBJECTS BOTH ARE REFERENCE TYPE

// 1. Using Object Literal - {  }

// const myobj = {
//   name:"emp_one",
//   age:30,
//   gender:"M",
//   company: 'cmp_one',
//   verified: true,
//   address:{
//     street:'new street-1',
//     roadno:10,
//     city:'hyd',
//     state: 'TS'
//   },
//   hobbies:['music','play chess','codeing',{v1:'a',v2:100,v3:false}]
// }
// console.log(myobj); 

// console.log(myobj.hobbies[3].v3);

// console.log(myobj); 

// myobj.mobileno = 987654321 //add new property
// console.log(myobj);
// myobj.name = 'emp_two'    //change property(name: emp_one to emo_two)
// myobj.hobbies[3].v3 = true
// console.log(myobj); 

// 2.Using Object() Constructor:

// const newobj = new Object()

// newobj.name = 'emp_one'
// newobj.age = 30
// newobj.gender = 'M'
// newobj.mail = 'abc@gmail.com'
// newobj.address = {
//     street:'new street-1',
//     roadno:10,
//     city:'hyd',
//     state: 'TS'
// }
// newobj.hobbies = ['music','play chess','codeing',{v1:'a',v2:100,v3:false}]

// console.log(newobj.name);
// console.log(newobj.address.roadno);
// console.log(newobj.hobbies[3].v2);

// newobj.name = 'emp_two'        //change property(name: emp_one to emo_two)
// newobj.hobbies[3].v3 = true
// console.log(newobj);

// newobj.mobile = 987654321     //add new property
// console.log(newobj);

// 3. Using Constructor Function:

// function userdata(name,age,email,address,hobbies){
//   this.uname = name
//   this.uage = age
//   this.uemail = email
//   this.uaddress = address
//   this.uhobbies = hobbies

//   this.change = (newName) => {      //change property(name: emp_one to emo_two)
//     this.uname = newName
// }
// }

// const emp = new  userdata('emp_one',100,'abc@gmail.com',{
//   street:'new street-1',
//   roadno:10,
//   city:'hyd',
//   state: 'TS'
// },['music','play chess','codeing',{v1:'a',v2:100,v3:false}])

// console.log(emp);

// emp.change('emp_two')    //change property(name: emp_one to emo_two)
// console.log(emp.uaddress.roadno);
// console.log(emp.uhobbies[3].v2);


// DOM [DOCUMENT OBJECT MODEL]:-

// DOM is a application programming interface (API) for manipulating HTML documets.

// by using DOM we can access, change or remove any HTML element and also we can add new elements at any position.

// properties:

// textcontent: using this we can change the text of inside a given element 

// document.all[8].textContent = 'WELCOME TO JS'
// console.log(document);
// console.dir(document.URL);
// console.log(document.all[8].textContent = 'WELCOME TO JS');

// innerHTML: using this we can insert new element inside a given element.

// document.all[8].innerHTML = '<h3> hello wel to js </h3>'
// console.log(document.all[8].innerHTML = '<h3> hello wel to js </h3>');

// methods:

// in js there are 5 types of methods :
// 1.document.getElementById("id_name"): returns only one Element.
// const newvar = document.getElementById("h1-tag")
// const newvar2 = newvar.textContent = "hello...hi..."
// console.log(newvar2);
// // 2.document.getElementsByClassName("class_name"): returns list of elements as array[].
// const list = document.getElementsByClassName('list-grp')
// console.log(list.length);
// console.log(list[8]);


// const ual = document.getElementsByClassName('list')
// const lists = document.getElementsByClassName('list-grp')
// console.log((lists[5].textContent));
// console.log((lists[3].textContent));

// print even list:

// for(let i = 0; i <= lists.length; i++){
//   if( i % 2 !== 0){
//     console.log((lists[i].textContent));
//   }
// }
// // print odd list:

// for(let i = 0; i <= lists.length; i++){
//   if( i % 2 == 0){
//     console.log((lists[i].textContent));
//   }
// }

// 3.document.getElementsByTagName("tag_name/element_name"): returns list of elements as array[] with specified EventTarget.

// const lab = document.getElementsByTagName('h1')
// console.log(lab);
// 4.document.querySelector("#id_name/.class_name/tag_name"): returns only first element that matchs selector.

// const rrr = document.querySelector('.list-grp')
// console.log(rrr);

// const aaa = document.querySelector('#h1-tag')
// console.log(aaa);

// const bbb = document.querySelector('h1')
// console.log(bbb);


// 5.document.querySelectorAll("#id_name/.class_name/tag_name"): returns all elements that matchs selctor.
// const rrr = document.querySelectorAll('.list-grp')

// for(let i = 0; i <= rrr.length; i++){
//   console.log(rrr[i].textContent);
//   }

// const aaa = document.querySelectorAll('#h1-tag')
// console.log(aaa);

// const bbb = document.querySelectorAll('h1')
// console.log(bbb);
// for(let i = 1; i <= bbb.length; i++){
//   console.log(bbb[i].textContent);
//   }

// Traversing elements in DOM:

// 1.parentNode: it returns the parentnode of a given node if it is not found it will give null

// let parentnode = document.querySelector('#h1-tag')

// console.log(parentnode.parentNode); //div
// console.log(parentnode.parentNode.parentNode); //body
// console.log(parentnode.parentNode.parentNode.parentNode); //html
// console.log(parentnode.parentNode.parentNode.parentNode.parentNode); //document
// console.log(parentnode.parentNode.parentNode.parentNode.parentNode.parentNode); //not display because document is parentnode of all parentnodes.

// 2.childnode:

// let lists = document.querySelector('.list')

// console.log(lists.childElementCount);//9
// console.log(lists.childNodes);//nodelist
// console.log(lists.children);//list
// console.log(lists.firstChild);//#text -because we will have some spaces
// console.log(lists.firstElementChild.style.color = 'red');//it will give firstelement in the list
// console.log(lists.lastChild);//#text
// console.log(lists.lastElementChild.style.backgroundColor = '#f4f4f4');//it will give lastelement in the list

// let lists = document.querySelector('.list').children
// for(let i = 0; i < lists.length; i++){
//   if(i % 2 === 0){
//     console.log(lists[i].style.backgroundColor = 'red');
//     console.log(lists[i].style.marginTop = '5px');
//     console.log(lists[i].style.listStyle = 'none');
//   }
//   else{
//     console.log(lists[i].style.marginTop = '5px');
//     console.log(lists[i].style.backgroundColor = 'blue');
//   }
  
// }

// 3.siblings:

// let a = document.querySelector('#h1-tag').nextElementSibling
// console.log(a);
// console.log(document.querySelector('#h1-tag').previousElementSibling);

// Adding element from dom:

// const newdiv = document.createElement('div')
// newdiv.setAttribute('class','div1')
// newdiv.setAttribute('id','div2')
// newdiv.textContent = 'this is my div'

// console.log(newdiv);

// document.querySelector('#btn').addEventListener('click',(e)=>{
//   e.preventDefault()

//   text  = 'hello'
//   const newli = document.createElement('li')
//   newli.textContent = text
//   newli.setAttribute('class','list-grp')
//   document.querySelector
// })

// // event parameter:

// document.querySelector('.btn').addEventListener('click',(e) =>
// {
//   console.log('hi  hello btn clicked');
// }
// )
// document.querySelector('.btn').addEventListener('click',(e) =>
// {
//   e.preventDefault()
//   console.log('hi  hello btn clicked');
// }
// )
// document.querySelector('#text-input').addEventListener('keydown',(e)=>{
//   e.preventDefault()
//   console.log(e.target.value);

// })


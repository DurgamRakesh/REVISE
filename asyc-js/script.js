// asyc_js:


// const jobs = [
//     {name:'emp1',id:101,dest:"company1"},
//     {name:'emp2',id:102,dest:"company2"},
//     {name:'emp3',id:103,dest:"company3"},
//     {name:'emp4',id:104,dest:"company4"},
//     {name:'emp5',id:105,dest:"company5"}
    
// ]


// const addnewjobs = (job) =>{
//     setTimeout( () =>{
//         jobs.push(job)
//     },3000)

// }

// const displayjobs = () =>{
//     setTimeout( () =>{
//         jobs.forEach(job => console.log(job.name))
//     },2000)
// }
// addnewjobs({name:'emp6',id:106,dest:"company6"})
// displayjobs();

// using callback function:


// Side-Effect -> function which takes longer to execute those functions are called Side-Effet function.
// here addnewjobs is Side-Effect function.

// const addnewjobs = (job,callback) =>{   //here callback is a callback function of addnewjobs
//     setTimeout( () =>{
//         jobs.push(job)
//         callback()
//     },3000)           //it will executed after 3sec

// }

// const displayjobs = () =>{
//     setTimeout( () =>{
//         jobs.forEach(job => console.log(job.id))
//     },2000)   //it will executed after 2sec
// }

// //total 5sec 
// addnewjobs({name:'emp6',id:106,dest:"company6"},displayjobs)

// Promises:

// Promises are a advance callback which accepts two more callbacks -> resolve() & reject() -> ERROR HANDLING

// const jobs = [
//     {name:'emp1',id:101,dest:"company1"},
//     {name:'emp2',id:102,dest:"company2"},
//     {name:'emp3',id:103,dest:"company3"},
//     {name:'emp4',id:104,dest:"company4"},
//     {name:'emp5',id:105,dest:"company5"}
    
// ]


// const addnewjobs = (job) => {
//     return new Promise((resove,reject) => {
//         const error = false
//         if(error){
//             console.log('error in reject');
//             reject();
//         }
//         else{
//             setTimeout(() => {
//                 jobs.push(job)
//                 resove();
//             }, 3000);
//         }
//     })
// }
// ->>>if error occured if block executed , or else block will be executed.

// const displayjobs = () => {
//     setTimeout(() => {
//         jobs.forEach(job => console.log(job.id))
//     }, 2000);
// }

// addnewjobs({name:'emp6',id:106,dest:"company6"})
// .then(() => displayjobs()) //->>> resove()
// .catch(() => console.log('error coming') ) //->>> reject()


// let btn = document.querySelector('#my-btn')

// btn.addEventListener('click',() => {
//     document.querySelector('#body').style.backgroundColor = 'red'
// })


// JS API:


const xhr = new XMLHttpRequest();
const url = 'https://api.github.com/users'
console.log(url);

//READYSTATE => 0
console.log(`This step number is ${xhr.readyState}`);   

//Open the portal of communication b/w the client and the server:
//READYSTATE => 1
xhr.open('GET',url)  //Sets the request method, request URL, and synchronous flag.
console.log(`This step number is ${xhr.readyState}`);   

xhr.onreadystatechange = () => {
console.log(`This step number is ${xhr.readyState}`);  
   
//READYSTATE => 4
if(xhr.readyState === 4  && xhr.status === 200){
    const text = JSON.parse(xhr.responseText)
    // console.log(text[0].login);

    let count = ''
    text.forEach(element => {
      //  console.log(element.login); 
    //   let count = []
    //   count += element.id
      
    //   console.log(count[0]);
   count += `<img style="height:250px; width:250px; margin:10px;" src="${element.avatar_url}"/>`
    
    });document.querySelector('.div').innerHTML = count

}
}

xhr.send()




// document.querySelector('#cross').addEventListener('click' () => {
// document.querySelector("#hello")
// })
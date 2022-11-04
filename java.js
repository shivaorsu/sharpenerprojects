const posts=[
    {titile: 'post one', body:'This is post one'},
    { titile: "post two", body:"this is post two"}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((posts,index)=>{
            output +='<li>${post.title}</li>';
        });
        document.body.innerHTML = output;
    },1000);
  }

  function createPost(post){
    return new Promise((resolve, reject)=>{
     setTimeout(()=>{
        posts.push(post);
        const error =true;
        if(!error){
            resolve();
        }else {
            reject('Error: Something went worng');
        }
     },2000);
    });
  }
   
const promise1 = promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new promise ((resolve, rejecct)=>
setTimeout(resolve,2000,"Goodbye")
) 
promise.all([promise1,promise2,promise3]).then((
    (values) => console.log(values)));

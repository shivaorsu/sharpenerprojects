const posts=[
    {titile: 'post one', body:'This is post one',createdAt:new Date().getTime},
    { titile: "post two", body:"this is post two",createdAt:new Date().getTime}
];

function  getPost(){
    let output="";
    for(let i=0;i<posts.length;i++){
        output+='<li>${posts[i].title} - last update ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago </li>'


    }
    document.body.innerHTML=output;
}

function createPost(post,callback){
    setTimeout(()=>{

        posts.push({...post,createdAt:new Date().getTime()});

        callback()
    },2000)
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({ ...post,createdAt:new Date().getTime()});
        callback();
    },6000)
}
  createPost({ titile:'post Three',body:"this is post three"}, getPost);
  createPost({ titile:'post Four',body:"this is post four"}, getPost)
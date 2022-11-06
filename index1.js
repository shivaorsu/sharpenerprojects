var btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    document.querySelector('.btn').style.color = "white";
    document.querySelector('.btn').style.background = "black";
});



window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/1668f757c5844e07a41aaf7e6f11ecb2/appointmentdata")
    .then((response)=>{
        console.log(response)
        for(let i=0;i<response.data.length;i++){
            addUser(response.data[i])
        }

    })
    .catch((error)=>{
        console.log(error)
    })
    
})

function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;

    let obj = {
        name,
        email,
      }
       axios.post("https://crudcrud.com/api/1668f757c5844e07a41aaf7e6f11ecb2/appointmentdata",obj)
      .then((response)=>{
        addUser(response.data)
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
      //localStorage.setItem(obj.email,JSON.stringify(obj));
      //addUser(obj);
}

function addUser(user){
    if(localStorage.getItem(user.email)!== null){
        removeUser(user.email);
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name}- ${user.email}
    <button class="editbtn" onCLick=editUser('${user.name}','${user.email}')>Edit</button>
    <button class="deletebtn" onCLick=deleteUser('${user.email}')>X</button>
     
    </li>`;
    parentNode.innerHTML =  parentNode.innerHTML + childHTML;
}

function deleteUser(emailId){
    // console.log(emailId)
    localStorage.removeItem(emailId);
    removeUser(emailId);
}

function removeUser(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const deletingChildNode = document.getElementById(emailId);
    if(deletingChildNode){
        parentNode.removeChild(deletingChildNode);

    }
    
}   
function editUser(name,emailId){
    document.getElementById('username').value = name;
    document.getElementById('emailId').value = emailId;
    deleteUser(emailId);

}

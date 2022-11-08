var btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    document.querySelector('.btn').style.color = "white";
    document.querySelector('.btn').style.background = "black";
});



window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/c0400d14063147c0937030a18c620c6b/appointmentdata")
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
    const ChooseExpenseamount = event.target.Expenseamount.value;
    const Choosedescription = event.target.name.value;
    const ChooseCategory =event.target.Category.value;

    let obj = {
        ChooseExpenseamount,
        Choosedescription,
        ChooseCategory,

        
        
      }
      axios.post("https://crudcrud.com/api/c0400d14063147c0937030a18c620c6b/appointmentdata",obj)
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
    if(localStorage.getItem(user.Choosedescription)!== null){
        removeUser(user.Choosedescription);
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.ChooseExpenseamount}- ${user.Choosedescription}- ${user.ChooseCategory}
    <button class="editbtn" onCLick=editUser('${user.Choosedescription}','${user.ChooseExpenseamount}',' '${user.ChooseCategory}','${user._id}')>Edit</button>
    <button class="deletebtn" onCLick=deleteUser('${user._id}')>Delete</button>
     
    </li>`;
    parentNode.innerHTML =  parentNode.innerHTML + childHTML;
}

function deleteUser(userId){
    axios.delete('https://crudcrud.com/api/c0400d14063147c0937030a18c620c6b/appointmentdata/${user._id}')
    .then((response)=>{
        removeUser(userId);
    })
    .catch((error)=>{
        console.log(error)
    })
    // console.log(emailId)
    //localStorage.removeItem(userId);
    //removeUser(userId);
}

function removeUser(userId){
    const parentNode = document.getElementById('listOfUsers');
    const deletingChildNode = document.getElementById(userId);
    if(deletingChildNode){
        parentNode.removeChild(deletingChildNode);

    }
    
}   
function editUser(ChooseExpenseamount,Choosedescription,ChooseCategory,userId){
    document.getElementById('ChooseExpenseamount').value =ChooseExpenseamount ;
    document.getElementById('Choosedescription').value = Choosedescription;
    document.getElementById('ChooseCategory').value = ChooseCategory;
    deleteUser(userId);

}

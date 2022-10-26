console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.tittle);
console.log(document);
document.title =123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

let headerTitle=document.getElementById("header-title");
let header = document.getElementById("main-header");
header.style.borderBottom="solid 3px #000";

console.log("hello");
let items = document.getElementsByTagName("list-group-item");

console.log(li);
console.log(li[1]);
li[1].textContent="Hello 2";
li[1].style.fontWeight="blod";
li[1].style.backgroundcolor="green";



for(let i=0;i<li.length;i++){
li[i].style.backgroundcolor="#f4f4f4";
}

let header1 = document.querySelector("#main-header");
header1.style.borderBottom="sloid 4px #ccc";

let input = document.querySelector("input");
input.value = "Hello World";

let submit = document.querySelector("input[type=submit");
submit.value="SEND";

let item =document.querySelector(".list-group-item");
item.style.color = "red";

let lastItem = document.querySelector
(".list-group-item:last-child");
lastItem.style.color = "blue";

let secondItem = document.querySelector
(".list-group-item:last-child(2)");
secondItem.style.color="coral";

let titles = document.querySelectorAll(".item");

console.log(titles);
titles[0].textContent ="Hello";

let odd = document.querySelectorAll(".li:nyh-child(odd)");
let even = document.querySelectorAll(".li:nyh-child(even)");

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundcolor = "#008000";
    even[i].style.backgroundcolor = "#ccc";
}
// TRAVERSING THE DOM
let itemList = document.querySelector("#item");

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.background="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

// Frist Child
console.log(itemList.firstChild);

// frist Elementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// last Child
console.log(itemList.lastChild);

// last Elementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 1";

// next Sibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);
// previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

// creatElement
let newDiv= document.createElement("div");
// Add class
newDiv.className="hello";

//Add id
newDiv.id = "hello1"

//setAttribute
newDiv.setAttribute("title","Hello Div");

// text node
 let newDivText = document.createTextNode("Hello World");

 // append child
 newDiv.appendChild(newDivText);
 let container =document.querySelector("header .container");
 let h1 = document.querySelector("header h1");

 console.log(newDiv);
 newDiv.style.forntsize = "30px";
 container.insertBefore(newDiv,h1);

 let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
// creat new li element
let li = document.createElement("li");
 // delete button
 let deleteBtn = document.createTextNode(newItem);

 // Add class to del bitton
 deleteBtn.className="btn btn-danger btn-smfloat-rigth delete";

 // Append text node 
 deleteBtn.appendChild(document.createTextNode("x"));

 //Append button to li
 li.appendChild(deleteBtn);

 // append li to list
 itemList.appendChild(li);

 // remove item
  if(e.target.classList.contains("delete")){
    if(confirm("Are You Sure?")){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
  }

  // Filter Item
  function filterItem(){
    let text =e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName("li");
    Array.from(items).forEach(function(item) {
        let itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.getElementsByClassName.display ="block";

        }else{
            item.getElementsByClassName.display="none";
        }
    }


  }

  filterItem();

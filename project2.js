document.addEventListener('submit', (e) => {
    e.preventDefault();

    var money = e.target.money.value;
    var description = e.target.description.value;
    var category = e.target.category.value;

    var obj = {
        money: `${money}`,
        description: `${description}`,
        category: `${category}`
    }
    axios.post(`https://crudcrud.com/api/246759af955945dfa26537d823dc8223/shiva`,{obj})
    .then((response) => {
        showDetailsOnDisplay(response.data)
    })

})

window.addEventListener('DOMContentLoaded',(e) => {
    e.preventDefault()

    axios.get(`https://crudcrud.com/api/246759af955945dfa26537d823dc8223/shiva`)
    .then((response) => {
        console.log(response)
        let data = response.data;
        for(let i=0;i<data.length;i++){
            showDetailsOnDisplay(response.data[i])
        }
    })
})

function showDetailsOnDisplay(data) {
    axios.get(`https://crudcrud.com/api/246759af955945dfa26537d823dc8223/shiva/${data._id}`)
    .then((response) => {
        console.log(response)
        var parentNode = document.getElementById('resultContainer');
        var childNode = `<li id=${data._id}>${data.obj.money}-${data.obj.description}-${data.obj.category}
                        <button id="editBtn" onclick="editData('${data._id}')">Edit</button>
                        <button id="deleteBtn" onclick="deleteData('${data._id}')">delete</button>
                        </li>`
        parentNode.innerHTML += childNode;
        document.getElementById('money').value = ""
        document.getElementById("description").value = ""
    })
}


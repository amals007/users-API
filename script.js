fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(users=>populateValues(users))

function populateValues(users){
    let htmlData = ``
    users.forEach(user=>{
       
        htmlData += `
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.company.name}</td>
        <td>
        
        <button type="button" class="btn btn-outline-primary" value=${user.id} onclick="fetchUser(event)">Detail</button>
        </td>
        </tr>

        `        
        result.innerHTML = htmlData
    })
}
function fetchUser(event){
 userId = event.target.value
 fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>res.json()).then(data=>displayUserDetails(data))


}

function displayUserDetails(user){
   let htmlData = ``
    htmlData += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name : ${user.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Email : ${user.email}</li>
    <li class="list-group-item">Address : ${user.address.street} </li>
    <li class="list-group-item">City: ${user.address.city} </li>
    <li class="list-group-item">Phone : ${user.phone}</li>
    <li class="list-group-item">Company : ${user.company.name}</li>
  </ul>

</div>
    
    `
    detailCard.innerHTML = htmlData

}

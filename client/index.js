const basicUrl = 'http://localhost:3000'
let todoId = null

$(document).ready(function(){
    auth()
});

function auth(){
    if(localStorage.token){
        $('#home-page').show()
        $('#login').hide()
        $('#register').hide()
        $('#edit-page').hide()
        $('#create-page').hide()
        $('#api-page').hide()
        $('#navbar').show()
        $('#calender-form').hide()
        fetchData()
    }else{
        $('#navbar').hide()
        $('#home-page').hide()
        $('#login').show()
        $('#create-page').hide()
        $('#api-page').hide()
        $('#edit-page').hide()
        $('#register').hide()
        $('#calender-form').hide()
    }
}

// Berhubung dengan administrasi dan login
function register(event){
    $('.message').empty();
    event.preventDefault()
    let name = $('#fullname').val()
    let email = $('#email-register').val()
    let password = $('#password-register').val()
    $.ajax({
        url: `${basicUrl}/register`,
        method: 'POST',
        data:{
            name,
            email,
            password
        }
    })
    .done(data=>{
        console.log(data)
        auth()
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
    .always(_=>{
        $('#fullname').val('')
        $('#email-register').val('')
        $('#password-register').val('')
    })
}

function login(event){
    $('.message').empty();
    event.preventDefault()
    let email = $('#email-login').val()
    let password = $('#password-login').val()
    console.log(email, password)
    $.ajax({
        url: `${basicUrl}/login`,
        method: 'POST',
        data:{
            email,
            password
        }
    })
    .done(data=>{
        // console.log(data)
        localStorage.setItem('token', data.token)
        auth()
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
    .always(_=>{
        $('#email-login').val('')
        $('#password-login').val('')
    })
}

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        url: `${basicUrl}/googlelogin`,
        method: 'post',
        data:{
            id_token 
        }
    })
    .done(data=>{
        // console.log(data)
        localStorage.setItem('token',data.token)
        auth()
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

// Berhubung dengan navbar dan link
function registerbtn(){
    $('#login').hide()
    $('#register').show()
}

function homePage(){
    $('#home-page').show()
    $('#edit-page').hide()
    $('#create-page').hide()
    $('#api-page').hide()
    $('#calender-form').hide()
}

function calenderbtn(){
    $('#home-page').hide()
    $('#edit-page').hide()
    $('#create-page').hide()
    $('#api-page').hide()
    $('#calender-form').show()

    // fetchAPI()
}

function addbtn(){
    $('#home-page').hide()
    $('#edit-page').hide()
    $('#create-page').show()
    $('#api-page').hide()
    $('#calender-form').hide()
}

function logout(){
    signOut()
    localStorage.clear()
    auth()
}

// Berhubung dengan data

// Untuk looping data
function fetchData(){
    $.ajax({
        method: 'GET',
        url: `${basicUrl}/todos`,
        headers:{
            token: localStorage.token
        }
    })
    .done(data=>{
        console.log(data.data)
        $('.home-container').empty()
        for (let i = 0; i <data.data.length; i++) {
            $('.home-container').append(`
            <div class="col mb-4" data-todoId="${data.data[i].id}">
                <div class="card">
                    <img src="${data.data[i].imageURL}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.data[i].title}</h5>
                        <p class="card-text">${data.data[i].description}</p>
                        <p class="card-text"><small >${data.data[i].status}</small></p>
                        <p class="card-text"><small class="text-muted">${data.data[i].due_date}</small></p>
                        <a onclick="toEditPage(${data.data[i].id})"> Edit </a>
                        <a onclick="toDeletePage(${data.data[i].id})">Delete</a>
                    </div>
                </div>
          </div>
            `)
        }
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}

function removeTodo(todoId){
    $(`div[data-todoId="${todoId}"`).remove()
}

//Menambahkan data lalu kalau berhasil akan masuk ke looping data
function addData(event){
    let title = $('#title-create').val()
    let description = $('#description-create').val()
    let status = $('#status-create').val()
    let due_date = $('#due_date-create').val()
    let imageURL = $('#imageURL-create').val()
    event.preventDefault()
    $.ajax({
        url: `${basicUrl}/todos`,
        method: 'POST',
        data:{
            title,
            description,
            status,
            due_date,
            imageURL
        },
        headers:{
            token: localStorage.token
        }
    })
    .done(_=>{
        homePage()
        fetchData()
    })
    .fail(err=>{
        // console.log('masuk sini')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}

// Mencari data berdasarkan id lalu data tersebut akan dilempar ke edit form
function toEditPage(id){
    // console.log(id)
    todoId = id
    $('#home-page').hide()
    $('#edit-page').show()
    $.ajax({
        url: `${basicUrl}/todos/${id}`,
        method: 'GET',
        headers:{
            token: localStorage.token
        }
    })
    .done(data=>{
        // console.log(data)
        $('#title').val(`${data.data.title}`)
        $('#description').val(`${data.data.description}`)
        $('#status').val(`${data.data.status}`)
        $('#due_date').val(`${data.data.due_date}`)
        $('#imageURL').val(`${data.data.imageURL}`)
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}

// Data sudah diisi dengan data yang mau diedit melalui function toEditPage
function editData(event){
    let title = $('#title').val()
    let description = $('#description').val()
    let status = $('#status').val()
    let due_date = $('#due_date').val()
    let imageURL = $('#imageURL').val()
    event.preventDefault()
    $.ajax({
        url: `${basicUrl}/todos/${todoId}`,
        method: 'PUT',
        headers:{
            token: localStorage.token
        },
        data:{
            title,
            description,
            status,
            due_date,
            imageURL
        }
    })
    .done(_=>{
        homePage()
        fetchData()
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}

// Mencari data berdasarkan id jika berhasil akan memanggil function deleteTodo
function toDeletePage(id){
    todoId = id
    $.ajax({
        url: `${basicUrl}/todos/${id}`,
        method: 'GET',
        headers:{
            token: localStorage.token
        }
    })
    .done(_=>{
        // console.log(data)
        deleteTodo()
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}

// Data sesuai dengan id yang didapat dari toDeletePage akan didelete
function deleteTodo(){
    $.ajax({
        url: `${basicUrl}/todos/${todoId}`,
        method: `delete`,
        headers:{
            token: localStorage.token
        }
    })
    .done(_=>{
        homePage()
        // fetchData()
        removeTodo(todoId)
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}

function getHoliday(event){
    let country = $('#country-code').val().toUpperCase()
    let year = $('#calender-year').val()
    // console.log(country)
    event.preventDefault()
    $.ajax({
        method: 'GET',
        url: `${basicUrl}/calender-holiday/${country}/${year}`,
        headers:{
            token: localStorage.token
        }
    })
    .done(data=>{
        $('.api-container tbody').empty()
        $('#api-page').show()
        // console.log(data)
        for (let i = 0; i <data.length; i++) {
            $('.api-container tbody').append(`
                <tr>
                    <td>${i+1}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].date}</td>
                    <td>${data[i].public}</td>
                    <td>${data[i].country}</td>
                    <td>${data[i].type}</td>
                </tr>
            `)
        }
    })
    .fail(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.responseJSON.errors}`
        })
    })
}
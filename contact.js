const validate = () => {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;

    console.log(email,message,name)

    document.getElementById('showalert').innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert"> 
    Feedback Received
    Name: ${name}
    Email:${email}
    Message:${message}
</div>`
}
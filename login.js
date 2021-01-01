

const validate = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(email,password)
    if (email == 'test@test.test' && password == "123456")
        document.getElementById('showAlert').innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        Login Successful
      </div>`
    else 
        document.getElementById('showAlert').innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        Login Falied ...please use email: test@test.test and password=123456 to login..we have not used database here so i have hard coded values
      </div>`
}
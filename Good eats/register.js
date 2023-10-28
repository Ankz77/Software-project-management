function registerUser(){
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;

    //Two ways to store data in localstorage

    //1
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPwd', pass);
    localStorage.setItem('userName', user);

    /*2
    localStorage.userEmail = email;
    localStorage.userPwd = pass;
    */
}
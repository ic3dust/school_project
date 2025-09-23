document.getElementById('showpass').addEventListener('change', function(){
    const password = document.getElementById('password');
    password.type= this.checked ? 'text' : 'password';
});

function parseLogin(){
    document.getElementById('submit').addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let alertLoginName = "";

    for (let i=0; i<name.length; i++){
        alertLoginName += name[i] + "\n";
    }
    
    document.getElementById('popUpCont').textContent = alertLoginName;
    document.getElementById('popUp').style.display = "block"; 
    document.getElementById('closePopUp').addEventListener('click', function(){
        document.getElementById('popUp').style.display = "none";
    });
});
}
parseLogin();

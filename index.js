const userOne = {
    role: 'admin',
    firstname: 'Дмитрий',
}

function checkAccess (user, role){
    if (user.role === role){
        return true;
    }
    return false;
}

function showSuccessMessage (){

}

if (checkAccess(userOne, 'admin')){
    showSuccessMessage();
}
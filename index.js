document.querySelector('.send').onclick = check;
let email = document.querySelector('.email');
let message = document.querySelector('.mess');

function check(){
    if(email.value == ''){
        email.value = 'anastasiyapaliashuk@gmail.com';
    }else{   
        email.value = '';
    };
    let str = message.value;
    if(str == str.match(/\+375[1-9]{2}[1-9][0-9]{6}$/g)){
        message.value = 'your phone number is correct';
    }else {
        message.value = 'your phone number is not correct';
    };
};



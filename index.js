const check = document.querySelector('.send');
const email = document.querySelector('.email');
const message = document.querySelector('.mess');
const description = document.querySelector('.description');
const momentum = document.querySelector('.momentum');
const artQuiz = document.querySelector('.art-quiz');
const christmasToys = document.querySelector('.christmas-toys');
const portfolio = document.querySelector('.portfolio');

const descriptionsArr = ['This application made using HTML, CSS, JS, API', 'This application made using HTML, SCSS, JS, Webpack', 'This application made using HTML, SCSS, TypeScript, Webpack' ]

check.addEventListener('click', () => {
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
});

portfolio.onmouseover = function(event) {
    let li = event.target.closest('li'); 
    if (!li) return; 
  
    if (!portfolio.contains(li)) return; 
  
    setDescription(li); 
};

function setDescription(li){
    let appName = li.className;
    console.log(appName);
    
    switch(appName){
        case 'momentum about':
            description.innerHTML = descriptionsArr[0];
            break;  
        case 'art-quiz about':
            description.innerHTML = descriptionsArr[1];
            break;  
        case 'christmas-toys about':
            description.innerHTML = descriptionsArr[2];
            break;  
    }
}
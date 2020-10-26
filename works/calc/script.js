const links = document.querySelector('.buttons').children;
const listener = event => {
    event.preventDefault();
    calc.isValue(event);
    
}
for (let key of links){
       
    key.addEventListener('click',listener);
       
}



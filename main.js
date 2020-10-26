const jobs = document.querySelectorAll('.job');
for (let key of jobs) {
    
    key.addEventListener('click', event => {
       
        location.assign(event.target.dataset.href);
        
    })
}
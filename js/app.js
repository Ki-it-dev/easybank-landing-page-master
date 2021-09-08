const listMobile = document.querySelector('.header-moblile-lists');
const navInput = document.querySelector('.nav-input');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');

var list = 1;

navInput.addEventListener('click',function(){
    list++;
    switch(list){
        case 2:
            listMobile.classList.add('animationListMobile');
            bar.style.display = 'none';
            close.style.display = 'block';
            break;
        case 3:
            list = 1;
            listMobile.classList.remove('animationListMobile');
            bar.style.display = 'block';
            close.style.display = 'none';
            break;
    }
    
})

var list = document.querySelectorAll('.magic-nav__item');

function activeLink(){
    list.forEach((item)=> 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',activeLink));
console.log('kien')
console.log(list);
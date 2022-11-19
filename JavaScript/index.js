//Mudança da cor do menú ao fazer o scroll
window.addEventListener('scroll', function(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('sticky', window.scrollY > 0);
  })


//Marcação da página atual
document.querySelectorAll('header nav #nav-principal ul li a').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})
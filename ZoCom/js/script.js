let menuButton = document.querySelector('.site_navbar--menuButton'); 
let exitMenuButton = document.querySelector('.site_navbar--sideMenu--exitButton'); 
let sideMenu = document.querySelector('.site_navbar--sideMenu'); 


menuButton.addEventListener('click', ()=> {
    if(sideMenu.classList.contains('sideMenu--close') && !sideMenu.classList.contains('sideMenu--open')){
        sideMenu.classList.remove('sideMenu--close'); 
        sideMenu.classList.add('sideMenu--open');
    }

});


exitMenuButton.addEventListener('click', ()=> {
    if(!sideMenu.classList.contains('sideMenu--close') && sideMenu.classList.contains('sideMenu--open')){
        sideMenu.classList.remove('sideMenu--open'); 
        sideMenu.classList.add('sideMenu--close');
    }

}); 


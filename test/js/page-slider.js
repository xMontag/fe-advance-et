(function() {
  const d = document;

  
  const menu = d.querySelector('.menu-list');
  const menuOnClick = event => {
    
    if (event.target && event.target.matches('.menu-list>.menu-list-item>a')) {
      console.log(event);
      d.body.style.setProperty('--dx','-100%');
    }
  }

  menu.addEventListener('click', menuOnClick);
  
})();
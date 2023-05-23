onload = () => {
  let menu_button = document.getElementById("menu-button")
  let container = document.getElementById("nav-container")
  let main_container = document.getElementById("main-nav-container")
  let menu_state = false
  menu_button.onclick = () => {
    if(menu_state) {
      container.style.display = "flex";
      main_container.style.width = "40%"
      menu_state = false
    }
    else {
      container.style.display = "none";
      main_container.style.width="3.2rem"
      menu_state = true
    }
  }
  window.onresize = () => {
    if (window.innerWidth >= 800) {
      container.style.display = "flex";
      main_container.style.width = "100%"
    }
    else if(window.innerWidth < 800) {
      if(menu_state) {

        container.style.display = "none";
        main_container.style.width="6.4rem"
        //menu_state = false
      }
      else {
        container.style.display = "flex";
        main_container.style.width = "40%"
        //menu_state = true
      }
    }
  }
}


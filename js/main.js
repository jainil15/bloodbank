onload = () => {
  let menu_button = document.getElementById("menu-button")
  let container = document.getElementById("nav-container")
  let main_container = document.getElementById("main-nav-container")
  let cancel_btn = document.getElementById("cancel-button")
  let menu_state = false
  menu_button.onclick = () => {
    container.style.display = "flex";
    main_container.style.width = "40%"
    menu_state = false
    menu_button.style.display = "none"
    cancel_btn.style.display = "flex"
  }
  cancel_btn.onclick = () => {
    cancel_btn.style.display = "none"
    menu_button.style.display="flex"
    container.style.display = "none";
    menu_state = true
  }
  window.onresize = () => {
    if (window.innerWidth >= 800) {
      container.style.display = "flex";
      main_container.style.width = "100%"
      cancel_btn.style.display = "none"
      menu_button.style.display = "none"
    }
      else if(window.innerWidth < 800) {
        if(menu_state) {

          container.style.display = "none";
          main_container.style.width="6.4rem"
          // menu_state = false

          cancel_btn.style.display = "none"
          menu_button.style.display="flex"
        }
        else {
          menu_button.style.display = "none"
          cancel_btn.style.display = "flex"
          container.style.display = "flex";
          main_container.style.width = "40%"
          // menu_state = true
        }
      }
    }
  }
  let main_div = document.getElementById("main-div")




onload = () => {
  let menu_button = document.getElementById("menu-button")
  let container = document.getElementById("nav-container")
  let main_container = document.getElementById("main-nav-container")
  let cancel_btn = document.getElementById("cancel-button")
  let main_content = document.getElementById("main-content")
  let menu_state = false
  menu_button.onclick = () => {
    console.log(menu_state)
    container.style.width = "40%"
    menu_state = false
    menu_button.style.visibility = "hidden"
    cancel_btn.style.visibility = "visible";
  }
  cancel_btn.onclick = () => {
    cancel_btn.style.visibility = "hidden"
    menu_button.style.visibility="visible"
    container.style.width = "0";
    menu_state = true
  }
  window.onresize = () => {
    if (window.innerWidth >= 800) {

      container.style.width = "100%"
      menu_button.style.visibility = "hidden"
      cancel_btn.style.visibility = "hidden";
    }
      else if(window.innerWidth < 800) {
      container.style.width = "40%"
        if(menu_state) {

          // container.style.display = "none";
          // main_container.style.width="100%"
          // menu_state = false

          container.style.width = 0;

          cancel_btn.style.visibility = "hidden"
          menu_button.style.visibility= "visible"
        }
        else {
          container.style.width = "40%"
          menu_button.style.visibility= "hidden"
          cancel_btn.style.visibility= "visible"
          // container.style.display = "flex";
          // main_container.style.width = "40%"
          // menu_state = true
        }
      }
    }
    main_content.onclick = () => {

    if(!menu_state) {

      cancel_btn.style.visibility = "hidden"
      menu_button.style.visibility= "visible"
      container.style.width = "0";
      menu_state = true
    }

    }

  }




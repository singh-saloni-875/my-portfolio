const themeToggle = document.querySelector("#white-mode");

themeToggle.addEventListener("change", () => {
    if(themeToggle.checked){
        //switch light mode
        document.body.style.backgroundColor = "  #ffffff";
        document.body.style.color = "   #000000";

    }else{

        document.body.style.backgroundColor = "";
        document.body.style.color = "";     
    }

});



// function toggleNav() {
//     const links = document.querySelector('.nav .links');
//     links.classList.toggle('active');
//   }
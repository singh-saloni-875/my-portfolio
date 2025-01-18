document.addEventListener('DOMContentLoaded', (event) => {
    let texts = ['Saloni Singh', 'a Fullstack developer ','Exploring DevOps tools'];
    let textIndex = 0;
    let charIndex = 0;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newTextDelay = 2000; // Delay between current and next text
    let typingElement = document.querySelector('.typing-text');
    
    function type() {
      if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textIndex++;
        if(textIndex >= texts.length) textIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
  
    // Start the typing effect on page load
    setTimeout(type, newTextDelay + 250);
  });
















// const themeToggle = document.querySelector("#white-mode");

// themeToggle.addEventListener("change", () => {
//     if(themeToggle.checked){
//         //switch light mode
//         document.body.style.backgroundColor = "  #ffffff";
//         document.body.style.color = "   #000000";

//     }else{

//         document.body.style.backgroundColor = "";
//         document.body.style.color = "";     
//     }

// });



// function toggleNav() {
//     const links = document.querySelector('.nav .links');
//     links.classList.toggle('active');
//   }
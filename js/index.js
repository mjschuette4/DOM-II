// Your code goes here

//-----------------------------WINDOW-----------------------------------
window.addEventListener("load", function(event) {
    alert("Never gunna give you up");
    alert("Never gunna let you down");
    alert("Never gonna run around and desert you");
    alert("Never gonna make you cry");
    alert("Never gonna say goodbye");
    alert("Never gonna tell a lie and hurt you");
    });
  
// ---------------------------IMAGES---------------------------------

const img1 = document.querySelector('#image1');

    img1.addEventListener('mouseenter', function(event){
    event.target.style.border = '2px dashed green';
    });

    img1.addEventListener('mouseleave', function(event){
        event.target.style.border = 'none';
    });

const img2 = document.querySelector('#image2');

    img2.addEventListener('click', function(event){
        event.target.style.border = ("5px solid black");
    })

const p = document.querySelector('p');
        
    p.addEventListener('copy', function(event){
        alert("Never gunna give you up");
        alert("Never gunna let you down");
        alert("Never gonna run around and desert you");
        alert("Never gonna make you cry");
        alert("Never gonna say goodbye");
        alert("Never gonna tell a lie and hurt you");
    });

const navStop = document.querySelector('nav');

    navStop.addEventListener('click', function(event){
      event.preventDefault();
      alert(`YOU DIRTY DOG, YOU KNOW YOU CAN'T SEE THAT`);
    })

// -------------------------BUTTONS----------------------------------

const memeButton = document.querySelector('#button1');

    memeButton.addEventListener('dblclick', function(event){
        event.target.style.opacity = '.3';
        alert("UH OH YOU BROKE THE BUTTON");
    });

const memeButton2 = document.querySelector('#button2');
    
    memeButton2.addEventListener('contextmenu', function(event){
        event.target.style.border = '2px solid black';
    });

const memeButton3 = document.querySelector('#button3');

    memeButton3.addEventListener('mouseenter', function(event){
        event.target.style.border = '2px dotted blue';
    });

    memeButton3.addEventListener('mouseleave', function(event){
        event.target.style.border = 'none';
    });
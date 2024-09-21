// inception_active = false;

// inception = document.getElementById('inception');
// inception.addEventListener('click', function(){
//     if(inception_active == false){
//         inception.scrollIntoView({
//             behavior: 'smooth',
//             block: 'center',
//             inline: 'center'
//         });
//         inception.style.width = '50em'
//         inception.style.height = '40em'
//         inception.style.borderRadius = '60px'
//         inception.style.left = '104.5em'

//         inception_active = true;
//     }
//     else{
//         inception.style.width = '10em'
//         inception.style.height = '10em'
//         inception.style.borderRadius = '50%'
//         inception.style.left = '120em'

//         inception_active = false;

//     }
// })


// expanding_active = false;

// expanding = document.getElementById('expanding');
// expanding.addEventListener('click', function(){
//     if(expanding_active == false){
//         centerElementOnScreen(expanding);
//         expanding.style.width = '40em'
//         expanding.style.height = '30em'
//         expanding.style.borderRadius = '60px'
//         // expanding.style.left = '110em'

//         expanding_active = true;
//     }
//     else{
//         expanding.style.width = '10em'
//         expanding.style.height = '10em'
//         expanding.style.borderRadius = '50%'
//         // expanding.style.left = '120em'

//         expanding_active = false;

//     }
// })

huh = document.getElementById('history');

huh.addEventListener("wheel", function (e) {
    if (e.deltaY > 0){
        huh.scrollLeft += 100;
        e.preventDefault();
    } 
    else{
        huh.scrollLeft -= 100;
        e.preventDefault();

    }
  });



//   function delay(milliseconds) {
//     return new Promise(resolve => {
//       setTimeout(resolve, milliseconds);
//     });
//   }

// async function centerElementOnScreen(element) {
//     const screenWidth = window.innerWidth;
//     const elementWidth = element.offsetWidth;
    
//     const newLeft = (screenWidth - elementWidth) / 2;
//     console.log(newLeft)
//     console.log(newLeft + huh.scrollLeft)

//     huh.scrollLeft += newLeft
//   }


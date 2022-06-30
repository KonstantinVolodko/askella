// const modal = document.getElementById("myModal");
// const btn = document.getElementById('myBtn')
// const span2 = document.getElementsByClassName("close")[0];



// btn.onclick = function () {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none"
// }

// window.onclick = function(event) {
//     if(event.target == modal) {
//         modal.style.display = "none"
//     }
// }

// const modal2 = document.getElementById("myModal2");
// const btn2 = document.getElementById('myBtn2')
// const span = document.getElementsByClassName("close")[0];



// btn2.onclick = function () {
//     modal2.style.display = "block";
// }

// span.onclick = function() {
//     modal2.style.display = "none"
// }

// window.onclick = function(event) {
//     if(event.target == modal2) {
//         modal2.style.display = "none"
//     }
// }

//= components/



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
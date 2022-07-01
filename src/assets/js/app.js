
//= components/



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
  });


  const swiper2 = new Swiper(".servicesSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".nextBtnServices",
      prevEl: ".prevBtnServices",
    },
  });
$(function () {
  // popup
  $('.bg2 a').click(function () {
    $('.pop1').fadeIn();
  });
  $('.bg3 a').click(function () {
    $('.pop2').fadeIn();
  });

  $('.popup a').click(function () {
    $('.popup').fadeOut();
  });

  // resume
  $(".resume li").click(function(){
		$(this).children("div").slideToggle()
		$(this).siblings().children("div").slideUp();
		$(this).toggleClass("on").siblings().removeClass("on")
	});

  // chart
  $('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 4,
    lineCap: 'butt',
    barColor: '#333',
    trackColor: "#fff",
    size: 100,
    animate: 1000
  });
});


// portfolio slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  // scroll overflow
  watchOverflow: true,
  on: {
    slideChange: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = false;
        swiper.params.mousewheel.releaseOnEdges = false;
      });
    },
    reachEnd: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = true;
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
    reachBeginning: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = true;
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    }
  },

  // responsive
  breakpoints: {
    999: {
      slidesPerView: 1.5,  //브라우저가 1024보다 클 때
    }
  }
});

// 배경 호버

// 배경 호버


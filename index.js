var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      });
    </script>
	<script type="text/javascript">
		let menu = document.querySelector('#menu');
		let navbar = document.querySelector('.navbar');

		menu.onclick = () =>{
			menu.classList.toggle('fa-times');
			navbar.classList.toggle('active');
		}

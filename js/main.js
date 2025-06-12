document.addEventListener("DOMContentLoaded", () => {
	// Swiperの初期化
	const swiper = new Swiper(".swiper", {
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});

	// セクションの開閉処理
	const titles = document.querySelectorAll(".section-title");
	const uls = document.querySelectorAll(".responsive-toggle");

	uls.forEach((ul) => {
		ul.style.height = "0px";
		ul.classList.remove("open");
	});

	titles.forEach((title) => {
		title.addEventListener("click", function (e) {
			const ul = e.target.nextElementSibling;

			ul.classList.toggle("open");
			if (ul.classList.contains("open")) {
				ul.style.height = ul.scrollHeight + "px";
			} else {
				ul.style.height = "0px";
			}
		});
	});

	// AOSの初期化
	AOS.init();
});

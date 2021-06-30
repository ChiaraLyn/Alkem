let image1 = $('.img_find_left');
let title1 = $('.title_find_left');

var tl = gsap.timeline({ defaults: { duration: 2 } });

tl
	.from('.img_find_left1', { backgroundPosition: '-300px 0px ', opacity: 0 })
	.from('.img_find_left2', { backgroundPosition: '-300px 0px ', opacity: 0 })
	.from('.img_find_left3', { backgroundPosition: '-300px 0px ', opacity: 0 });

	// titles Alkem
gsap.from('.title_find_left h1, h2', {
	delay: 1,
	duration: 2,
	x: -400,
	opacity: 0,
	stagger: {
		each: 1,
		from: 'end'
	}
});

// Address animation
gsap.from('#address h4', {
	delay: 1,
	duration: 3,
	x: -400,
	opacity: 0,
});
gsap.from('#address h6', {
	delay: 2,
	duration: 4,
	x: -400,
	opacity: 0,
});
gsap.from('#address p', {
	delay: 3,
	duration: 5,
	x: -400,
	opacity: 0,
});

//social animation
gsap.from('.social img', {
	delay: 2,
	duration: 2,
	x: -800,
	y: -200,
	ease: "power1.out",
	opacity: 0,
	stagger: {
		each: 2,
		from: 'end'
	}
});


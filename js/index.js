//Radial menu trigger
$(document).ready(function () {

    //loader
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1000);


    //sidenav light
    if ($(document).scrollTop() == 0) {
        $(".n1").addClass("side-nav-color");
    }
    //radial menu
    $(".t1").click(function () {
        $(".m1").toggleClass("active");
    });
    $(".t2").click(function () {
        $(".m2").toggleClass("active");
    });
    $(".t3").click(function () {
        $(".m3").toggleClass("active");
    });

    //slideshow text
    var a = "Catechin is a flavanol, a type of natural antioxidant which is found in green tea, as well as some fruits such as apples and berries.  The catechins in green tea have been shown to inhibit the enzyme that breaks down norepinephrine so that its biological effects which increases metabolic rate and fat breakdown are prolonged. The catechins may also act to reduce food intake and inhibit the main enzymes involved in fat storage.";
    var b = "Epicatechin is a bioactive compound classed as a flavonol, found in a number of foods in trace amounts where pure raw cacao contains the highest amounts Epicatechin. Epicatechin has been shown to increase nitric oxide production for improved vascularity, blood flow and endurance. Also, some studies suggest that it inhibits myostatin which prevents muscles from growing too big too fast, so it may aid in muscle growth. Moreover, Epicatechin increase insulin sensitivity and glucose dispersal allowing us to recover faster from intense workouts, build muscle more effectively, and limit the gain of unwanted body fat.";
    var c = "Creatine is a nitrogenous organic acid that occurs naturally in vertebrates. Its main role is to facilitate recycling of adenosine triphosphate (ATP), the energy currency of the cell, primarily in muscle and brain tissue. Our bodies can produce little amounts of creatine, about 1g per day, also we can obtain some more creatine from food. Creatine is found in meat products such as beef and salmon, which has 4.5g/kg creatine. Creatine increase the body's stores of phosphocreatine, which is used to produce new ATP during high-intensity exercise, which increases strength and the weight lifted, and as a results muscle mass as well. Creatine also helps in hydrating muscles cells by increasing its water content.";
    var asplit = a.split(" ");
    var bsplit = b.split(" ");
    var csplit = c.split(" ");

    for (i = 0; i < asplit.length; i++) {

        document.getElementById('more1').innerHTML += "<span class= 'vertical-part'> <b>" + asplit[i] + "&nbsp" + "</b> </span>";
    }
    for (i = 0; i < bsplit.length; i++) {

        document.getElementById('more2').innerHTML += "<span class= 'vertical-part'> <b>" + bsplit[i] + "&nbsp" + "</b> </span>";
    }
    for (i = 0; i < csplit.length; i++) {

        document.getElementById('more3').innerHTML += "<span class= 'vertical-part'> <b>" + csplit[i] + "&nbsp" + "</b> </span>";
    }
});


//scroll down arrow


if (screen.width > 1000) {
    $(document).scroll(function () {

        if ($(document).scrollTop() > 450 && $(document).scrollTop() < 1400) {
            $(".sidenav-line").addClass("sidenav-line2");
            $(".n2").addClass("side-nav-color");
            $(".n1").removeClass("side-nav-color");
        }
        if ($(document).scrollTop() > 1400 && $(document).scrollTop() < 2350) {
            $(".sidenav-line").addClass("sidenav-line3");
            $(".n2").removeClass("side-nav-color");
            $(".n3").addClass("side-nav-color");
        }
        if ($(document).scrollTop() > 2350) {
            $(".sidenav-line").addClass("sidenav-line4");
            $(".n4").addClass("side-nav-color");
            $(".n3").removeClass("side-nav-color");
        }
        if ($(document).scrollTop() < 2350 && $(document).scrollTop() > 1400) {
            $(".sidenav-line").removeClass("sidenav-line4");
            $(".n4").removeClass("side-nav-color");
            $(".n3").addClass("side-nav-color");
        }
        if ($(document).scrollTop() < 1400 && $(document).scrollTop() > 450) {
            $(".sidenav-line").removeClass("sidenav-line3");
            $(".n3").removeClass("side-nav-color");
            $(".n2").addClass("side-nav-color");
        }
        if ($(document).scrollTop() < 450) {
            $(".sidenav-line").removeClass("sidenav-line2");
            $(".n2").removeClass("side-nav-color");
            $(".n1").addClass("side-nav-color");
        }

    });
    $('.scrolldown').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.scrolldown3').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
} else {
    $(".scrolldown2").removeClass("scrolldown");

    $(document).scroll(function () {

        if ($(document).scrollTop() > 900 && $(document).scrollTop() < 2800) {
            $(".sidenav-line").addClass("sidenav-line2");
            $(".n2").addClass("side-nav-color");
            $(".n1").removeClass("side-nav-color");
        }
        if ($(document).scrollTop() > 2800 && $(document).scrollTop() < 4000) {
            $(".sidenav-line").addClass("sidenav-line3");
            $(".n2").removeClass("side-nav-color");
            $(".n3").addClass("side-nav-color");
        }
        if ($(document).scrollTop() > 4000) {
            $(".sidenav-line").addClass("sidenav-line4");
            $(".n4").addClass("side-nav-color");
            $(".n3").removeClass("side-nav-color");
        }
        if ($(document).scrollTop() < 4000 && $(document).scrollTop() > 2800) {
            $(".sidenav-line").removeClass("sidenav-line4");
            $(".n4").removeClass("side-nav-color");
            $(".n3").addClass("side-nav-color");
        }
        if ($(document).scrollTop() < 2800 && $(document).scrollTop() > 900) {
            $(".sidenav-line").removeClass("sidenav-line3");
            $(".n3").removeClass("side-nav-color");
            $(".n2").addClass("side-nav-color");
        }
        if ($(document).scrollTop() < 900) {
            $(".sidenav-line").removeClass("sidenav-line2");
            $(".n2").removeClass("side-nav-color");
            $(".n1").addClass("side-nav-color");
        }

    });
    $('.scrolldown').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top + 180
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.scrolldown2').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    $('.scrolldown3').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top + 90
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
}

$(".omar").click(function () {
		var win = window.open('https://www.omarbasem.com', '_blank');
  		win.focus();
});

//text classes
$('.a').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminA").addClass("head2");
    $(".vitAtext").addClass("txt2");
    $(".carrot").addClass("img2");

})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminA").removeClass("head2");
        $(".vitAtext").removeClass("txt2");
        $(".carrot").removeClass("img2");
    });

$('.d').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminD").addClass("head2");
    $(".vitDtext").addClass("txt2");
    $(".salmon").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminD").removeClass("head2");
        $(".vitDtext").removeClass("txt2");
        $(".salmon").removeClass("img2");

    });

$('.b6').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminB6").addClass("head2");
    $(".vitB6text").addClass("txt2");
    $(".avocado").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminB6").removeClass("head2");
        $(".vitB6text").removeClass("txt2");
        $(".avocado").removeClass("img2");

    });

$('.b9').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminB9").addClass("head2");
    $(".vitB9text").addClass("txt2");
    $(".broccoli").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminB9").removeClass("head2");
        $(".vitB9text").removeClass("txt2");
        $(".broccoli").removeClass("img2");

    });

$('.b12').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminB12").addClass("head2");
    $(".vitB12text").addClass("txt2");
    $(".beef").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminB12").removeClass("head2");
        $(".vitB12text").removeClass("txt2");
        $(".beef").removeClass("img2");

    });

$('.c').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminC").addClass("head2");
    $(".vitCtext").addClass("txt2");
    $(".strawberry").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminC").removeClass("head2");
        $(".vitCtext").removeClass("txt2");
        $(".strawberry").removeClass("img2");

    });

$('.e').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminE").addClass("head2");
    $(".vitEtext").addClass("txt2");
    $(".almond").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminE").removeClass("head2");
        $(".vitEtext").removeClass("txt2");
        $(".almond").removeClass("img2");

    });

$('.k').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".vitamins").addClass("heading2");
    $(".text").addClass("text2");
    $(".vitaminK").addClass("head2");
    $(".vitKtext").addClass("txt2");
    $(".kale").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".vitamins").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".vitaminK").removeClass("head2");
        $(".vitKtext").removeClass("txt2");
        $(".kale").removeClass("img2");

    });

$('.mg').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".magnesium").addClass("head2");
    $(".magtext").addClass("txt2");
    $(".beans").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".magnesium").removeClass("head2");
        $(".magtext").removeClass("txt2");
        $(".beans").removeClass("img2");

    });

$('.pot').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".potassium").addClass("head2");
    $(".pottext").addClass("txt2");
    $(".pomegranate").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".potassium").removeClass("head2");
        $(".pottext").removeClass("txt2");
        $(".pomegranate").removeClass("img2");

    });

$('.zn').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".zinc").addClass("head2");
    $(".zintext").addClass("txt2");
    $(".oysters").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".zinc").removeClass("head2");
        $(".zintext").removeClass("txt2");
        $(".oysters").removeClass("img2");

    });

$('.cu').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".copper").addClass("head2");
    $(".coptext").addClass("txt2");
    $(".mushroom").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".copper").removeClass("head2");
        $(".coptext").removeClass("txt2");
        $(".mushroom").removeClass("img2");

    });

$('.mn').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".manganese").addClass("head2");
    $(".mantext").addClass("txt2");
    $(".oats").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".manganese").removeClass("head2");
        $(".mantext").removeClass("txt2");
        $(".oats").removeClass("img2");

    });

$('.fe').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".iron").addClass("head2");
    $(".irotext").addClass("txt2");
    $(".spinach").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".iron").removeClass("head2");
        $(".irotext").removeClass("txt2");
        $(".spinach").removeClass("img2");

    });

$('.p').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".phosphorus").addClass("head2");
    $(".photext").addClass("txt2");
    $(".tuna").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".phosphorus").removeClass("head2");
        $(".photext").removeClass("txt2");
        $(".tuna").removeClass("img2");

    });

$('.ca').on("mouseenter", function (e) {

    $("section").addClass("blackbg");
    $(".minerals").addClass("heading2");
    $(".text").addClass("text2");
    $(".calcium").addClass("head2");
    $(".caltext").addClass("txt2");
    $(".milk").addClass("img2");


})
    .on("mouseleave", function () {
        $("section").removeClass("blackbg");
        $(".minerals").removeClass("heading2");
        $(".text").removeClass("text2");
        $(".calcium").removeClass("head2");
        $(".caltext").removeClass("txt2");
        $(".milk").removeClass("img2");

    });

// slideshow

const items = document.querySelectorAll('.item'),
    controls = document.querySelectorAll('.control'),
    headerItems = document.querySelectorAll('.item-header'),
    descriptionItems = document.querySelectorAll('.item-description');

controls.forEach(control => control.addEventListener('click', handleClickedSlide));

function handleClickedSlide() {
    reset();
    let number = Number(this.dataset.index);
    this.classList.add('active');
    items.forEach((item, index) => {
        if (index === number) {
            item.classList.add('active');
        }
    })

    current = number;
    handleHeaderDelay();
    handleDescriptionDelay();
}

function reset() {
    controls.forEach(control => {
        control.classList.remove('active');
    })
    items.forEach(item => {
        item.classList.remove('active');
    })
}

function handleHeaderDelay() {
    headerItems.forEach(part => {
        const seconds = 0.03,
            activeDelay = .76,
            children = part.childNodes,
            arr = [...children];

        let count = 1;


        if (part.parentNode.classList.contains('active')) {

            arr.forEach(child => {
                if (child.classList) {
                    const delay = count * seconds + activeDelay;
                    child.firstChild.style.transitionDelay = `${delay}s`;
                    count++;
                }
            })
        } else {

            arr.forEach(child => {
                if (child.classList) {
                    const delay = count * seconds;
                    child.firstChild.style.transitionDelay = `${delay}s`;
                    count++;
                }
            })
        }
    })
}

function handleDescriptionDelay() {
    descriptionItems.forEach(part => {
        const seconds = .006,
            activeDelay = .76,
            children = part.childNodes,
            arr = [...children];

        let count = 1;


        if (part.parentNode.classList.contains('active')) {

            arr.forEach(child => {
                if (child.classList) {
                    let delay = count * seconds + activeDelay;
                    child.firstElementChild.style.transitionDelay = `${delay}s`;
                    count++;
                }
            })
        } else {

            arr.forEach(child => {
                if (child.classList) {
                    let delay = count * seconds;
                    child.firstElementChild.style.transitionDelay = `${delay}s`;
                    count++;
                }
            })
        }
    })
}


// Automatic timer
const
    activeDelay = .76,
    interval = 12000;

let current = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', (e) => {
            slider.clickedControl(e)
        }));
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    nextSlide: () => { // Increment current slide and add active class
        slider.reset();
        if (current === items.length - 1) current = -1; // Check if current slide is last in array
        current++;
        controls[current].classList.add('active');
        items[current].classList.add('active');
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
    },
    clickedControl: (e) => { // Add active class to clicked control and corresponding slide
        slider.reset();
        clearInterval(intervalF);

        const control = e.target,
            dataIndex = Number(control.dataset.index);

        control.classList.add('active');
        items.forEach((item, index) => {
            if (index === dataIndex) { // Add active class to corresponding slide
                item.classList.add('active');
            }
        })
        current = dataIndex; // Update current slide
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
        intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
    },
    reset: () => { // Remove active classes
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
        let seconds;

        items.forEach(item => {
            const children = item.childNodes; // .vertical-part(s)
            let count = 1,
                delay;

            item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

            children.forEach(child => { // iterate through .vertical-part(s) and style b element
                if (child.classList) {
                    item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
                    child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
                    count++;
                }
            })
        })
    },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();

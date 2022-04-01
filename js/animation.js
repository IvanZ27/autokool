//mobile or not fot nav panel
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// let menuList1 = document.getElementById('menuLink1');  //if many menus
let menuList2 = document.getElementById('menuLink2');


if (isMobile.any()) {
    document.body.classList.add('_touch');

    // menuList1.classList.remove('green-line'); //if many menus
    menuList2.classList.remove('green-line');

    let hasmMenuArrows = document.querySelectorAll('.has__menu-arrow');
    if (hasmMenuArrows.length > 0) {
        for (let index = 0; index < hasmMenuArrows.length; index++) {
            const hasmMenuArrow = hasmMenuArrows[index];
            hasmMenuArrow.addEventListener('click', function (e) {
                hasmMenuArrows[index].classList.toggle('_active-menu');
                //if many menus
                // if (index === 0) {
                //     hasmMenuArrows[1].classList.remove('_active-menu');
                //     hasmMenuArrows[0].classList.toggle('_active-menu');
                // } else if (index === 1) {
                //     hasmMenuArrows[0].classList.remove('_active-menu');
                //     hasmMenuArrows[1].classList.toggle('_active-menu');
                // }
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}


// Menu burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active-menu');
        menuBody.classList.toggle('_active-menu');
    });
}

// if (iconMenu.classList.contains('_active-menu')){
//     console.log("juhuu");
//     console.log(window.pageYOffset);

// }


const closeMenuBody = document.getElementById('closeMenuBody');
closeMenuBody.addEventListener("click", onMenuLinkClick);

const contactCloseMenuBody = document.getElementById('contactCloseMenuBody');
contactCloseMenuBody.addEventListener("click", onMenuLinkClick);


function onMenuLinkClick(e) {
    // const menuLink = e.target;
    // if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    // 	const gotoBlock = document.querySelector(menuLink.dataset.goto);
    // 	const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    if (iconMenu.classList.contains('_active-menu')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active-menu');
        menuBody.classList.remove('_active-menu');
    }

    // window.scrollTo({
    // 	top: gotoBlockValue,
    // 	behavior: "smooth"
    // });
    // e.preventDefault();

    // }
}





// black nav panel on scroll
window.onscroll = () => {
    const navBar = document.querySelector('#navigation');
    if (this.scrollY <= 22) {
        navBar.classList.remove('nav__scroll');
    } else if (document.body.scrollTop === 0) {
        navBar.classList.add('nav__scroll');
    }
};

// END black nav panel on scroll
let buttonons = document.getElementsByClassName('button'),
    forEach = Array.prototype.forEach;
forEach.call(buttonons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    let addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        rect = this.getBoundingClientRect();
    let sDiv = addDiv.style,
        px = 'px';
    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}

const animItems = document.querySelectorAll('._anim-items');
const nav = document.querySelector('#navigation');
const headerImage = document.querySelector('#headerImage');
const processListItems = document.querySelectorAll('.process__list > li');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];

            if (window.pageYOffset !== 0 && performance.navigation.type == performance.navigation.TYPE_RELOAD || location.href.indexOf("#contacts") != -1 || location.href.indexOf("#form__anchor") != -1) {
                headerImage.classList.remove('_with-anim');
                for (var i = 0; i < processListItems.length; i++) {
                    processListItems[i].classList.remove('_with-anim');
                    processListItems[i].classList.add('_without-anim');
                }
                nav.classList.add('nav__scroll');
            }

            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (window.innerHeight < animItemHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                setTimeout(() => {
                    animItem.classList.add('_stdeffects');
                }, 1000);
            } else {
                if (!animItem.classList.contains('_noanim')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        };
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// // smooth scroll
// $(document).ready(function () {
//     $('a').on('click', function (event) {
//         if (this.hash !== '') {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function () {
//                 window.location.hash = hash;
//             });
//         }
//     });
// });
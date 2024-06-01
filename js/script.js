/* Our Services*/
const tabs = document.querySelector('.list-titles-services');
const liTabs = document.querySelectorAll(".list-titles-services li");
const text = document.querySelector(".image-text-services");
const liText = document.querySelectorAll(".image-text-services li");

//присваиваем data-атрибуты

function setDataAttributes() {
    liTabs.forEach(function (element) {
        element.setAttribute('data-item', `${element.textContent}`); //для кнопок
    })

    let i = 0;
    liText.forEach(function (element) {
        element.setAttribute('data-text', `${liTabs[i].textContent}`);  // для текста
        i++;
    })
};
setDataAttributes();

// делаем кнопки кликабельними
tabs.addEventListener("click", function (event) {
    liTabs.forEach(function (element) {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    });

    if (!event.target.classList.contains("active")) {
        event.target.classList.add("active")
    };

    // присваеваем к кнопкам текст

    liTabs.forEach(function (element) {
        let textAndTab = document.querySelector(`li[data-text ="${element.dataset.item}"]`)
        if (element.classList.contains("active")) {
            textAndTab.style.display = "inline";
        }
        if (!element.classList.contains("active")) {
            textAndTab.style.display = "none";
        }
    })
});


//amazing
//--------------


$('.list-amaging-work li').on('click', function () {
    $('.list-amaging-work li').removeClass('activing');
    $(this).parent('li').addClass('activing');

    let image = $(this).attr('data-filter');

    if (image == 'all') {
        $('.list-work-image li').show();
    } else {
        $('.list-work-image li').hide();
        $('.list-work-image li[data-filter="' + image + '"]').show();
    }
});
const imgGraphic = [
    './css/image/image our srv/3.png',
    './css/image/image our srv/newImg/2647150c2f9771a41145032b86b6c8a4.jpg',
    './css/image/image our srv/newImg/bee-on-daisy.jpg',
    './css/image/image our srv/newImg/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg'
]
const imgLandingPage = [
    './css/image/image our srv/newImg/images2.jpg',
    './css/image/image our srv/3.png',
    './css/image/image our srv/newImg/2647150c2f9771a41145032b86b6c8a4.jpg',
    './css/image/image our srv/newImg/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg'
]


let btn = document.querySelector(".button-load");
let addImageNode = (imageArray, attributeName) => {
    imageArray.forEach((item) => {
        const ul = document.querySelector('.list-work-image');
        const li = document.querySelector('.item-work-image');
        const liNode = li.cloneNode(true);
        const imageNode = liNode.querySelector('img');
        imageNode.src = item;
        liNode.setAttribute('data-filter', attributeName);
        ul.append(liNode);
    })
}
btn.addEventListener('click', (event) => {
    addImageNode(imgGraphic, "Graphic Design");
    addImageNode(imgLandingPage, "Landing Pages");
    btn.remove();
})

/*What People Say.. */


//--при нажатии на иконку с фото
const imgPhoto = document.querySelectorAll('.image-people');

imgPhoto.forEach((item) => {
  item.addEventListener('click', (event) => {
    const liPhoto = document.querySelectorAll('.item-people-big');
    if (event.target.tagName === "IMG") {
        const li = event.target.parentElement;
        let activeBig = document.querySelector(".active-pos");
        activeBig.classList.remove("active-pos");
        li.classList.add("active-pos");
    }
    const dataPhoto = event.target.getAttribute("data-photo");
    liPhoto.forEach((item) => {
        const photo = item.getAttribute("data-photo");
        if (dataPhoto === photo) {
            item.classList.add('active-big');
        }
        else {
            item.classList.remove('active-big');
        }
    })
})
});
//--при нажатии на стрелки

const prev = document.querySelector(".btn-one");
const next = document.querySelector(".btn-second");
const images = document.querySelectorAll(".list-people li");
const slides = document.querySelectorAll(".item-people-big");

let index = 0;

prev.addEventListener("click", () => {
    nextImage("prev");
});

next.addEventListener("click", () => {
    nextImage("next");
});

function nextImage(direction) {
    if (direction === "next") {
        index++;
        if (index === images.length) {
            index = 0;
        }
    } else {
        if (index === 0) {
            index = images.length - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active-pos");
        slides[i].classList.remove("active-big");
    }
    images[index].classList.add("active-pos");
    slides[index].classList.add("active-big");
}

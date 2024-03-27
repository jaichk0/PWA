///// zmienna slidelist jest tablicą i przechowuje wszystkie slide w formie obiektów
const slideList= [
    {
        img : "./img/1.jpg",
        text : "las"
    }, 
    {
        img : "./img/2.jpg",
        text : "las kolejny"
    }, {
        img : "./img/3.jpg", 
        text: "las jeszcze następny"
    }
];

//pobieramy elementy, na których chcemy pracować i przypisujemy je do zmiennych
const img = document.querySelector('img');
const h3 = document.querySelector('h3')
const rectangle = [...document.querySelectorAll('.rectangle span')]
//

const time = 1000; //zmienna któa określa co jaki czas zmieniaja sie slide
let active = 0; //zmienna okreslajaca indeks aktywnego slajdu i prostokąta


function changeRectangle(){
    const activeRectangle = rectangle.findIndex(rec => rec.classList.contains('active'));

    rectangle[activeRectangle].classList.remove('active');
    rectangle[active].classList.add('active');
}

function changeSlide() {
    active++ //zmiana wartosci active o 1 (dodawanie 1)

    if(active == slideList.length) {
        active = 0;
    }

    img.src = slideList[active].img;
    h3.textContent =slideList[active].text
    changeRectangle()
}

let indexInterval = setInterval(changeSlide, time)


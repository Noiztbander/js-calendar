//Cogemos la fecha de hoy
const date = new Date();

const renderCalendar = () => {

    const monthDays = document.querySelector(".days")

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;


    //Normalmente todos los dias se ejecutan sin tener eventos, es el caso default de switch
    // eventInCalendar =
    //     default;

    //Siempre se aumenta 1, puesto que la variable empieza a contar desde 0
    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ]

    //Mes actual
    //date.getMonth(), nos trae el mes en el que estamos ahora mismo.
    document.querySelector(".date h2").innerHTML = months[date.getMonth()];

    //Dia actual
    document.querySelector(".date p").innerHTML = date.toDateString();

    let days = "";

    date.setDate(1);
    //Detecta el primer dia del mes y encuentra la resta entre el mismo y 0

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class = "prev-date">${prevLastDay - x+1}</div>`;
    }

    //Add div event classs
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today" id=day-${i}>${i}</div>`;
        } else {
            days += `<div class="no-event-day" id=day-${i}>${i}</div>`;
        }

        monthDays.innerHTML = days;
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class = "next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

}

var btnPrev = document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

var btnPrev = document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

//New code here

//HOY
//ls
today = document.getElementsByClassName("today");
//console.log(today)
//today = today.addEventListener("click", showEventOfDayHere);

//Otros dias
day = document.querySelectorAll('.no-event-day');
for (let d = 0; d < day.length; d++) {
    day.item(d).addEventListener("click", showEventOfDayHere);
}

//Falta incluir today
var hereMoreEvents = true;
var meeting = false;
var study = false;
var personal = false;

function showEventOfDayHere(ev) {
    if (meeting == true) {
        event.target.insertAdjacentHTML('beforeend', '<div class="event-inserted"><ul class="meetingList">M</ul></div>');
        event.stopPropagation();
    } else if (study == true) {
        event.target.insertAdjacentHTML('beforeend', '<div class="event-inserted"><ul class="studyList">S</ul></div>');
        event.stopPropagation();
    } else if (personal == true) {
        event.target.insertAdjacentHTML('beforeend', '<div class="event-inserted"><ul class="personalList">P</ul></div>');
        event.stopPropagation();
    } //else if (hereMoreEvents == true) {
    //Unicamente ver todos los eventos de un dia si se clica encima
    // document.body.click = addElement;
    // document.currentDiv.click = addElement;

    // function addElement() {
    //     // crea un nuevo div
    //     // y añade contenido
    //     var newDiv = document.createElement("div");
    //     var newContent = document.createTextNode("Hola!¿Qué tal?");
    //     newDiv.appendChild(newContent); //añade texto al div creado.

    //     // añade el elemento creado y su contenido al DOM
    //     var currentDiv = document.getElementById("div1");
    //     document.body.insertBefore(newDiv, currentDiv);
    //}
    else {
        event.target.style.backgroundColor = "#ffa366";
    }

}

stopEvent = true;

function load() {
    elem = document.getElementById("all-days");
    elem.addEventListener("click", stopEvent, false);
    //var meeting = false;
    //var study = false;
    //var personal = salse;

}
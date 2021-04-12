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
            days += `<div class="today">${i}</div>`;

            //Event
            // } else if (myEvent === true) {
            //     days += `<div class="event">${i}</div>`;
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

// switch (eventInCalendar) {
//     case 1:
//         //Solo los dias con 1 evento apareceran aqui
//         [
//             break;
//         ]
//     case 2:
//         //Solo los dias con 2 evento apareceran aqui
//         [
//             break;
//         ]
//     case 3:
//         //Solo los dias con 3 evento apareceran aqui
//         [
//             break;
//         ]
//     default:
//         //Todos los dias SIN evento
//         [
//             //Solo ver informacion o formulario de inputs
//             var noEventDay = document.getElementsByClassName("no-event-day");
//             noEventDay.addEventListener("click", showEventOfDayHere);
//             break;
//         ]
// }





//todos los dias cogidos en una variable
// var allDaysOfThisMonth = document.getElementById('all-days');
// for (var i = 0; i < allDays.children.length; i++) {
//     //console.log(allDays.children[i].allDays);
// }
// var event = 1;
// var OneDayOfThisMonth = document.getElementById('all-days').getElementsByTagName("div").addEventListener("click", showEventOfDayHere);

// function showEventOfDayHere() {
//     var allDaysOfThisMonth = document.getElementById('all-days').addEventListener("click", showEventOfDayHere);
//     //var OneDayOfThisMonth = allDaysOfThisMonth.getElementsByTagName("div");
//     var OneDayOfThisMonth = document.getElementById('all-days').getElementsByTagName("div")
//     var i;
//     for (i = 0; i < OneDayOfThisMonth.length; i++) {
//         OneDayOfThisMonth[i].style.backgroundColor = "red";
//     }


//     if (event == 1) {
//         OneDayOfThisMonth.innerText = "two"
//     } else if (event == 2) {

//         OneDayOfThisMonth.innerHTML = "two"

//     } else {

//         OneDayOfThisMonth.innerHTML = ""

//     }

// }

//Solo ataca a 1 dia
var event = 1;
var day = document.getElementById("day-3").addEventListener("click", showEventOfDayHere)

function showEventOfDayHere() {
    var day = document.getElementById("day-3")
    if (event == 1) {
        day.innerHTML = "one"
    } else if (event == 2) {

        day.innerHTML = "two"

    } else {

        day.innerHTML = ""

    }

}

//Queremos que ataque a todos los dias, no detecta  getElementsByClassName
var event = 1;
var day = document.getElementsByClassName('no-event-day').addEventListener("click", showEventOfDayHere)

//var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(day, function(testElement) {
    return testElement.nodeName === 'DIV';
});


function showEventOfDayHere() {
    var day = document.getElementsByClassName('no-event-day')
    if (event == 1) {
        day.innerHTML = "one"
    } else if (event == 2) {
        day.innerHTML = "two"

    } else {
        day.innerHTML = "else esle esl"

    }

}
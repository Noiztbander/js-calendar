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

//En la línea de arriba cuando haces el queryselectorall debes gaurdar la colección de divs
day = document.querySelectorAll('.no-event-day');
for (let d = 0; d < day.length; d++) {
    day.item(d).addEventListener("click", showEventOfDayHere);
}
var insertString = 1;

function showEventOfDayHere() {
    console.log("into this function");
    if (insertString == 1) {
        day.item(5).innerText = "one";
        //day.innerText = "one";
        //Si no existe evento, crear uno nuevo con estilo A
    } else if (insertString == 2) {
        day.innerHTML = "two";
        //Si ya existe un evento, insertarlo debajo del evento anterior con estilo B
        //Alarma - 
    } else {
        day.innerHTML = "else esle esl";
    }

}
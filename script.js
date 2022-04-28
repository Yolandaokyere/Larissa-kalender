const kalender = document.querySelector("#weekKalender");
const showCalanderBtn = document.getElementById("apply")
const weekdays= document.querySelector(".weekdays")
const weekdaysLi= document.querySelectorAll(".weekdays li")
//console.log(weekdays)

for (let day = 1; day < 32; day++) {
    //console.log(day)
kalender.insertAdjacentHTML("beforeend", `<div class="day">${day}</div>`);
const date = new Date();
date.setDate(date.getDate() + 1);
//console.log(date)
date.setDate(date.getDate() + 7);
}

// select the day 
document.querySelectorAll(".day").forEach(day => {
    day.addEventListener("click", event => {
        event.currentTarget.classList.add("selected");
        console.log(event.currentTarget)
});

});

// get Calender when click on apply

showCalanderBtn.addEventListener("click", ()=> {
    weekdays.style.display  = "block"
    kalender.style.display = "grid"
})


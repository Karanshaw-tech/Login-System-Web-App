const btn = document.getElementById("toggleBtn");
const bulb = document.getElementById("bulb");
const card = document.getElementById("loginCard");

let isOn = false;

btn.addEventListener("click", () => {
    isOn = !isOn;

    if(isOn){
        bulb.classList.add("on");
        card.classList.add("show");
        document.body.style.background = "#1a1a1a";
        btn.innerText = "Turn Off Light";
    } else {
        bulb.classList.remove("on");
        card.classList.remove("show");
        document.body.style.background = "#0f0f0f";
        btn.innerText = "Turn On Light";
    }
});

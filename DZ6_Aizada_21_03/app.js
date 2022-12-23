
const counter = document.querySelectorAll(".counter");
const incBtn = document.querySelector(".incerment");
const decBtn = document.querySelector(".decrement");
const input = document.querySelector(".input");
if (counter){
    counter.forEach(counter =>{
        counter.addEventListener("click", e => {
            const target = e.target;
            if (target.closest(".counter")){
                let value = parseInt(target.closest(".counter").querySelector("input").value);
                if (target.classList.contains("incerment")){
                    value++;
                } else {
                    --value;
                }
                target.closest(".counter").querySelector("input").value = value;
            }
        })
    })
}



let choose = document.querySelectorAll(".our-works .choose");
let active = document.querySelector(".our-works .Active");
choose.forEach(e => {
  e.addEventListener("click", ele => {
    if(ele.target.dataset.box === "container") {
      active.classList.add(ele.target.dataset.box);
    } else {
      active.classList.remove("container");
    }
  })
});

let information = document.querySelectorAll(".information ul li");
let Div = document.querySelectorAll(".information .info-count div");

information.forEach(li => {
  li.addEventListener("click", remove);
  li.addEventListener("click", function() {
    Div.forEach((div) => {
    div.style.display = "none";
    })
    document.querySelector(this.dataset.show).style.display = "block";
  })
});

function remove() {
  information.forEach(li => {
    li.classList.remove("Active");
    this.classList.add("Active");
  });
}
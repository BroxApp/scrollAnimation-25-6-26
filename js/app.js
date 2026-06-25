const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBox);
function showBox () {
    let viewportHeight = window.innerHeight / 1.2;
    // console.log(viewportHeight);
   boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    // console.log(boxTop);
    if(boxTop < viewportHeight){
        box.classList.add("show");
    }else{
        box.classList.remove("show");
    }
   });
};
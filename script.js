//  cursor animation 


var cursor = document.querySelector(".cursor") ,
cursorScale = document.querySelectorAll(".cursor-scale"),

mouseX = 0 ,
mouseY = 0
 
gsap.to({}, 0.016, {

    repeat: -1,
    onRepeat : function () {
        gsap.set (cursor,{
            css: {
                left:mouseX,
                top :mouseY
            }
        })
    }
});

window.addEventListener("mousemove" , function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

 

cursorScale.forEach(link=> {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove' , () => {
        cursor.classList.add('grow');
        if(link.classList.contains("small")) {
            cursor.classList.remove('grow') ;
            cursor.classList.addEventListener("grow-small");
        }
    })
})


      // prallax  card
const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {
  let state = {
    mouseX: 0,
    mouseY: 0,
    height: element.clientHeight,
    width: element.clientWidth
  };

  element.addEventListener("mousemove", ele => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
    state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

    // parallax angle in card
    const angleX = (state.mouseX / state.width) * 30;
    const angleY = (state.mouseY / state.height) * -30;
    card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

    // parallax position of background in card
    const posX = (state.mouseX / state.width) * -40;
    const posY = (state.mouseY / state.height) * -40;
    cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  });

  element.addEventListener("mouseout", () => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    card.style.transform = `rotateY(0deg) rotateX(0deg) `;
    cardBg.style.transform = `translateX(0px) translateY(0px)`;
  });
});
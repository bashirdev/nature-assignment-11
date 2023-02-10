let link =document.querySelectorAll('.nav-link')
let backToTop=document.querySelector('.backToTop')
link.forEach((item, index)=>{
    
    item.addEventListener("mouseover", function(){
            removeActive()
            item.classList.add('active')
        
        
    })
})


function removeActive(){
    link.forEach(item=>{
        item.classList.remove('active')
    })
}

window.addEventListener("scroll", ()=>{
    if(window.scrollY < 200){
        document.querySelector('.backToTop').style.dispaly='hidden' 
        document.querySelector('.backToTop').style.opacity=0
    }else{
        document.querySelector('.backToTop').style.dispaly='block' 
        document.querySelector('.backToTop').style.opacity=1
    }
})

let colors=['green', 'blue', 'purple', 'orange','green', 'blue', 'purple', 'orange','green', 'blue', 'purple', 'orange','blue'];

function changeColor(color) {
    setTimeout(function loop() {
        
      if (color.length) {
        document.querySelector('.backToTop').style.backgroundColor = color.shift();
        setTimeout(loop, 4000);
      }
    
     
    }, 4000);
 

  }

  function start() {
    setInterval(changeColor(colors), 3000);
  }
  start()


  let tl=gsap.timeline();

  tl.from('.logo', {duration:1.5, opacity:0, scale:0.3, ease:'back' })
  tl.from('.nav-link', {duration:1, opacity:0,  y:"random(-200 - 200)", stagger:0.25})
  tl.from('.logo', {duration:1, rotation:360 })


  
  
  


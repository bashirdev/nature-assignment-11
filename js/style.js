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

let colors=['green', 'blue', 'purple', 'orange'];

function changeColor(color) {
    setTimeout(function loop() {
        
      if (color.length) {
        document.querySelector('.backToTop').style.backgroundColor = color.shift();
        setTimeout(loop, 2000);
      }
    
     
    }, 2000);
 

  }

  function start() {
    setInterval(changeColor(colors), 3000);
  }
  start()
  
  


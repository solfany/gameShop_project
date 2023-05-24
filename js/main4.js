const fourthDiv = document.querySelector("#main__fourth");
const fourthFirstBox = document.querySelector("#fourth__box1");
const fourthConBox = document.querySelector("#fourth__box__con");


let observer = new IntersectionObserver((e) => {
   e.forEach((j)=>{
      if(j.isIntersecting){
         j.target.style.opacity = 1;
         fourthFirstBox.style.transform = "translateX(35px)"
         setTimeout(()=>{
            fourthFirstBox.style.transform = "translateX(-100px)"
         },400) 
         fourthConBox.style.transform = "translateX(-35px)" 
         setTimeout(()=> {
            fourthConBox.style.transform = "translateX(150px)" 
         },400)
      } else {
         j.target.style.opacity = 0;
         fourthFirstBox.style.transform = "translateX(0px)" 
         fourthConBox.style.transform = "translateX(0px)" 
      }
   })
})
observer.observe(fourthFirstBox);
observer.observe(fourthConBox);
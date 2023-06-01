window.addEventListener("load", function(){
    this.setTimeout(() => {
      document.querySelector(".pop-up").style.display="block";
      document.querySelector("body").style.overflow="hidden";
      document.querySelector(".opecity").style.opacity="0.5";
    },2000)
})
document.querySelector(".cut").addEventListener("click", function(){
    document.querySelector(".pop-up").style.display="none";
    document.querySelector("body").style.overflow="auto";
    document.querySelector(".opecity").style.opacity="1";
})

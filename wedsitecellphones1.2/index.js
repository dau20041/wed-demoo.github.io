    

var sliderIndex = ()=>{

//Slider----------------------------
const rightbtn  = document.querySelector(".fa-chevron-right");
const leftbtn =document.querySelector(".fa-chevron-left");
const imgNum=document.querySelectorAll(".slider-content-left-pic img")
let index=0;
console.log(rightbtn)

rightbtn.addEventListener("click",function(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
})

leftbtn.addEventListener("click",function(){
    index=index-1;
    if(index<=0)
    {
        index=imgNum.length-1;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100+"%";
})
const rightbtntwo  = document.querySelector(".fa-chevron-right-two");
const leftbtntwo =document.querySelector(".fa-chevron-left-two");
const imgNubertwo=document.querySelectorAll(".slider-product-one-content-items")


rightbtntwo.addEventListener("click",function () {
    index=index+1;
    if(index>imgNubertwo.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100 +"%";
})

leftbtntwo.addEventListener("click",function (){
    index=index-1;
    if(index<=0)
    {
        index=imgNubertwo.length-1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100+"%";
})
const rightbtntwoo  = document.querySelector(".fa-chevron-right-twoo");
const leftbtntwoo =document.querySelector(".fa-chevron-left-twoo");
const imgNubertwoo=document.querySelectorAll(".container-sale-one-content-items")


rightbtntwoo.addEventListener("click",function () {
    index=index+1;
    if(index>imgNubertwoo.length-1)
    {
        index=0;
    }
    document.querySelector(".container-sale-one-content-items-content").style.right = index* 100 +"%";
})

leftbtntwoo.addEventListener("click",function (){
    index=index-1;
    if(index<=0)
    {
        index=imgNubertwoo.length-1;
    }
    document.querySelector(".container-sale-one-content-items-content").style.right = index* 100+"%";
})

/*
function imgAuto(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
}
setInterval(imgAuto,3000)
*/

}
window.onload =function () {
    sliderIndex();
}
  function hien()
  {
      document.getElementById("hide1").style.display ="block";
  }
  function an()
  {
      document.getElementById("hide1").style.display ="none";
  }
  function hien1()
  {
      document.getElementById("hide2").style.display ="block";
  }
  function an1()
  {
      document.getElementById("hide2").style.display ="none";
  }
function hien2()
{
    document.getElementById("hide3").style.display ="block";
}
function an2()
{
    document.getElementById("hide3").style.display ="none";
}
function hien3()
{
    document.getElementById("hide4").style.display ="block";
}
function an3()
{
    document.getElementById("hide4").style.display ="none";
}

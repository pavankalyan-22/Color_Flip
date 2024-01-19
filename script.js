var btn = document.getElementById("btn")
var colour=["#C0C0C0","#808080","#00FFFF","#FF00FF","#000080","#800080"]
var changeText=document.getElementById("colortext");
var bgc=document.getElementById("bgarea");

btn.addEventListener("click",(event)=>{
    var ran=Math.floor(Math.random()*6);
    changeText.innerHTML=`BackGround : ${colour[ran]}`
    bgc.style.backgroundColor=colour[ran];
})
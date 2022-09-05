// ################ button effect ends here ###############cons
// let counter = 0;
const icon = document.querySelector(".icon");
const popUp = document.querySelector(".popUp");
const data = document.querySelector(".data");
const childPopUp = document.querySelector(".childPopUp");
let target = "";
// console.log(childPopUp)
icon.addEventListener("click",()=>{
    popUp.classList.remove("hide");
});
popUp.addEventListener("click",(e)=>{
    if(e.target.classList.contains("cross")){
        e.currentTarget.classList.add("hide");
    }
    if(e.target.classList.contains("hit")){
        let ans = e.target.previousElementSibling.value;
        if(ans){
            const ele = document.createElement("div");
            ele.className="box";
            
            ele.innerHTML = `<h2>${ans}</h2>`;
            data.append(ele);
            
            // counter++; 
            e.currentTarget.classList.add("hide");
        }else{
            alert("Please enter the task first bro !!!");
        }
        e.target.previousElementSibling.value="";
    }
});
data.addEventListener("click",(e)=>{
    if(e.target.classList.contains("box")){
        childPopUp.classList.remove("hide");
        target = e.target;
    }
    if(e.target.classList.contains("check")){
        e.target.nextElementSibling.classList.toggle("strike");
    }
});
childPopUp.addEventListener("click",(e)=>{
    if(e.target.classList.contains("cross")){
        e.currentTarget.classList.add("hide");
    }
    if(e.target.classList.contains("hit")){
        let ans = e.target.previousElementSibling.value;
        if(ans){
            const ele = document.createElement("div");
            ele.classList.add("items");
            ele.innerHTML = `<input type="checkbox" name="" id="" class="check"><span id="text">${ans}</span>`;
            target.append(ele);
            e.currentTarget.classList.toggle("hide");
        }else{
            alert("Please enter the data please !!!!");
        }
        e.target.previousElementSibling.value="";
    }
    
});
function random(){
    let red = Math.floor(Math.random()*257);
    let green = Math.floor(Math.random()*257);
    let blue = Math.floor(Math.random()*257);
    return `rgb(${red},${green},${blue})`;
}
const text = document.querySelector("#text");
const k1 = document.querySelector("#k1");

setInterval(()=>{
    text.style.color=random();
},1500);



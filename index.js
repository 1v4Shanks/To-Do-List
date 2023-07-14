const addBtn=document.querySelector("#addBtn");
const inputBox=document.querySelector("#inputBox");
const listBox=document.querySelector("#list-box");

addBtn.addEventListener("click",function(){
    addList();
});


const addList = () => {
   if(inputBox.value ===''){
    alert("You must write something!")
   }else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listBox.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    inputBox.value="";
    saveList();

} 

listBox.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
});

const saveList=()=>{
    localStorage.setItem("data",listBox.innerHTML);
}

const showTask=()=>{
    listBox.innerHTML=localStorage.getItem("data");
}
showTask();
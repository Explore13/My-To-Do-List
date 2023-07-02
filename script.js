const takeInput = document.getElementById("take-input");
const listItems = document.getElementById("listItems");
function addTask(){
  if(takeInput.value ===''){
    alert("Please Write Something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML=takeInput.value;
    listItems.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  takeInput.value="";
  saveData();
}

listItems,addEventListener("click",function(e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
  else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();

  }
  saveData();
}, false);
function saveData(){
  localStorage.setItem("data", listItems.innerHTML)
}
function getData(){
  listItems.innerHTML=localStorage.getItem("data");
}
getData();
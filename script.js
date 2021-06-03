var userinput = document.getElementById("userinput");
var button = document.getElementById("enter");
var ol = document.querySelector("ol");
button.addEventListener("click", function(){
    if(userinput.value.length > 0)
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        ol.appendChild(li);
        userinput.value = "";
    }
})
userinput.addEventListener("keypress", function(event){
    if(userinput.value.length > 0 && event.keyCode === 13)
    {    
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        ol.appendChild(li);
        userinput.value = "";
    }
})
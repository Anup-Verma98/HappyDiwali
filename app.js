var val = document.getElementById('text-here');
function callme(){
    var name = prompt("Enter your Name ");
    if(name == null)
    {    
        return;
    }
    else
    {
        val.innerHTML=name+" 🪔";

    }
    
}

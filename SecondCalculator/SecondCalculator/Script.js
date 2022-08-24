num = document.getElementsByClassName("number").value;
display = document.getElementById("display");
//get button value when clicked function
function numb(ele)
{
    num = ele.innerHTML;
    if(ele.className == "btn-operatord" ){
        display.innerHTML += "/";
    }
    else if(ele.className == "btn-operatort"){
        display.innerHTML += "*";
    }
    else
    {
    display.innerHTML += num;
    }
}
//backspace function
function erase(){
    display.innerHTML = display.innerHTML.slice(0, -1);
}
function clear_()
{
    display.innerHTML = "";
}


function answer(){
    try
    {
    display.innerHTML = eval(display.innerHTML);
    }
    catch(e)
    {
        alert("Error");
        clear_();
    }
}
function display(val) {
    document.getElementById('textarea').value += val;
}

function calculate() 
{
    let x= document.getElementById('textarea').value;
    let y= eval(x);
    document.getElementById('textarea').value = y;
}

function clr() {
    document.getElementById('textarea').value = "";
}
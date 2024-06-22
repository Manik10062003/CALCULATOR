let buttons = document.querySelectorAll('button');
let display = document.getElementById('inputbox');

const buttonsarray = Array.from(buttons);
let string = '';

buttonsarray.forEach(btn => {
    btn.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string; 
        }else if(e.target.innerHTML == 'DEL'){
            string= string.substring(0 , string.length-1);
            display.value=string;

        }else if(e.target.innerHTML== '=') {
            display.value= eval(string);
        }else{
            string += e.target.innerHTML;
            display.value= string;
        }
    })
})
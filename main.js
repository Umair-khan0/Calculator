const display = document.getElementById('input');
const buttons = document.querySelectorAll('.button');
const buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(button => {
    button.addEventListener('click', (event) =>{
        if(event.target.innerHTML === 'DEL'){
            string = string.substring(0, string.length-1);
            display.innerHTML = string;
            if(string ===''){
                string = 'nothing to DEL';
                display.innerHTML = string;
            }
        }else if(event.target.innerHTML === 'AC'){
            string ='';
            display.innerHTML = string;
        }else if(event.target.innerHTML === '='){
            string = eval(string);
            display.innerHTML = string;
        }else{
            string += event.target.innerHTML;
            display.innerHTML = string;
        }
    })
})
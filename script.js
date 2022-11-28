let screen = document.getElementById('input');
let nextUp = document.getElementById('enter')

let myBtns = document.querySelector('.myBtns');
let offBtn = document.querySelector('.offbutton');
let onBtn = document.querySelector('.onbutton');
let styling = document.querySelectorAll('.theyall');

myBtns.addEventListener('click', run);
function run(){
  if(event.target === offBtn){
    for(let i = 0 ; i < styling.length ; i++){
    styling[i].disabled = true;
    }
  }  
  else if(event.target === onBtn){
    for(let i = 0 ; i < styling.length ; i++){
      styling[i].disabled = false;
    }
  }
  else{
    console.log('You still good!')
  }
}
function Evaluator(self) {
  if (self == '=') {
    let result = eval(screen.value)
    nextUp.value = result;
  }
  else if (self == 'c') {
    screen.value = '';
    nextUp.value = 0
  }
  else {
    screen.value += self;
    nextUp.value += self;
  }
}
function backSpace(){
  screen.value = screen.value.slice(0,-1)
  nextUp.value = nextUp.value.slice(0,-1)
}
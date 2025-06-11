'use strict' ;
let count = 0 ;

const increaseBtn = document.querySelector('.increase-btn') ;
const decreaseBtn = document.querySelector('.decrease-btn') ;
const resetBtn = document.querySelector('.reset-btn') ;

increaseBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  count += 1 ;
  document.querySelector('.no_count').textContent = count;
}) ;

decreaseBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  count -= 1;
  document.querySelector('.no_count').textContent = count;
}) ;

resetBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('.no_count').textContent = 0;
})
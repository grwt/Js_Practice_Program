//steps to execute: 1.Select the button jisnka color se body ka color change krna hai  2.Select body jiska actual me color change krna hai

var buttons = document.querySelectorAll('.box');
var body= document.querySelector('body');
body.style.backgroundColor='white';
buttons.forEach(function(buttons){
    //event (e.target) hame bta deta hai ki event aa kaha se rha hai mtlb for eg, humne green box pr click kiya to e.target hme bta dega ki green dabbe me target hua hai
    var flag=0;
    buttons.addEventListener("click", function(e){
        if(e.target.id=== "box1"){
            
            if(flag===0){
                body.style.backgroundColor = 'red';
                
                flag = 1;

            }
            else{
                body.style.backgroundColor = 'white';
                flag=0;

            }
        }
        if(e.target.id=== "box2"){
            
            if(flag===0){
                body.style.backgroundColor = 'blue';
                
                flag = 1;

            }
            else{
                body.style.backgroundColor = 'white';
                flag=0;

            }
        }
        if(e.target.id=== "box3"){
            
            if(flag===0){
                body.style.backgroundColor = 'green';
                
                flag = 1;

            }
            else{
                body.style.backgroundColor = 'white';
                flag=0;

            }
        }
        if(e.target.id=== "box4"){
            
            if(flag===0){
                body.style.backgroundColor = 'yellow';
                
                flag = 1;

            }
            else{
                body.style.backgroundColor = 'white';
                flag=0;

            }
        }
    })
})

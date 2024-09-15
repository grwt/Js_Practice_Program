const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#result');
    const disp=document.querySelector('#dis');

    if(height===''|| height < 0 || isNaN(height)){
        results.innerHTML="provide valid height";

    }
    else if(weight===''|| weight < 0 || isNaN(weight)){
        results.innerHTML="provide valid weight";

    }
    else{
        const bmi = (weight/((height * height)/10000)).toFixed(2);
        
        if(bmi<18.6){
            // results.innerHTML=`<span>${bmi}</span>`;
            disp.innerHTML=`${bmi} : You are underweight`;
            results.style.backgroundColor="red";
        }
        else if( bmi>=18.6 && bmi<=24.9){
            // results.innerHTML=`<span>${bmi}</span>`;
            results.style.backgroundColor=" green";
            disp.innerHTML=`${bmi} : You are in normal range`;

        }
        else{
            // results.innerHTML=`<span>${bmi}</span>`;
            disp.innerHTML=`${bmi} : You are overweight`;
            results.style.backgroundColor="red";
        }
    }

});

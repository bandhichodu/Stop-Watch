const display=document.getElementById("value");
let expression="";
var isRes=false;

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click",() => {
        const value=button.innerText;

        if (value==="C")
        {
            expression="";
            display.innerText="";
        }
        else if(value==="=")
        {
            try{
                const res=eval(expression);
                display.innerText=res;
                expression=res.toString();

            }catch (error){
               display.innerText="Error";
               expression=""; 
            }
        }
        else{
            if (isRes)
            {
                display.innerText="";
                expression="";
            }
            expression+=value;
            display.innerText=expression;
        }
    });
});
const BASE_URL ="https://latest.currency-api.pages.dev/v1/currencies";

const dropdown=document.querySelectorAll(".dropdown select");
const butt=document.querySelector("form button");

const fom=document.querySelector(".from select")

const to=document.querySelector(".To select")
const show_value=document.getElementById('output')
const input=document.querySelector(".amount input")
show_value.innerHTML="Button dba pehley "
const i_rate=document.getElementById("Rate")
i_rate.innerHTML="Nahi dba paa rha kya?"

for(let select of dropdown){
    for(code in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;

        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}

const updateflag=(newe)=>{
    let cod=newe.value;
    console.log(cod)
    let countrycode=countryList[cod];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let im=newe.parentElement.querySelector("img");
    im.src=newsrc;
}
function isNumeric(input) {
    // Check if the input is a string that contains only digits (with an optional negative sign)
    return /^\d+(\.\d+)?$/.test(input);
}

butt.addEventListener("click",async (evt)=>{

    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    
    if(amtval<=0){
        amtval=1

    }
    const burl=`${BASE_URL}/${fom.value.toLowerCase()}.json`  
    
    let pre=await fetch(burl)
    let dat=await pre.json()
    // console.log(dat[fom.value.toLowerCase()][to.value.toLowerCase()]);
    
    if(!isNumeric(input.value)){
        alert("Enter a numeric Value")
    }
    else{
    let rate=dat[fom.value.toLowerCase()][to.value.toLowerCase()];
    let ret_value=(rate*input.value).toFixed(2);


    
    
    // console.log(input.value);
    
    show_value.innerHTML=ret_value + ' '+ to.value;
    i_rate.innerHTML="1 "+fom.value+" = "+ rate +" "+to.value
    }

}
)




 

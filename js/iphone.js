let btn = document.querySelector('.teste','.bar-teste').addEventListener('click', ()=>{
    let transition = document.querySelector('.unlock');
    let sociais = document.querySelector('.sociais');


    transition.style.height = '0px';



    setTimeout(function(){
        sociais.style.marginTop = '345px';
        sociais.style.opacity = '1';
    },300)
})

let flash = document.querySelector('.container-flash').addEventListener('click', ()=>{
        let imgiphone = document.querySelector('.img-iphone'); 
        let btn = document.querySelector('.container-flash');
    
        
        if (imgiphone.classList.contains('img-iphone-anim')){
            imgiphone.classList.remove('img-iphone-anim');
        }else{
            imgiphone.classList.add('img-iphone-anim');
        }
        if (btn.classList.contains('container-flash-anim')){
            btn.classList.remove('container-flash-anim');
        }else{
            btn.classList.add('container-flash-anim');
        }
})

function relogio(){
    var dt = new Date();
    var semana = dt.getDay();
    var dia = dt.getDate();
    var mes = dt.getMonth();
    var hours = dt.getHours();
    var min = dt.getMinutes();

    let strhora = new String(hours);
    let strmin = new String(min);

    if (strhora.length == 1) hours = "0" + hours;
    if (strmin.length ==1) min = "0" + min;
    
    var meses=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var semanas=new Array("Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday");

    let hoursSUP = document.querySelector('.text-bar');
    let dayweek = document.querySelector('.day-week');
    let hoursIphone = document.querySelector('.hours');

    var Hous1 = semanas[semana] + "," + " " + dia + " " + meses[mes];
    var Hours2 = hours+":"+min;
    dayweek.innerHTML = Hous1;
    hoursIphone.innerHTML = Hours2;
    hoursSUP.innerHTML = Hours2;
}
setInterval(relogio,1000)



let pop = document.getElementById('pop-1').addEventListener('click', ()=>{
    let area = document.querySelector('.notification-area');

    let notfy = document.querySelector('.title-notification');
    area.style.marginTop = "-400px"
    area.style.height = "300px";
    let popF = document.querySelector('.pop-first');
    let onepop = document.getElementById('pop-2');
    let twopop = document.getElementById('pop-3');
    let treewpop = document.getElementById('pop-4');
 
    setTimeout(function(){
        onepop.style.marginTop = "5px"
        onepop.style.opacity = "1";
        notfy.style.opacity = "1"
        area.style.overflow = "scroll";
    },1000)
    setTimeout(function(){
        twopop.style.marginTop = "5px"

    },1200)
    setTimeout(function(){
        treewpop.style.marginTop = "5px"

    },1300)
    let x = document.querySelector('.container-x').addEventListener('click', ()=>{
        area.style.marginTop = "200px";
        setTimeout(() => {
            area.style.opacity = "0";
        }, 50);
    })
})

let photo = document.getElementById('ft');
photo.addEventListener('click', ()=>{
    let openPhoto = document.querySelector('.open-photos');
    openPhoto.style.opacity = "1";
    openPhoto.style.zIndex = "8";
    openPhoto.style.width = "92%";
    openPhoto.style.height = "101%";
    let closed = document.querySelector(".bar-return");
    closed.addEventListener('click',()=>{
     let openphoto = document.querySelector('.open-photos');
     openphoto.style.height = "0%";
     openPhoto.style.opacity = "0";
    })

})

let nuB = document.querySelector('#NuBank');
nuB.addEventListener('click',()=>{
    let openN = document.querySelector('.open-nu');
    openN.style.opacity = "1";
    openN.style.zIndex = "8";
    openN.style.width = "91%";
    openN.style.height = "100.1%";
    setTimeout(function(){
        let contentNU = document.querySelector('.app-layout');
        contentNU.style.opacity = "1";
        contentNU.style.height = "100.1%";
    },2000) 
})

let stocks = document.querySelector('#stocks');
stocks.addEventListener('click', ()=>{
    let openstocks = document.querySelector('.open-stocks');
    openstocks.style.opacity = "1";
    openstocks.style.zIndex = "8";
    openstocks.style.width = "92%";
    openstocks.style.height = "101%";
    let closedStocks = document.querySelector(".bar-return-yahoo");
    closedStocks.addEventListener('click',()=>{
        let openstocks = document.querySelector('.open-stocks');
        openstocks.style.height = "10%";
        openstocks.style.opacity = "0";
       })
})

let calc = document.querySelector('#calc');
calc.addEventListener('click', ()=>{
    let opencalc = document.querySelector('.open-calculadora');
    let content = document.querySelector(".buttons-container");
    let contentValue = document.querySelector(".value");
    opencalc.style.opacity = "1";
    opencalc.style.zIndex = "8";
    opencalc.style.display = "flex";
    opencalc.style.width = "92%";
    opencalc.style.height = "101%";
    setTimeout (function (){
        content.style.opacity = "1";
        contentValue.style.opacity = "1";
        },200)
    let closedcal = document.querySelector(".bottom");
    closedcal.addEventListener('click',()=>{
        setTimeout (function (){
        content.style.opacity = "0";
        contentValue.style.opacity = "0";
        },100)
        opencalc.style.height = "0px";

    })

})

let app = document.querySelector('#app-store');
app.addEventListener('click', ()=>{
  let openInstagram = document.querySelector('.open-instagram');
  openInstagram.style.opacity = "1";
  openInstagram.style.zIndex = "8";
  openInstagram.style.display = "flex";
  openInstagram.style.width = "92%";
  openInstagram.style.height = "101%";
})

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');
const numberElArray = [
  number0El, number1El, number2El, number3El, number4El,
  number5El, number6El, number7El, number8El, number9El
];


// variables
let valueStrInMemory = null;
let operatorInMemory = null;


// Functions
const getValueAsStr = () => valueEl.textContent.split(',').join('');

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === '.') {
    valueEl.textContent += '.';
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split('.');
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === '0') {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === 'addition') {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === 'subtraction') {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === 'multiplication') {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === 'division') {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue('0');
    return;
  }
  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue('0');
};




// Add Event Listeners to functions
acEl.addEventListener('click', () => {
  setStrAsValue('0');
  valueStrInMemory = null;
  operatorInMemory = null;
});
pmEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === '-0') {
    setStrAsValue('0');
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue('-' + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percentEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});


// add event listeners to operators
additionEl.addEventListener('click', () => {
  handleOperatorClick('addition');
});
subtractionEl.addEventListener('click', () => {
  handleOperatorClick('subtraction');
});
multiplicationEl.addEventListener('click', () => {
  handleOperatorClick('multiplication');
});
divisionEl.addEventListener('click', () => {
  handleOperatorClick('division');
});
equalEl.addEventListener('click', () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});


// Add Event Listeners to numbers and decimal
for (let i=0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}
decimalEl.addEventListener('click', () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes('.')) {
    setStrAsValue(currentValueStr + '.');
  }
});






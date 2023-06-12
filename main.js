let output = document.querySelector(".output");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let bol = document.querySelector(".bol");
let kop = document.querySelector(".kop");
let ayr = document.querySelector(".ayr");
let teng = document.querySelector(".teng");
let plus = document.querySelector(".plus");
let clr = document.querySelector(".clr"); 


one.addEventListener('click', subNumber)
two.addEventListener('click', subNumber)
three.addEventListener('click', subNumber)
four.addEventListener('click', subNumber)
five.addEventListener('click', subNumber)
six.addEventListener('click', subNumber)
seven.addEventListener('click', subNumber)
eight.addEventListener('click', subNumber)
nine.addEventListener('click', subNumber)
plus.addEventListener('click', subNumber)
ayr.addEventListener('click', subNumber)
kop.addEventListener('click', subNumber)
bol.addEventListener('click', subNumber)

function subNumber (e) {
   output.innerHTML += e.target.value 
}
clr.addEventListener('click', () => {
    output.innerHTML = " "
})
teng.addEventListener('click', natija)

function natija() {
    let resul = (eval(output.textContent));
    output.textContent = resul
}
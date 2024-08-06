let budinput = document.getElementById("Budget")
let Expname =document.getElementById("Expname")
let Expcost =document.getElementById("Expcost")
let buddisplay = document.getElementById("buddisplay")
let expdisplay = document.getElementById("expdisplay")
let  balandisplay= document.getElementById("balandisplay")
let count =0
function foo() {
    let num = budinput.value
    if(num == " "){
        alert("Enter your budget")
    }else{
   balandisplay.innerText=num
        buddisplay.innerText=num
        budinput.value=" "  
    }
}

function hello(){
    let num = budinput.value
    if(Expname == " " || Expcost == " "){
        alert("Enter your Item data")
    }else{
        let tab = document.getElementById("table")

        tab.innerHTML += `
    <tr id="tr"><td>${Expname.value}</td> <td>${Expcost.value}</td> <td> <button id="delete">Delete</button></td></tr>
`
let userAmout = Expcost.value;

count += +userAmout;

let balance = buddisplay.innerText- count;

expdisplay.innerText=count
balandisplay.innerText=balance
Expname.value=""
Expcost.value=""



var del =document.getElementById("delete").addEventListener("click",()=>{
    document.getElementById("tr").remove()
})
    }
   

}

let hrs= document.getElementById('hour')
let min= document.getElementById('minute')
let sec= document.getElementById('second')
let but=document.querySelector('#but')
let sbut=document.querySelector('#sbut')

let st
function str(){
 st=setInterval(()=>{
    let currentTime =new Date()
    
    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+ currentTime.getHours()
    min.innerHTML=(currentTime.getMinutes()<10?"0":"") +currentTime.getMinutes()
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds()

},1000)
}

function stp(){
    clearInterval(st)
}
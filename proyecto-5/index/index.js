window.onload = function (){
    var recarg = document.getElementById('Qr__bardata'); 
    recarg.select();
    if (recarg.value !== ''){
        recarg.value = '';
    }
    
}

function limitarLongitud(inputElement, maxLength) {
    if (inputElement.value.length > maxLength) {
      inputElement.value = inputElement.value.slice(0, maxLength);
    }
  }

  var salent = 0

const qrinput = document.getElementById('Qr__bardata')
qrinput.addEventListener("input",function(){
  if(qrinput.value ==20100004){
    window.location.href = "../ingreso/ingreso.html"
    salent = 1
    console.log(salent)
  }else if (qrinput.value ==20100003){
    window.location.href = "../egreso/egreso.html"
  }else if(qrinput.value ==74123698){
    window.location.href = "../genQr/genqr.html"
  }
})



const inqr = document.getElementById('Qr__bardata')
inqr.addEventListener('input',function(){
  if(this.value.length < 8){
    location.reload();
  };
})

const logo = document.getElementById('logo')
logo.addEventListener('click',()=>{
  window.location.href = "../index/index.html"
})


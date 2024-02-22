const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const logot = document.getElementById('logg');
var botondescarga = document.getElementById('qrbutton');
const inputqr = document.getElementById('link');
const buttonInput = document.getElementById('buttonInput');
const control = document.getElementById('newnum')


window.onload = function (){
  inputqr.select();
  if (recarg.value !== ''){
      recarg.value = '';
  }
  
}

inputqr.addEventListener('input',function(){
  if (inputqr.value.length >= 8) {
    buttonInput.classList.remove('buttonQR-display');
    console.log(1)
   }else if(inputqr.value !== ''){
    control.classList.remove('buttonQR-display')
  }else if(inputqr.value == ''){
    location.reload();
  }
  else{
    buttonInput.classList.add('buttonQR-display')
    control.classList.add('buttonQR-display')
  }
})

control.addEventListener('click',function(){
  location.reload();
})

logot.addEventListener('click',function(){
  window.location.href = "../index/index.html"
})

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(formulario.link.value);
});

function limitarLongitud(inputElement, maxLength) {
    if (inputElement.value.length > maxLength) {
      inputElement.value = inputElement.value.slice(0, maxLength);
    }
  }


function lookqr (){
  const imagenqr = document.getElementById('contenedorQR')
if(imagenqr){
  const imagen = imagenqr.querySelector('img');
  if(imagen){
    if(imagen.src){
      botondescarga.classList.remove('buttonQR-display')
      botondescarga.addEventListener('click',function(){
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.download = `Qr_${inputqr.value}_ITSSNP.jpg`;
        const imagenURL = imagen.src
        enlaceDescarga.href = imagenURL
        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        document.body.removeChild(enlaceDescarga);
      })
    }
  }
}

}
setInterval(lookqr, 1000)

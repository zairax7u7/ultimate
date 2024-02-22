const spk = document.getElementById('habla');
spk.addEventListener('input',() =>{
    const texto = spk.value;
    setTimeout(() => {
        const mensaje = new SpeechSynthesisUtterance("acceso permitido bienvenido" + texto);
        window.speechSynthesis.speak(mensaje);
      }, 1000);
});

if ('speechSynthesis' in window) {
    const vocesDisponibles = window.speechSynthesis.getVoices();
  } else {
    console.log('La síntesis de voz no es compatible con este navegador.');
  }

            

const logodos = document.getElementById('logoo')
logodos.addEventListener('click', () =>{
  window.location.href = '../index/index.html'
})

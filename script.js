   // Armazenando elementos do HTML em variáveis.

const btnEntrar = document.getElementById('button-full-screen');
const btnSair = document.getElementById('button-exit-full-screen');
const btnEdit = document.getElementById('button-edit');
const btnStart = document.getElementById('button-start');
const btnPause = document.getElementById('button-pause');
let secInput  = document.getElementById("timer-seconds");
let minInput  = document.getElementById("timer-minutes");
let hourInput  = document.getElementById("timer-hours");

    // Isso aqui é para meu TIMER aceitar apenas números e também para limitar até 2 números

secInput.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '').slice(0, 2); 
});

    // Essa função é para pausar o JavaScript em um determinado tempo em MS. Ela usa uma promessa que só é resolvida depois de um tempo, com setTimeout().

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

    // Realizando uma função para o botão "START"
    // Temos o async na frente da function para que possamos usar o await no final.

async function start() {

    // Crio um nova variável, tranformando elas em NUMBER e não mais em STRING.

  let sec = Number(secInput.value);
  let min = Number(minInput.value);
  let hour = Number(hourInput.value);

    // Transformando as HORAS, MINUTOS em segundos.

  let totalSeconds = (hour * 3600) + (min * 60) + sec;


    // Assim  que clicar no botão ele deixa os INPUTs desabilitados.

    secInput.disabled = true;
    minInput.disabled = true;
    hourInput.disabled = true;

    // FOR feito, para que quando o total de segundos for maior ou igual a 0, ele diminua até chegar em 0.

    for(let i = totalSeconds; i >= 0;i--) {

     // Assim que clicar no botão ele transforma as HORAS e MINUTOS que estavam em segundos, para HORAS e MINUTOS.


      let h = Math.floor(i / 3600);
      let m = Math.floor((i % 3600) / 60);
      let s = i % 60;

      // Aqui que faz alterar o valor no INPUT, utilizando o ".value"
      // Aqui transforma o NUMBER em STRING para que possa utilizar o padStart
      // PadStart, faz com que a STRING tenha no mínimo 2 caracteres, preenchendo com '0' à esquerda se precisar.

      hourInput.value = String(h).padStart(2, '0');
      minInput.value = String(m).padStart(2, '0');
      secInput.value = String(s).padStart(2, '0');

      // Aqui estamos usando para que o código espere 1 segundo antes de continuar.

      await sleep(1000);
  }

      // No final da function deixa os INPUTs habilitados novamente.

    secInput.disabled = false;
    minInput.disabled = false;
    hourInput.disabled = false;


     btnEdit.addEventListener('click', () => {

      btn
     
    });
     
    
}



  // EM DESENVOLVIMENTO...

 function trocarBotao() {
     if (btnEntrar.style.display !== "none") {
        btnEntrar.style.display = "none";
        btnSair.style.display = "inline-block";
      } else {
        btnEntrar.style.display = "inline-block";
        btnSair.style.display = "none";
      }
    }

 btnEntrar.addEventListener('click', () => {

      
      const el = document.documentElement; // toda a página
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) { // para navegadores antigos
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
     
    });
   
    // Sai do modo tela cheia
    btnSair.addEventListener('click', () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    });


var data = 0;
document.getElementById("contador1").innerText = data;
document.getElementById("contador2").innerText = data;

// CONTADOR DE 1 EM 1 PLAYER 1

function AumentarPl1() {
    data = data + 1;
    document.getElementById("contador1").innerText = data;
}
function DiminuirPl1() {
    data = data - 1;
    document.getElementById("contador1").innerText = data;
}

// CONTADOR DE 10 EM 10 PLAYER 1

$( "#Aumentar10Pl1" ).on({
    touchstart: function() {
        $(this).data('timer', setTimeout(function() {
              Adicionar10Pl1();
        }, 1000));
    },
    touchend: function() {
        clearTimeout( $(this).data('timer') );
    }
})

function Adicionar10Pl1() {
    data = data + 10;
    document.getElementById("contador1").innerText = data;
}


// CONTADOR DE 1 EM 1 PLAYER 2
function AumentarPl2() {
    data = data + 1;
    document.getElementById("contador2").innerText = data;
}
function DiminuirPl2() {
    data = data - 1;
    document.getElementById("contador2").innerText = data;
}

//Cronometro

const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')

let segNum = 0
let minNum = 0
let INTERVALO

function segundos() {
  segNum++
  if (segNum < 10) {
    seg.innerHTML = '0' + segNum
  } else {
    seg.innerHTML = segNum
  }

  if (segNum == 59) {
    segNum = 0
    minutos()
  }
}

function minutos() {
  minNum++
  if (minNum < 10) {
    min.innerHTML = '0' + minNum
  } else {
    min.innerHTML = minNum
  }
}

function iniciar() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
      segundos()
    }, 1000)
  }
  
  function parar() {
    clearInterval(INTERVALO)
  }
  
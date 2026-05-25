const texto = "Hello World!";
const elemento = document.querySelector(".texto-digitando");

let i = 0;
let apagando = false;

function efeitoDigitar() {
    if (!apagando) {
        // digitando
       elemento.innerHTML = `<span>${texto.substring(0, i + 1)}</span>`;
        i++;

        if (i === texto.length) {
            apagando = true;
            setTimeout(efeitoDigitar, 1500); // pausa antes de apagar
            return;
        }
    } else {
        // apagando
        elemento.innerHTML = texto.substring(0, i - 1);
        i--;

        if (i === 0) {
            apagando = false;
        }
    }

    setTimeout(efeitoDigitar, apagando ? 50 : 100);
}

efeitoDigitar();

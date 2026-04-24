var estado = [];
var posicao = [];
let vez = 1

function verificar11() {
    if (estado[11] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('11').innerHTML = 'O';
            posicao[11] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('11').innerHTML = 'X';
            posicao[11] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[11] = 'privado'
    }
}

function verificar12() {
    if (estado[12] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('12').innerHTML = 'O';
            posicao[12] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('12').innerHTML = 'X';
            posicao[12] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[12] = 'privado'
    }
}

function verificar13() {
    if (estado[13] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('13').innerHTML = 'O';
            posicao[13] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('13').innerHTML = 'X';
            posicao[13] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[13] = 'privado'
    }
}

function verificar21() {
    if (estado[21] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('21').innerHTML = 'O';
            posicao[21] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('21').innerHTML = 'X';
            posicao[21] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[21] = 'privado'
    }
}

function verificar22() {
    if (estado[22] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('22').innerHTML = 'O';
            posicao[22] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('22').innerHTML = 'X';
            posicao[22] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[22] = 'privado'
    }
}

function verificar23() {
    if (estado[23] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('23').innerHTML = 'O';
            posicao[23] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('23').innerHTML = 'X';
            posicao[23] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[23] = 'privado'
    }
}

function verificar31() {
    if (estado[31] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('31').innerHTML = 'O';
            posicao[31] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('31').innerHTML = 'X';
            posicao[31] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[31] = 'privado'
    }
}

function verificar32() {
    if (estado[32] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('32').innerHTML = 'O';
            posicao[32] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('32').innerHTML = 'X';
            posicao[32] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[32] = 'privado'
    }
}

function verificar33() {
    if (estado[33] != 'privado') {
        if ((vez%2)==0) {
            document.getElementById('33').innerHTML = 'O';
            posicao[33] = 'O';
            vez += 1;
            vencedorO();
        }else {
            document.getElementById('33').innerHTML = 'X';
            posicao[33] = 'X';
            vez += 1;
            vencedorX();
        }
        estado[33] = 'privado'
    }
}

function vencedorX() {
    if (((posicao[11] == 'X') && (posicao[12] == 'X') && (posicao[13] == 'X')) || ((posicao[21] == 'X') && (posicao[22] == 'X') && (posicao[23] == 'X')) || ((posicao[31] == 'X') && (posicao[32] == 'X') && (posicao[33] == 'X'))) {
        alert('X venceu');
        window.location.href = '../index.html';
    }

    else if (((posicao[11] == 'X') && (posicao[21] == 'X') && (posicao[31] == 'X')) || ((posicao[12] == 'X') && (posicao[22] == 'X') && (posicao[32] == 'X')) || ((posicao[13] == 'X') && (posicao[23] == 'X') && (posicao[33] == 'X'))) {
        alert('X venceu');
        window.location.href = '../index.html';
    }

    else if (((posicao[11] == 'X') && (posicao[22] == 'X') && (posicao[33] == 'X')) || ((posicao[13] == 'X') && (posicao[22] == 'X') && (posicao[31] == 'X'))) {
        alert('X venceu');
        window.location.href = '../index.html';
    }
}

function vencedorO() {
    if (((posicao[11] == 'O') && (posicao[12] == 'O') && (posicao[13] == 'O')) || ((posicao[21] == 'O') && (posicao[22] == 'O') && (posicao[23] == 'O')) || ((posicao[31] == 'O') && (posicao[32] == 'O') && (posicao[33] == 'O'))) {
        alert('O venceu');
        window.location.href = '../index.html';
    }

    else if (((posicao[11] == 'O') && (posicao[21] == 'O') && (posicao[31] == 'O')) || ((posicao[12] == 'O') && (posicao[22] == 'O') && (posicao[32] == 'O')) || ((posicao[13] == 'O') && (posicao[23] == 'O') && (posicao[33] == 'O'))) {
        alert('O venceu');
        window.location.href = '../index.html';
    }

    else if (((posicao[11] == 'O') && (posicao[22] == 'O') && (posicao[33] == 'O')) || ((posicao[13] == 'O') && (posicao[22] == 'O') && (posicao[31] == 'O'))) {
        alert('O venceu');
        window.location.href = '../index.html';
    }
}
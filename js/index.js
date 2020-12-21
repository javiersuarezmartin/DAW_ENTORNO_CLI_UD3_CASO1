function jugar() {

    // Piedra = 1..33
    // Papel = 34..66
    // Tijeras = 67..99

    var jugada_contraria = Math.floor(Math.random() * 100);
    var jugada_cont_texto = ''
    var cont = 0;
    var result ='';

    // Controlamos que la respuesta sea correcta para poder jugar.
    do {
        if (cont === 0) {
            jugada_elegida = (prompt('Selecciona una opción: PIEDRA / PAPEL / TIJERAS')).trim().toUpperCase();
            cont++;
        } else {
            jugada_elegida = (prompt('Tu elección no es válida, las opciones son: PIEDRA / PAPEL / TIJERAS')).trim().toUpperCase();
        };
    }
    while ((jugada_elegida != 'PIEDRA') && (jugada_elegida != 'PAPEL') && (jugada_elegida != 'TIJERAS'));

    // Transformamos en texto la jugada contraria para mostarla posteriormente.
    if ((jugada_contraria >= 1) && (jugada_contraria <= 33)) {
        jugada_cont_texto = 'PIEDRA';
    } else if ((jugada_contraria >= 34) && (jugada_contraria <= 66)) {
        jugada_cont_texto = 'PAPEL';
    } else {
        jugada_cont_texto = 'TIJERAS';
    };

    // Comprobamos el resultado del juego.
    switch (jugada_elegida) {
        case 'PIEDRA':
            if ((jugada_contraria >= 34) && (jugada_contraria <= 66)) {
                result = '¡Has perdido!';
            } else if ((jugada_contraria >= 67) && (jugada_contraria <= 99)) {
                result = '¡Has ganado!';
            } else {
                result = 'Empate';
            };
            break;

        case 'PAPEL':
            if ((jugada_contraria >= 1) && (jugada_contraria <= 33)) {
                result = '¡Has ganado!';
            } else if ((jugada_contraria >= 67) && (jugada_contraria <= 99)) {
                result = '¡Has perdido!';
            } else {
                result = 'Empate';
            };
            break;

        case 'TIJERAS':
            if ((jugada_contraria >= 1) && (jugada_contraria <= 33)) {
                result = '¡Has perdido!';
            } else if ((jugada_contraria >= 34) && (jugada_contraria <= 66)) {
                result = '¡Has ganado!';
            } else {
                result = 'Empate';
            };
            break;
    };
    // Mostar resultado
    alert('Tu elegiste ' + jugada_elegida + ' y tu oponente ha elegido ' + jugada_cont_texto + '\n' + result);
};

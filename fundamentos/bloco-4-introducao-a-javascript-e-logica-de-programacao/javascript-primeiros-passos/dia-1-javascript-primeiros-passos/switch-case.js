let estado = '';

switch(estado){
    case 'aprovada':
        console.log("Você foi aprovada!");
        break
    case 'reprovada':
        console.log("Você foi reprovada!");
        break
    case 'espera':
        console.log("Você está na fila de espera");
        break
    default:
        console.log("Não se aplica.");
        break
}
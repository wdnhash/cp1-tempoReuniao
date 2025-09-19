function calcular() {
    // Pega os valores digitados
    let horaIni = parseInt(document.getElementById("horaIni").value);
    let minuIni = parseInt(document.getElementById("minuIni").value);
    let horaFim = parseInt(document.getElementById("horaFim").value);
    let minuFim = parseInt(document.getElementById("minuFim").value);

    // Validação das entradas
    if (
        isNaN(horaIni) || isNaN(minuIni) ||
        isNaN(horaFim) || isNaN(minuFim) ||
        horaIni < 0 || horaIni > 23 ||
        horaFim < 0 || horaFim > 23 ||
        minuIni < 0 || minuIni > 59 ||
        minuFim < 0 || minuFim > 59
    ) {
        alert("Informe horários válidos!");
        return;
    }

    // Converte tudo para minutos
    let inicio = horaIni * 60 + minuIni;
    let fim = horaFim * 60 + minuFim;

    // Se o fim for menor que o início, significa que passou da meia-noite
    if (fim < inicio) {
        fim += 24 * 60; 
    }

    // Calcula a diferença
    let duracao = fim - inicio;
    let horas = Math.floor(duracao / 60);
    let minutos = duracao % 60;

    // Mostra no HTML
    document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");

    //  Limpa os campos do formulário
    document.getElementById("horaIni").value = "";
    document.getElementById("minuIni").value = "";
    document.getElementById("horaFim").value = "";
    document.getElementById("minuFim").value = "";
}

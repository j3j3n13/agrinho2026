function simular(opcao) {
    const resultado = document.getElementById('resultado');
    
    if (opcao === 'agrotoxico') {
        resultado.innerHTML = "⚠️ <strong>Impacto Negativo:</strong> O uso excessivo de químicos polui o solo e a água, além de eliminar insetos polinizadores importantes para as hortaliças.";
        resultado.style.borderLeftColor = "#d32f2f"; // Vermelho
    } else if (opcao === 'organico') {
        resultado.innerHTML = "🌱 <strong>Impacto Positivo:</strong> O controle biológico usa a própria natureza (como joaninhas cobrindo pragas). Mantém a horta saudável e o ecossistema em equilíbrio!";
        resultado.style.borderLeftColor = "#388e3c"; // Verde
    } else if (opcao === 'gotejamento') {
        resultado.innerHTML = "💧 <strong>Impacto Positivo:</strong> A irrigação por gotejamento economiza até 60% de água, direcionando a umidade direto para as raízes das hortaliças. Agro forte e consciente!";
        resultado.style.borderLeftColor = "#1976d2"; // Azul
    }
}
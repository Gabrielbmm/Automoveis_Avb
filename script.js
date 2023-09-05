function pesquisarAutomovel() {
    let placa = document.getElementById("placaInput").value;
    fetch("automoveis.json")
        .then(response => response.json())
        .then(automoveis => {
            var automovelEncontrado = automoveis.find(automovel => automovel.placa === placa);
            if (automovelEncontrado) {
                alert(`Automóvel encontrado!\nMarca: ${automovelEncontrado.marca}\nModelo: ${automovelEncontrado.modelo}\nAno: ${automovelEncontrado.ano}`);
            } else {
                alert("Automóvel não encontrado.");
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
        });
}
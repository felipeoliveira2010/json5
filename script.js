async function cafe() {
    const destino = document.getElementById('destino');

    try{
        const response = await fetch('dado.json');

        if (!response.ok) throw new Error('falha ao carregar dados');

        const cafes = await response.json();

        destino.innerHTML = '';

        cafes.forEach(item =>{
            const card = document.createElement('div');
            const itemString = JSON.stringify(item).replaceAll('"', '&quot')

            card.innerHTML = `
            <h3></h3>
            <td>${item.nome}</td>
            <td>${item.idade}</td>
            <td>${item.altura}</td>
            <td>${item.cidade}</td>
            <td>${item.nascimento}</td>
            <td>
                <button type="button" onclick="feijao(${itemStrng})">botar</button>
                <button type="button" onclick="this.closest('div').remove()">Remover</button>
            
            </td>
            <p></p>
            `;
            
            destino.appendChild(card);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
        destino.innerHTML = `<p>Desculpe, não foi possível carregar as informações no momento.</p>`;
    }
}

function farinha() {
    const destino = document.getElementById('feijao');
    destino.innerHTML = '';


}

function feijao(objetoDUDE){

    document.getElementById('nome').value = onjetoDUDE.nome
    document.getElementById('idade').value = onjetoDUDE.idade
    document.getElementById('altura').value = onjetoDUDE.altura
    document.getElementById('cidade').value = onjetoDUDE.cidade
    document.getElementById('nascimento').value = onjetoDUDE.nascimento

}

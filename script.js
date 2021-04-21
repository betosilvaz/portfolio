function gerarAviso() {
    let area_aviso = document.createElement('div');
    area_aviso.className = 'area-aviso';
    area_aviso.id = 'area-aviso';
    document.body.appendChild(area_aviso);
    document.body.style.overflow = 'hidden';
    let aviso = document.createElement('div');
    aviso.innerHTML = `<h2>O site ainda não está finalizado</h2><br><br><p>Podem faltar informações e ocorrer bugs</p><button id='fechar-aviso' onclick='fecharAviso()'>Fechar</button>`;
    aviso.className = 'aviso';
    aviso.id = 'aviso';
    area_aviso.appendChild(aviso);
}
function fecharAviso() {
    document.getElementById('area-aviso').style.display = 'none';
    document.getElementById('aviso').style.display = 'none';
    document.getElementById('fechar-aviso').style.display = 'none';
    document.body.style.overflowY = 'scroll';
    console.log('fechar aviso')
}
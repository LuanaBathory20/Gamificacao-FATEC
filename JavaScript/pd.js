function escolherFinal(tipo) {
  finalEscolhido = true;

  let finalSequence = [];

  if (tipo === 'bom') {
    finalSequence = [
      { name: "Paula", text: "Você escolheu com sabedoria. O cristal está salvo!", img: "Pg.png" }
    ];
  } else if (tipo === 'neutro') {
    finalSequence = [
      { name: "Paula", text: "Nem tudo foi perdido, mas o futuro ainda é incerto.", img: "Pt.png" }
    ];
  } else if (tipo === 'ruim') {
    finalSequence = [
      { name: "Paula", text: "Não... isso não devia ter acontecido!", img: "Pt.png" },
      { name: "Paula", text: "O cristal foi destruído... e com ele, nossa única esperança.", img: "Pt.png" }
    ];
  }
  let i = 0;
  function mostrarProximaFalaFinal() {
    if (i < finalSequence.length) {
      atualizarCena(finalSequence[i]);
      i++;
      setTimeout(mostrarProximaFalaFinal, 3000); 
    } else {
      document.getElementById("endButtons").style.display = "none";
    }
  }

  mostrarProximaFalaFinal();
}

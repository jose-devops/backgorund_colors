function mudarCor(pegaCor){
    let bg = document.querySelector('.bg');
    let cor = pegaCor.value;
    let text = pegaCor.options[pegaCor.selectedIndex].text;
    bg.style.background = cor;
    bg.innerHTML = text;
  }

// Detectar evento de redimensionar tela
window.addEventListener("resize", function (e) {
  // Seleciona a div que será onde irá mostrar a resolução
  // e breakpoint
  const brWatcher = document.getElementById("breakpoint-watcher");

  // Caso ele exista na página mostre a resolução
  if (brWatcher) {
    brWatcher.innerHTML = `${window.innerWidth} x ${
      window.innerHeight
    } <i>(${breakpoint(window.innerWidth)})</i>`;
  }
});


// Condicional que segue a tabela da documentação
function breakpoint(width) {
  if (width < 576) {
    return "xs";
  } else if (width < 768) {
    return "sm";
  } else if (width < 992) {
    return "md";
  } else if (width < 1200) {
    return "lg";
  } else if (width < 1400) {
    return "xl";
  } else {
    return "xxl";
  }
}

window.addEventListener("resize", function (e) {
  const brWatcher = document.getElementById("breakpoint-watcher");
  if (brWatcher) {
    brWatcher.innerHTML = `${window.innerWidth} x ${
      window.innerHeight
    } <i>(${breakpoint(window.innerWidth)})</i>`;
  }
});

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

const news = [
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/img1.png",
    categoria: "esportes",
  },
];

class NoticiasBuilder {
  static build(categoria) {
    let newsCards = "";

    news
      .filter((news) => news.categoria === categoria)
      .forEach((news) => {
        newsCards += `<div class="col-md-6 col-lg-4 col-xl-3 mt-3">
        <div class="card">
          <div class="card-header">
            <img src="${news.img}" class="img-fluid"/>
          </div>
          <div class="card-body">
            <h5 class="card-title">${news.titulo}</h5>
            <p class="card-text">${news.desc}</p>
            <a href="#" class="btn btn-primary">Ler mais</a>
          </div>
        </div>
      </div>
    `;
      });

    return newsCards;
  }
}

(function () {
  const gridEsportes = document.getElementById("grid-esportes");
  if (gridEsportes) gridEsportes.innerHTML = NoticiasBuilder.build("esportes");
})();

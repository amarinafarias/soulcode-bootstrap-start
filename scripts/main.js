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

const news = [
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "saude",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "saude",
  },
];

class NoticiasBuilder {
  build(categoria) {
    let noticiasHtml = "";

    const noticiasFiltro = news.filter((news) => news.categoria === categoria);

    noticiasFiltro.forEach((news) => {
      noticiasHtml += `
      <div class="col-md-6 col-lg-4 col-xl-3 mt-3">
          <div class="card">
            <div class="card-header">
              <img src="${news.img}" class="img-fluid" />
            </div>
            <div class="card-body">
              <h5 class="card-title">${news.titulo}</h5>
              <p class="card-text">${news.desc}</p>
              <button class="btn btn-primary" onclick="openModal('${news.img}', '${news.titulo}', '${news.desc}')" >Ler mais</button>
            </div>
          </div>
        </div>
      `;
    });

    return noticiasHtml;
  }
}

function openModal(img, titulo, desc) {
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  const bodyNoticia = document.getElementById("modal-noticia");

  bodyNoticia.innerHTML = `
  <img src="${img}" class="img-fluid"/>
  <h2>${titulo}</h2>
  <p>${desc}</p>
  `;
  modal.show();
}

function buildNoticias() {
  const noticias = new NoticiasBuilder();
  const gridEsportes = document.getElementById("grid-esportes");
  const gridSaude = document.getElementById("grid-saude");

  if (gridEsportes) gridEsportes.innerHTML = noticias.build("esportes");
  if (gridSaude) gridSaude.innerHTML = noticias.build("saude");
}

function openToast() {
  const el = document.getElementById("liveToast");

  if (el) {
    const toast = new bootstrap.Toast(el, { autohide: false });
    toast.show();
  }
}

buildNoticias();
openToast();

const addNoticia = document.forms.add_noticia;

if (addNoticia) {
  addNoticia.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = addNoticia.titulo.value;
    const desc = addNoticia.desc.value;
    const categoria = addNoticia.categoria.value;
    const img = addNoticia.img.files[0];

    // console.log(addNoticia.img.value);

    let reader = new FileReader();

    reader.onload = function (e) {
      news.push({
        titulo: titulo,
        desc: desc,
        categoria: categoria,
        img: e.target.result,
      });

      buildNoticias();
    };

    reader.readAsDataURL(img);
  });
}

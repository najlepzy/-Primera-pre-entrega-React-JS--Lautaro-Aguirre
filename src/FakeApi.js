const products = [
  {
    id: "1",
    name: "Evolution",
    price: 85000,
    category: "sillones",
    img: "https://facyca.com.ar/uploads/imagenes/evolution_428310589.jpg",
    stock: 25,
    description: "Sillon con estructura metalica desarmable, asientos y respaldos de alta densidad, móviles, patas de metal cromadas o pintadas, tapiceria a elección, anti derrame, cabezal móvil, cierras YKK, resortes encapsulados, chaise longe, esquineros, arrimes",
  },
  {
    id: "2",
    name: "Rosellini",
    price: 70000,
    category: "sillones",
    img: "https://facyca.com.ar/uploads/imagenes/rosellini_451395783.jpeg",
    stock: 5,
    description: "Sillon confortable con estructura metalica, asientos y respaldos de alta densidad, patas de metal cromadas o pintadas, color, tapiceria a elección, cierres YKK, cabezal móvil y asientos extensibles",
  },
];

//imagenes:
//carpeta en public
//img:'/img/logo192.png'
//carpeta src:
//img:require('../images/logo512.png')

export const getProducts = (categoryId) => {
  console.log(categoryId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
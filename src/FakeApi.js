const Productos = [
  {
    id: "01",
    name: "random1",
    category: "nuevos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 75,
    img: "https://picsum.photos/200",
    stock: 5,
  },
  {
    id: "02",
    name: "random2",
    category: "nuevos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 70,
    img: "https://picsum.photos/201",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 15,
  },
  
];

//imagenes:
//carpeta en public
//img:'/img/logo192.png'
//carpeta src:
//img:require('../images/logo512.png')

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(Productos);
      } else {
        reject("Hubo un error intente mas tarde");
      }
    }, 2000);
  });
};

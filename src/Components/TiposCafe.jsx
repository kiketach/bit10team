import React, { useState } from "react";

export const TiposCafe = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const coffeeList = [    
    {      
      id: 1,      
      title: "Expresso/ Café solo",      
      description: "Uno de los tipos de café más básicos y sencillos...",      
      imgUrl: "https://www.internacionalcafeteria.com/wp-content/uploads/2017/05/10-kawa.png",      
      width: 220,      
      height: 300,    
    },    
    {      
      id: 2,      
      title: "Ristretto",      
      description: "Esta variante del espresso se caracteriza por tener la misma cantidad de café que el anterior pero emplear para ello una proporción menor de agua.",      
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDwc8Xt4zJ7Js4ZNETZstb2hNyiHDrHn8bw&usqp=CAU",      
      width: 100,      
      height: 300,    
    },    
    {      
      id: 3,      
      title: "Cortado o macchiato",      
      description: "Uno de los más demandados por lo general, llamamos cortado o macchiato a un tipo de café espresso a la cual se le agrega una ligera cantidad de leche, que manche o tiña el café.",      
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRT4chaI51LvoV3p_Ell_b2RdMXKK2IjMig&usqp=CAU",      
      width: 100,      
      height: 300,    
    }, 
    {
    id: 4,      
    title: "Americano",      
    description: "El café americano es un tipo de café derivado del espresso el cual se caracteriza por añadir una cantidad de agua mucho mayor de lo habitual en este tipo de preparación, teniendo como resultado un producto con un sabor menos potente y algo más aguado, algo que lo hace menos amargo y facilita un sabor dulce. En este caso se realizaría primero un espresso y a este se le añadiría externamente agua hirviendo.",      
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bVNd4f7SH11CWRRPCvUNx8mVdykBwcPjw4ahSAT4J0ciklNbPepDt3BRwKgI5fnIw0Y&usqp=CAU",      
    width: 100,      
    height: 300,    
  }, 
  {
    id: 5,      
    title: "Lungo/largo",      
    description: "El conocido como café largo es un tipo de café en el que la extracción de agua en contacto con los granos de café se realiza de manera más prolongada, lo que conlleva una mayor cantidad de infusión. Se diferencia del anterior en el hecho de que aquí es directamente la infusión la que se produce en mayor cantidad, sin tener que añadir agua externamente. Suele servirse en tazas o incluso vasos largos.",      
    imgUrl: "data:image/jpeg;base64,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",      
    width: 100,      
    height: 300,    
  }, 
  {
    id: 6,      
    title: "Carajillo",      
    description: "El carajillo es un café preparado como un espresso al cual se le añade además de la infusión una cierta cantidad de alguna bebida espirituosa, siendo lo más general el brandy, el orujo o el whisky. Para ello generalmente primero se hecha el licor previamente calentado, al cual se le añadirá el café y posteriormente se le pueden agregar otros elementos como azúcar. Si se emplea brandy junto con ralladura de limón, pasamos a tener el llamado café brulé.",      
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u5RLB0E2gf3XWujhfDfBo1V7M9x5zneZvw&usqp=CAU",      
    width: 100,      
    height: 300,    
  }, 
  ];

  const filteredCoffeeList = coffeeList.filter(
    (coffee) =>
      coffee.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        {filteredCoffeeList.map((coffee) => (
          <div key={coffee.id} className="col">
            <div className="card">
              <img
                src={coffee.imgUrl}
                alt=""
                className="card-img-top"
                width={coffee.width}
                height={coffee.height}
              />
              <div className="card-body">
                <h5 className="card-title">{coffee.title}</h5>
                <p className="card-text">{coffee.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};



import React from "react";

export const TiposCafe = () => {
  return (
    <>
      <h4 className="text-center">TiposCafe</h4>
      {/* Primera Tarjeta */}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://www.internacionalcafeteria.com/wp-content/uploads/2017/05/10-kawa.png"
              alt=""
              class="card-img-top"
              width={220}
              height={300}
            />
            <div class="card-body">
              <h5 class="card-title">Expresso/ Café solo</h5>
              <p class="card-text">
                Uno de los tipos de café más básicos y sencillos, únicamente
                consta de un infusión de café la cual se realiza hirviendo agua
                en contacto con el grano. Se puede preparar en pocos segundos.
                Se trata de un tipo de café corto, y su tamaño suele ser de
                alrededor de 30 cl. Es habitual el uso de café de la variante
                arábiga. Habitualmente suele tener algo de espuma por encima.
              </p>
            </div>
          </div>
        </div>
        {/* Segunda Tarjeta */}
        <div class="col">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDwc8Xt4zJ7Js4ZNETZstb2hNyiHDrHn8bw&usqp=CAU"
              alt=""
              class="card-img-top"
              width={100}
              height={300}
            />
            <div class="card-body">
              <h5 class="card-title">Ristretto</h5>
              <p class="card-text">
                Esta variante del espresso se caracteriza por tener la misma
                cantidad de café que el anterior{" "}
                <strong>
                  pero emplear para ello una proporción menor de agua.
                </strong>
              </p>
              <p>
                Lo opuesto de un ristretto es un lungo (café expreso largo), que
                normalmente es el doble de una dosis normal de café extraído.
              </p>
            </div>
          </div>
        </div>
        {/* Segunda Tarjeta */}
        <div class="col">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDwc8Xt4zJ7Js4ZNETZstb2hNyiHDrHn8bw&usqp=CAU"
              alt=""
              class="card-img-top"
              width={100}
              height={300}
            />
            <div class="card-body">
              <h5 class="card-title">Ristretto</h5>
              <p class="card-text">
                Esta variante del espresso se caracteriza por tener la misma
                cantidad de café que el anterior{" "}
                <strong>
                  pero emplear para ello una proporción menor de agua.
                </strong>
              </p>
              <p>
                Lo opuesto de un ristretto es un lungo (café expreso largo), que
                normalmente es el doble de una dosis normal de café extraído.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

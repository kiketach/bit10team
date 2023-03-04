import React, { useState } from "react";

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
        {/* Tercera Tarjeta */}
        <div class="col">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpg7Fbdor19dfrND4eI6DORZ4_2lJKHXCp-g&usqp=CAU"
              alt=""
              class="card-img-top"
              width={100}
              height={300}
            />
            <div class="card-body">
              <h5 class="card-title">Cortado o macchiato</h5>
              <p class="card-text">
                Uno de los más demandados por lo general, llamamos cortado o
                macchiato a un tipo de café espresso a la cual se le agrega una
                ligera cantidad de leche, que manche o tiña el café.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Cuarta Tarjeta */}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              class="card-img-top"
              width={220}
              height={300}
            />
            <div class="card-body">
              <h5 class="card-title"> Americano</h5>
              <p class="card-text">
                El café americano es un tipo de café derivado del espresso el
                cual se caracteriza por añadir una cantidad de agua mucho mayor
                de lo habitual en este tipo de preparación, teniendo como
                resultado un producto con un sabor menos potente y algo más
                aguado, algo que lo hace menos amargo y facilita un sabor dulce.
                En este caso se realizaría primero un espresso y a este se le
                añadiría externamente agua hirviendo.
              </p>
            </div>
          </div>
        </div>
        {/* Quinta Tarjeta */}
        <div class="col">
          <div class="card">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0OEA8NEREREA0OEQ4PERERDRANEBAPFRIWFxURFhMYHCggGBonJxMWIjEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGA8PFisdFR0rLS0rLSsrKy0tKysrKysrLTctLS0tKzcrLTcrLS0tLSstNy0rNzctLSsrKysrKy0rK//AABEIAOUAygMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAABAwICBQcICAUDBQEAAAABAAIDBBEFEgYHEyExIkFRYXGBkRQyQlKTobHRFSNDU2KDksEzcoKy0iSiwhZEVGPwCP/EABkBAQEBAQEBAAAAAAAAAAAAAAACAQMEBf/EACQRAQEAAgIDAAIBBQAAAAAAAAABAhEDEiExUQQyQRMiI2GB/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIIIqFZUshjdK8kMYMziATu7ArJ+NwjLcP5W8cnm6eO5TcpPdbJb6ZRRWs1GnWGREiSXZkHKc7Czf0b1NT6cYVJ5lTEfzGN+JTtKdbGyIsKNKaD76P2sX+SiNJqH76P2sX+S3cNMyixTdIKM8JWH8xnzUwxum+8b+uP5ps0ySLHfTdN94z2jPmpHY9SD7VntY/8AJNmqyqLDO0mohxmj9rF/koN0noTfLMx2XeQ2SNx/uTcNVmUWF/6mpLXu+3C4ZcX7lUgx+nkvlzki4IyHdbfv8VnafTrfjLoramq2yFzRcOjy5gRbzhcH3FXKpgiIgIiICIiAiIgIiIKVREHsdGeD2lp7CLLkGjlSWYXM11zLhVbd9+U5zI5buDjz7sy7Gub0Wj9QysxqN0dqOuu6N4c2xe5nKGXiPOK4803HXiuq5FrOpdlitTY3jlLJ495tlkYDu6r3WChXSNMNB8VrY8OkjgLqmGn8nnBkjbbZnkOuTvuLrBR6tMdH/an20Nv7lWGU6xOc1WCgV/CVnI9WuND7Bvt4fmryLV1i/PCwfnxfNXuJ0wkRVw1yzjNX+LD7KP28XzVUaBYr93H7eP5puGmuucqEpW0nQLFfu4/bx/NUzq+xU+hEO2eP5p2hppsxVhOVvMurjFvUh7fKY7K2dqxxYne2BvWaln7LO0+mq1vD8IqJWbZgc4iz2sb6oeAXu38L7ha5O/oXYdXcUhMrpAA/NDmAGUABjnloHRcj3KyptFJ4aZsTMgmveRzZBvaBZjWu6RzdbiVn8J21OaqQtOYxsyN4h72xgFxPNwA7lwzyldpNRmtGOWKmoP29TMW/yR2ib3fVk/1LNrz7T646uhk8mbFTVNJES1rmiWB7gd55dyNxJF8u+y65odpnS4rE2SMOikcD9W/K7eOIa5u51ujcepd8ZqSOOXmtnREVMEREBERAREQEREEFq2PVhhqWt32mjzD+ZpykeGXxW0rTNZMeVlLUXA2c+zJJ9GRtvi1q4/kS3junXh13kqWHGxvv0q8ixYW5lzOpxmOKRzXSNbZx9Idqu6bSKA7tqzvkC+V25Y+heHCui/SYUfpJaMMfgH2sftAq40gpzv20duA+san9TkZ/QxbhLiXWqLsVtz8VqFRpDB97H7Rqxk2kdPc/XR+0HFO/JScOLe3Y1bnVCTHj0rQJNJYOImZ+reFby49AftmH8wLP8t+uk4+Nv8mkXWrabSM8QbLQXY1D98w3/wDYFbvxqC38Zh/qWdOW/VdeKN4fpEd/KVDFdIHtoqyRpJcYzEy3O+QZR73BaK7FIj9qz9QW6aF4VFiGzhc92yu+Z+zdYuDLANzcwJI3jfu3LpxcOXabRy5YTC2OMYtQMp3bHaCSZhtIWEbJhtvjaeLiDuJG5bLoVhlY1slVS18NPLGAcpk5MjuIYR0jptYdK9C1mg2DzQeSuo4BEG5W5ImsezdxDxyr9d1wDTzQ2fR6qjmYdrRvfeNzxuNt5ikA47v3X2d6fIegtCdIfpKlbM5uzqIzsqiP1Jm+dbqPEdq2Fcb1T4sDUtMeYU9VG5ha43yubd0ZJ5yAHsvz5WrsiyXbbNCIi1giIgIiICIiAtS1qUJnwiuA86KLyhp5wYXCQkdzT4rbVQrKdssckThdsrHscDwLXNLSPeg8g6UOO1ZKCbTxRyd9rH4LDbZ/rHxWf0ipnMp4A7zqaWopH9rH7vgVrijGTWnTPK73tW8pk9Y+JUNu/pPiqSKus+J75fVTbv8AWPiobQ9J8VIiah2v1NnPSVDMVBFrN1G6ZioIhuohx6SvS2pnC9jDI4g3ZHBDf8RbtXj/AHsXnjAaTyiqpoLX2s0LD2F4B9116z0NgDaYSAAbeSabd6rnkM/2tYO5RfcVL/bWeWp6z8GbXYZVxFt3tjdLGecSRgvbbtIy/wBRW2Kyxkjyea/ARu+Cq+kxw/Umc0EjrXdTTtLexwDwPFh8Su+hcL1BRWgrJPRM8bOo2ic6y7osk80t8IoiKmCIiAiIgIiICIiDzLrLoNlVYvDbzKmKraPwzNBNu9y5w4LuOuegtiGbmrcOkZ2yQPLvg5q4jINwKjHxbHSzeO1JERW5iIiAiIgIiINm1eQl2I05Avsy+TdzZWGx8SF61oYNlFHF6jGt8BZec9RWG7WudKRcRNY3vc7Mfcw+K9JqZ7qsvEkRWq6ysVFHhtXJezjC9rf5iMrfe5q2pcL1342+eOOljuWzOMpPNsI3ZI+973OI6ms60vxkZzUVQZcJLyP49VIR1izY7+GbwXWFqGrzBJKCjpqKVwdJAx0j7C2QyElrD1i79629bGCIi0EREBERAREQEREHMddVLuwyqt/DqX07j+CeMi3iwLzpVx5XPZ6jnN8CQvUut2k2uE1Lh51O6Cpb+XI0k+GZeZ9IY7VM9uDn5x2PAd+6i/s64frYxCIityEREBERBFAii3iEI7t/+eaUbOaW290jt/4Wsa0e9zl2tcz1HUOyoGOtYyMD+3O95+DQuhV1WyGN0rr2bYADznuJs1jRzkkgDtUz1tWftitKcQ2bNgy+0lHKy+c2K9jboc6+VvWSfRXGKo+XYvDAOXFSTwPqTGMzMzZAGQN/AwXHc4q/0902kjkkbCc1XITDFk5X1p5D5G9LWXMbOlxe5bpqt0LGHUzds0Oq5iJ5nHlFhtyY79Iub9/Ssx8+S+PDeqSKwLj50js56t1mt7gAPFXKIrSIiICIiAiIgIiICIiDH49Q+U0tTTHft4Jov1sLf3XknHmkuheeL6eLN/My7He9q9irynp3RbGeSK1hDVV8Q/lMmdvucoy/iu3F5umlFQVSUb1IrjllNXSCIiMEREEVPEN6kWQwOm2s8MX3kkbP1OA/dZldRfHN5R6r0HpmUtDG0kNbHFCHOJADQyFmYknhY5lznTbWKybavgLhTw3jhkG7M9zSDM38ZF2sHotLnni1a7i2kjqw1VLV4hJR4dG98rKeKAOkqoi42ja8WuSRwfyRfqWtUD4sVr6Skd/pcPa8RRRMzPLWE77ni+R3pPPwACmTeMhbrKt51N6JyVc/03UsvGx2WlYfNc8bs4HqtG4ddzzLu8TMot3k9JVthlFHTxxxRtDI4mCONgGUMYBwt07leq0CIiAiIgIiICIiAiIgIiIC85a36TJXVthYGekmHXtafK4+LCvRq4brth/1kp9aiopO+Oqkafc4KM/TrwfvHFagb1RV5iDbOParNbhdxvPj1zsQREVOIiIgitm0AizV1OTwY8yn8tpf/wAVrK3bVfTGSqNuIhqLdrmZB/cufNdY16Px5vP/AJTT+kfJPhsETC+aTD6JoY0Xc+SRzyAB07wuoapNW8dI5uIT2fO0EQ77sDjudI3pA80Hn3ngWrKx6N0kmKHZXfPFTU8NRJ6NHA1mUQRkcJZQN54tZmtYuC6GxgaAAAAAAAOAA4ABbjPEccvaoiIrSIiICIiAiIgIiICKF1DMgmRSZkzoJ1yLXdD9bAbfxaKvZ3xvhkA97l1gyBc61uxMecNJcGh0lZDmd5o2lM4gO6BdoUZ/rXTius489YqzlHr3rGradJMGqKcMdJG5rHta5j7HK9pG4g8FqxUcN3i9X5+GuS2fylREXZ4RERBMuhasKeQvqDGCXmFkbLcc8k0bQufxMJIABJJAAAuSegBd21MYJPSSPfOwxSSZQxjxlcWhr7ut0XIC483nWP2vV+P4xzy/06dolgMeH0zYATJK4mWeV3KfNO/e+Rx5+gdQCzapbUKO0XZ5VRFJnQOQTopQ5RugiiIgIiIIEqQuUXKk9BB0ipPnUr1ayXQVnVKovrVaSXVpKCgv34gtF1q1QfBRu+7rYfBzXNPxWflBWs6aMiNJI2VpcHkNYGmzhL6LgeYg77rLNzTZdXarq+rmSYXFBMBK1jpoS2QB4s2RwA39VlzvWLBh1LUtjZSgMkjEmaKV0ZBLiCLEEc3vVaixasoGeTRQx5ASTtJnvc558597Abz0LA6Sz1dc9kkkTGuY0tuxx3i9991Mn86Xcr9Yk+QHnnZ2tjePcQpfJ6P/AMh47aY/s5U3YdIOMbu4tVM0j/Uk8FWkbXWyohxmld1NgDfi5TRz0DTfZTS25nStiB7bAn3qgymZzxzd2X5KoaC9ssUvXmcz5Jpvat71YYyySt2Yp4IYo4nvGSK8hcCLZpXXdznhZdIoa++J1Mnqw00Y6hkc7/muIYE6to3ulibE1z25bvu8tbe9gunaI1AmY6UkGqcRtjzm25pA9W37qbj5b28eXSG4mFWZXrWogVdxAq0NhbWKsypWEjuryK6DKsmVVr1j4gVcsQXbXKcFUWKqEEyIiCBCkLFURBbujVJ8CvLJZBjnUyouo+pZbKoZUGEfQdS1PTug+rgbbjKT3BhXRsi1nS6DO+EWuGiR1vAfNZfTZ7aFheDMMN3NDrud53K3d6xWK4IzOBGzdbfl5W+63eZknAWHYBu7FaPo3niSe9Tjjd7VldeGjfQb/UPeoHBD0D9Q+a3Y4Z1KH0YOhWhpX0I/1CewqR2EEeiR2rePozqUzaJ44ErBqWD4KyR5D25ha449K2PR3ChHWloFm5SAOgFma3iFetpyDfKAR6QGU+7isvgzBt45XCzswaTzG7S0fFTZd7XPWmVbhvUqzKDqWa2YQMVoYxlGqzKZX2VRDUFq2FVRGq1ksgla1TAKKICIiAiIgIiICIiAsLi0WeTsYB4m6zSs5o7uJQYI0fUoeRdSzewTYIMJ5F1J5F1LN7BNggwfkXUnkXUs5sFDYdSDB+RdSnjpP/u9ZnYIIEbFagmL22d57dzuvrV0rNrLOuOPxHQroG6MTIiICIiAiIgIiICIiAiIgIiICkyqdQsglyplU1ksglyplU1ksglyplU1ksglyplU1ksgkyqZqjZLIIoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/2Q=="
              alt=""
              class="card-img-top"
              width={100}
              height={300}
            />
            <div class="card-body">
              <h5 class="card-title">Lungo/largo</h5>
              <p class="card-text">
                El conocido como café largo es un tipo de café en el que la
                extracción de agua en contacto con los granos de café se realiza
                de manera más prolongada, lo que conlleva una mayor cantidad de
                infusión. Se diferencia del anterior en el hecho de que aquí es
                directamente la infusión la que se produce en mayor cantidad,
                sin tener que añadir agua externamente. Suele servirse en tazas
                o incluso vasos largos.
              </p>
            </div>
          </div>
        </div>
        {/* Sexta Tarjeta */}
        <div class="col">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJ_sDl9SMFxg51svCuBSg53uzzDTKq4PRjg&usqp=CAU"
              alt=""
              class="card-img-top"
              width={100}
              height={300}
            />
            <div class="card-body">
              <h5 class="card-title">Carajillo</h5>
              <p class="card-text">
                El carajillo es un café preparado como un espresso al cual se le
                añade además de la infusión una cierta cantidad de alguna bebida
                espirituosa, siendo lo más general el brandy, el orujo o el
                whisky. Para ello generalmente primero se hecha el licor
                previamente calentado, al cual se le añadirá el café y
                posteriormente se le pueden agregar otros elementos como azúcar.
                Si se emplea brandy junto con ralladura de limón, pasamos a
                tener el llamado café brulé.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

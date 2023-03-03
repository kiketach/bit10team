import React from "react";
import { useState, useEffect } from "react";

export const Interactua = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://coffee.alexflipnote.dev/random.json")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.file);
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    fetch("https://coffee.alexflipnote.dev/random.json")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.file);
        setIsLoading(false);
      });
  };
  return (
    <>
      <div>
        <h5 className="text-center">
          Observa aqui imagenes divertidas del café
        </h5>
        <div className="text-center">
          <img src={imageUrl} width={200} height={200} alt="Cup of coffee" />
        </div>{" "}
        <br />
        <div className="text-center">
          <button
            className="btn btn-info"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "Obteniendo Imagen..." : "Generar imagen nueva"}
          </button>{" "}
          <br />
        </div>
      </div>{" "}
      <br />
      <div className="text-center">
        Te ofrecemos Imagenes divertidas y frescas del tema que mas nos gusta!{" "}
        <strong>El Café</strong>
      </div>
    </>
  );
};

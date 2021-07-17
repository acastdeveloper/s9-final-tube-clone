import React, { useContext, Fragment } from "react";
import { ThemeContext } from "./../context/ContextoGeneral";

const Home = () => {
  const { nombre, apellido, setApellido } = useContext(ThemeContext);
  setApellido("Mir");
  return (
    <Fragment>
      <div>{nombre}</div>
      <div>{apellido}</div>
    </Fragment>
  );
};

export default Home;

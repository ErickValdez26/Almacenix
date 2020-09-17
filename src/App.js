import React, { useState } from 'react';
import Inicio from './components/Inicio';
import Formulario from './components/Formulario';
import CheckOut from './components/CheckOut';

import styled from '@emotion/styled';

function App() {
  //Creamos el array del almacen
  const [ almacen, guardarAlmacen ] = useState({
    id: '',
    ciudad: '',
    espacio: '',
    tproducto: '',
    futilizar: '',
    meses: '',
    descProd: '',
    notas: ''
  });

  const [ pagina, guardarPagina ] = useState(0);
  
  let pageActual;

  const controlPagina = () => {
    if(pagina === 0){
      pageActual =  <Inicio 
                      guardarAlmacen={guardarAlmacen}
                      almacen={almacen}
                      guardarPagina={guardarPagina}
                    />;
    } else if (pagina === 1){
      pageActual =  <Formulario 
                      guardarAlmacen={guardarAlmacen}
                      almacen={almacen}
                      guardarPagina={guardarPagina}
                    />;
    } else{
      pageActual =  <CheckOut 
                      almacen={almacen}
                    />
    }
    return pageActual;
  }

  return (
    <Container>
      {controlPagina()}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(44,157,199);
  background: linear-gradient(180deg, rgba(44,157,199,1) 0%, rgba(26,183,173,1) 100%);
`;
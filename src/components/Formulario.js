import React, { useState } from 'react';
import Error from './Error';

import styled from '@emotion/styled';
import next from '../img/next.svg';

const Formulario = ({almacen, guardarAlmacen, guardarPagina}) => {
    //Extraendo todo de almacen
    const { id, ciudad, espacio, tproducto, futilizar, meses } = almacen;

    //Validar error
    const [ error, guardarError ] = useState(false);

    const actualizarAlmacen = e => {
        guardarAlmacen({
            ...almacen,
            [e.target.name]: e.target.value
        });
    }

    const continuarForm = () => {
        if(id === '' || ciudad === '' || espacio === '' || tproducto === '' || futilizar === '' || meses === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPagina(2);
    }

    return (
        <ContFormulario>
            <p>Requerimiento del Almacen</p>

            { error ? <Error mensaje="Debes ingresar una ciudad." /> : null}

            <FormCampos>
                <label>Espacio necesario:</label>
                <Inputs
                    type="text"
                    placeholder="ej. 200m²"
                    name="espacio"
                    onChange={actualizarAlmacen}
                />
                <label>Tipo de producto:</label>
                <Inputs 
                    type="text"
                    placeholder="ej. Consumo"
                    name="tproducto"
                    onChange={actualizarAlmacen}
                />
                <label>Fecha a utilizar:</label>
                <Inputs 
                    type="date"
                    name="futilizar"
                    onChange={actualizarAlmacen}
                />
                <label>Meses de uso:</label>
                <Inputs 
                    type="number"
                    placeholder="ej. 4 meses"
                    name="meses"
                    onChange={actualizarAlmacen}
                />    
            </FormCampos>

            <button
                type="submit"
                onClick={continuarForm}
            >
                <img src={next} alt="next"/>
            </button>
        </ContFormulario>
    )
}

export default Formulario;

const ContFormulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    
    p{
        font-size: 14px;
        text-decoration: underline white;
        font-weight: bold;
        color: white;
        margin-top: 70px;
        margin-bottom: 20px;
    }
    button{
        background-color: #DED958;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        margin-top: 30px;
    }
`;
const FormCampos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label{
        color: #FFF;
        font-size: 12px;
        font-weight: 700px;
        margin-top: 11px;
        margin-bottom: 7px;
    }
`;
const Inputs = styled.input`
    background-color: transparent;
    border: solid #FFF 1.6px;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    color: #FFF;
    font-weight: 700;
    
    ::placeholder{
        font-weight: 300;
        color: #FFF;
        opacity: 70%;
        font-size: 12px;
    }
`;
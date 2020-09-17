import React, { useState } from 'react';
import Error from './Error';

import garaje from '../img/garage.svg';
import next from '../img/next.svg';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

const Inicio = ({almacen, guardarAlmacen, guardarPagina}) => {
    //Extraendo todo de almacen
    const { id, ciudad } = almacen;

    //Validar error
    const [ error, guardarError ] = useState(false);

    const actualizarCiudad = e => {
        let id = uuidv4();
        guardarAlmacen({
            ...almacen,
            id: id.substr(0, 11),
            [e.target.name]: e.target.value
        });
    }
    
    const continuarForm = () => {
        if(id === '' || ciudad === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPagina(1);
    }

    return (
        <ContInicio>
            <DivImg>
                <img src={garaje} alt="garaje"/>
            </DivImg>

            <FormCiudad>
                <label>Ingrese la ciudad:</label>
                
                { error ? <Error mensaje="Debes ingresar una ciudad." /> : null}
                
                <input
                    type="text" 
                    placeholder="ej. Lima"
                    name="ciudad"
                    onChange={actualizarCiudad}
                />

                <button 
                    type="submit"
                    onClick={continuarForm}
                >
                    <img src={next} alt="next"/>
                </button>
            </FormCiudad>
        </ContInicio>
    )
}

export default Inicio

const ContInicio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
`;
const DivImg = styled.div`
    margin: 75px auto;
    img{
        width: 73px;
        height: 73px;
    }
`;
const FormCiudad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    label{
        font-weight: 700;
        text-align: center;
        color: #FFF;
        font-size: 14px;
        margin-bottom: 25px;
    }
    input{
        background-color: transparent;
        color: #FFF;
        border: solid #FFF 1.6px;
        height: 40px;
        border-radius: 10px;
        width: 100%;
        padding: 0 10px;
        margin-bottom: 30px;

        ::placeholder{
            color: #FFF;
            opacity: 70%;
            font-weight: 300;
        }
    }
    button{
        background-color: #DED958;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
    }
`;
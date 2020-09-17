import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import two_next from '../img/two_next.svg';

const CheckOut = ({almacen}) => {
    //Extraendo todo del almacen
    const { id, ciudad, espacio, tproducto, futilizar, meses, descProd, notas } = almacen;

    return (
        <ContCheck>
            <Title>
                <p>Información a mostrar: </p>
            </Title>

            <span>Id: {id}</span>

            <Contenido>
                <p>Ciudad: <span>{ciudad}</span></p>
                <p>Espacio necesario: <span>{espacio}</span></p>
                <p>Tipo de producto: <span>{tproducto}</span></p>
                <p>Fecha a utilizar: <span>{futilizar}</span></p>
                <p>Meses de uso: <span>{meses}</span></p>

                {(descProd === '', notas === '')?
                    <Fragment>
                        <p>Agregar una descripción / nota</p>
                        <button>Añadir datos</button> 
                    </Fragment>
                : 
                    <Fragment>
                        <p>Descripción del producto: <span>{descProd}</span></p>
                        <p>Notas: <span>{notas}</span></p>
                    </Fragment>
                }
                
            </Contenido>
            
            <ContinuarBtn>
                Continuar
                <img src={two_next} alt="next"/>
            </ContinuarBtn>
        </ContCheck>
    )
}

export default CheckOut

const ContCheck = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    margin-right: 200px;

    span{
        text-align: right;
        margin-right: 20px;
        font-size: 12px;
        font-weight: 300px;
        color: #3E3E3E;
        margin-top: 28px;
        margin-bottom: 20px;
    }
`;
const Title = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 30px;
    width: max-content;
    margin-left: 20px;
    background: rgb(44,157,199);
    background: linear-gradient(135deg, rgba(44,157,199,1) 0%, rgba(26,183,173,1) 100%);

    p{
        font-size: 12px;
        font-weight: 700;
        color: #FFF;
        margin: 0 10px;
    }
`;
const Contenido = styled.div`
    margin-left: 20px;

    p{
        margin-bottom: 13px;
        color: #232323;
        font-size: 13px;
    }
    p span {
        color: #000;
        font-size: 13px;
        font-weight: 600;
    }
`;
const ContinuarBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DED958;
    padding: 0 7px 0 11px;
    height: 35px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    margin-top: 35px;
    margin-right: 20px; 
    align-self: flex-end;
`;
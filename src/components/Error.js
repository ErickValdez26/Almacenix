import React from 'react';

import styled from '@emotion/styled';

const Error = ({mensaje}) => {
    return (
        <Mensaje>{mensaje}</Mensaje>
    )
}

export default Error

const Mensaje = styled.p`
    color: #FFF;
    background-color: #F3856E;
    padding: 4px 10px;
    font-size: 12px;
    width: 100%;
    text-align: center;
    margin: 6px 0;
`;
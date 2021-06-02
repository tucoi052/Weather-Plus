import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
 interface ErrorMessageUIProps 
{
    message?:any;
}
const ErrorMessageUI = (props:ErrorMessageUIProps) => {
    const { message } = props;
    return (
        <LableStyled>{message}</LableStyled>
    )
}
export default ErrorMessageUI;
const LableStyled = styled.Text`
padding-top:10;
font-style:italic;
font-size:10;
color:red;`;
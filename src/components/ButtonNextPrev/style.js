import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;

    width: 60%;

    button{
        cursor: pointer;
    }
`

export const ButtonNext = styled.button`
    background-color: grey;
    color: #fff;

    font-size: 16px;
    font-weight: 700px;

    border: none;
    border-radius: 7px;

    padding: 10px 15px;

    :hover{
        background-color: green;
    }
    :disabled{
        background-color: #fff;
        background-color: #bfbfbf1a;

        cursor: not-allowed;
    }
`

export const ButtonPrev = styled.button`
    background-color: grey;
    color: #fff;

    font-size: 16px;
    font-weight: 700px;

    border: none;
    border-radius: 7px;

    padding: 10px 15px;

    :hover{
        background-color: red;
    }
    :disabled{
        text-decoration: line-through;
        background-color: #bfbfbf1a;

        cursor: not-allowed;
    }
`
import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${prop => prop.status === "Alive" ? "#bdffbd" : "#ff9d9d"};
    color: ${prop => prop.status === "Alive" ? "#006700" : "#980000"};

    padding: 3px 10px 3px 10px;
    margin: 10px;

    border-radius: 7px;

    h3{
        text-align: center;

        margin: 0px;
        margin-bottom: 10px;

        font-size: 16px;

        width: 110px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    img{
        width: 100px;
    }

    span{
        text-align: center;

        margin-top: 5px;

        font-size: 16px;

        width: 110px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`
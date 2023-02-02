import styled from "styled-components";

export const CartCard = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    

    
      figure{
        width: 80px;
        background: var(--grey-20);
        height: 80px;
        border-radius: 5px;
    }


    figure > img {
        width: 75px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
    }

    button{
        display: flex;
        padding-top: 30px;
        background: transparent;
        margin-right: 1rem;

    }

`

export const TextCart = styled.h3`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
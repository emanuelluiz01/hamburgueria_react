import styled from "styled-components";
import App from "../../App";

export const Container = styled.div`
  padding: 0rem 1rem;
  display: block;
  margin-top: 10rem;

  main{
    height: 361px;
    margin-bottom: 1rem;
  }


  aside ul {
    border-radius: 0rem 0rem 0.3125rem 0.3125rem;
    background-color: var(--grey-0);
    margin: 0;
    padding: 20px 10px;
    gap: 1.4rem;

  }

  @media (min-width: 800px) {
    padding: 0rem 50px;
    display: flex;
    gap: 1.5rem;
    margin: 11rem 2rem 0rem 2rem;
 
    @media (min-width: 1650px) {
      padding: 0rem 50px;
      display: flex;
      gap: 2rem;
      margin: 11rem 6rem 0rem 7rem;
    }

    main{
      height: 100%;
      width: 100%;
    }

    aside{
      width: 100%;
      max-width: 370px;
      min-width: 342px;
}
    }

  
    aside ul{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
    }

    aside ul li div > h3 {
      font-size: 16px;
    }

    aside ul li div > p {
      font-size: 14px;
    }
  
`;

export const UlProducts = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -12px 20px;
    overflow-x: auto;
    padding: 0 12px;
    gap: 1.2rem;

    @media (min-width: 800px) {
        flex-wrap:wrap ;
    }
  
`

export const CartDiv = styled.div`
    height: 4.0625rem;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    color: var(--white);
    display: flex;
    background-color: var(--primary);
    font-size: 18px;
    justify-content: center;
    align-items: center;
` 

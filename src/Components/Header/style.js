import styled from "styled-components";

export const Header = styled.header`
  height: 140px;
  position: absolute;
  width: 100%;
  background-color: var(--grey-0);
  top: 0;
  padding: 20px 10px 0px 10px;

  div {
    height: 100%;
  }

  input {
    height: 60px;
    width: 100%;
    border-radius: 8px;
    padding: 0px 10px 0px 15px;
    border: none;
  }

  div > button {
    height: 40px;
    width: 107px;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
  }

  @media (min-width: 800px) {
    height: 80px;
    width: 100%;
    background-color: var(--grey-0);
    position: fixed;
    top: 0px;
    padding: 0px 10px 0px 10px;

    div {
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding: 0px 134px 1px 170px;
    }

    div > input {
      width: 400px;
    }

    div > img {
      width: 180px;
    }
  }
`;

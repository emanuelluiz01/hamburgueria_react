import styled from "styled-components";

export const Cards = styled.li`
  width: 300px;
  min-width: 300px;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  height: 340px;

  figure img {
    width: 58%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }

  figure{
    height: 150px;
    text-align: center;
    background-color: var(--grey-0);
    border-radius: 5px 5px 0px 0px;
  }

  div {
    margin: 26px 20px 23px;
  }

  div p {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  div span {
    font-size: 13px;
  }

  button {
    height: 40px;
    font-size: 14px;
    line-height: 17px;
    background-color: var(--primary);
    color: var(--white);
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 8px;
    border: none;
  }
`;

import styled, { keyframes } from "styled-components";

const itemsCard = keyframes`
  from {
    transform: translateY(5rem);
    opacity:0.5;
  }

  to {
    transform: translateY(0rem);
    opacity:1;
  }
`;

const CardUI = styled.div`
  color: lightcoral;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & .items-container {
    list-style: none;
    width: 40%;
    box-shadow: 0px 0px 10px lightcoral;
    border-radius: 20px;
    animation: ${itemsCard} 0.4s ease-out forwards;
    background-color: white;
  }
`;

export default CardUI;

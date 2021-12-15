import styled from 'styled-components';

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 200px;
`;
export const AnswerCardBody = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(0,0,128);
  // text-color: rgb(255,255,0);
  border-radius: 15px;
  width: 250px;
  height: 200px;
  opacity: 0.5;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }

  opacity: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const AnswerCardText = styled.div`
  font-family: "Bebas Neue", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(255, 255, 0);
  font-size: 40px;
  width: 100%;
  justify-content: flex-end;
`;

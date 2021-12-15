import styled from 'styled-components';

export const ProblemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 200px;
`;
export const ProblemCardBody = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(0, 128, 0);
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

export const CardText = styled.div`
  font-family: "Helvetica Neue ME";
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 128, 0);
  font-size: 40px;
  color: rgb(255, 255, 255);
  width: 100%;
  justify-content: flex-end;
`;

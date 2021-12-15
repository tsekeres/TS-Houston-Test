import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  ProblemCardBody,
  CardText,
  ProblemContainer,
} from './ProblemCardElements';

const ProblemCard = () => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'viewAnswer':
        history.push('/AnswerCardView');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <ProblemContainer>
      <ProblemCardBody
        className="ProblemCard"
        id="ProblemCard"
        onClick={() => handleClick('viewAnswer')}
      >
        <CardText id="ProblemText">1+1=</CardText>
      </ProblemCardBody>
    </ProblemContainer>
  );
};

export default ProblemCard;

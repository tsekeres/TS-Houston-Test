import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AnswerCardBody,
  AnswerCardText,
  AnswerContainer,
} from './AnswerCardElements';

const AnswerCard = () => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'viewAnswer':
        history.push('/Home');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <AnswerContainer>
      <AnswerCardBody
        className='AnswerCard'
        id='AnswerCard'
        onClick={() => handleClick('viewAnswer')}
      >
        <AnswerCardText id='answerText'>4</AnswerCardText>
      </AnswerCardBody>
    </AnswerContainer>
  );
};

export default AnswerCard;

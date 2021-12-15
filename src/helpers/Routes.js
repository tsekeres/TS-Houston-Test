import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import AnswerCardView from '../views/AnswerCardView';
import ProblemCardView from '../views/ProblemCardView';
import AnswerCard from '../components/AnswerCard';
import ProblemCard from '../components/ProblemCard';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AnswerCardView" component={AnswerCardView} />
        <Route exact path="/ProblemCardView" component={ProblemCardView} />
        <Route exact path="/AnswerCard" component={AnswerCard} />
        <Route exact path="/ProblemCard" component={ProblemCard} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default Routes;

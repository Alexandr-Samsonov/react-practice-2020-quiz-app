import React from 'react';

import AnswersList from './AnswersList/AnswersList';
import classes from './activeQuiz.module.css';


const ActiveQuiz = props => (
    <div className={classes.activeQuiz}>
        <p className={classes.question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>

            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
);

export default ActiveQuiz;

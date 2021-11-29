import React, { useState, useEffect } from 'react'
import Options from '../options';
import "./styles.css";
import { QUESTIONS } from './selector';
import { db } from "../../firebase";
import IconSpinner from '../../shared/icon-spinner';
import { withRouter } from 'react-router';

function FeedBack({
    history
}) {

    const [isLoading, setIsLoading] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [lastQuestioAnswered, setLastQuestioAnswered] = useState(false);
    const [QuestionAnnswer, setQuestionAnnswer] = useState({});


    const handleChange = () => {
        const value = !isAccepted;
        setIsAccepted(value);
    };

    const onClickOptions = (option) => {
        setQuestionAnnswer({
            ...QuestionAnnswer,
            [QUESTIONS[currentQuestionIndex].question]: option
        })
        if (QUESTIONS[currentQuestionIndex].lastQuestion) {
            setLastQuestioAnswered(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
       
    };

    const moveAhead = () => {
        setIsLoading(true);
        db.collection("feedback")
            .add(QuestionAnnswer)
            .then(() => {
                history.push("countdown-begin");
                setIsLoading(false);
            })
    }

    return (
        isLoading ? <IconSpinner /> : <div>
            {
                lastQuestioAnswered ?
                    <React.Fragment>
                        <div className={"checkboxHolder"}>
                            <input
                                type="checkbox"
                                id={"check"}
                                checked={isAccepted}
                                onChange={handleChange}
                            />
                            <label htmlFor={"check"} />
                            <span>Everything I answered are correct and cannnot be overuled 🙈</span>
                        </div>
                        <div className={"buttonContainer"}>
                            <button onClick={moveAhead} className="common-btn" disabled={!isAccepted}>Move Ahead</button>
                        </div>
                    </React.Fragment>
                    :
                    <section className={"section"}>
                        <h2 className={"questionHeading"} >
                            {
                                QUESTIONS[currentQuestionIndex].question
                            }
                        </h2>
                        <ul className={`questionWrap ownerNumber`}>
                            {
                                QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
                                    <li key={idx} onClick={() => onClickOptions(option)}>
                                        <Options
                                            text={option.label}
                                        />
                                    </li>
                                ))
                            }
                        </ul>

                    </section>
            }


        </div>
    )
}

export default withRouter(FeedBack);


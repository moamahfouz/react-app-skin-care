import React, {useState} from 'react';
import questionsData from '../helpers/questions.json';


const Assessment = () => {

    const progressBarStyle = {
        background: '#363873',
        width: '8%',
        height: '10px',
    };

    const [index, setIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const questions = questionsData;

    const next = () => {
        // ... your existing next function logic
    };

    const back = () => {
        // ... your existing back function logic
    };

    const submitAnswer = (questionIndex, selectedAnswer) => {
        // ... your existing submitAnswer function logic
    };


    return (
        <>
            {/* Header */}
            <div className="text__center shadow">
                <a className="navbar-brand m-auto active" href="/">
                    <img src="/images/mf-logo.svg" width="50" alt="Logo"/>
                </a>
            </div>

            {/* Progress Bar */}
            <div className="container">
                <div className="row mt-1">
                    <div className="col-12">
                        <div dir="ltr" className="text-right">
                            <p className="mb-1">
                                <span id="current">{index + 1}</span> / {questions.length}
                            </p>
                            <div className="progress">
                                <div className="progress-bar" id="progressbar" style={progressBarStyle}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Assessment Questions */}
            <div className="mt-2 container divs">
                <section>
                    <div className="text-primary text__bold text__center" id="title">
                        {questions[index].title}
                    </div>
                    <div className="row text__center" id="answers">
                        {/* Render answer options here */}
                        {Object.entries(questions[index].answers).map(([key, value]) => (
                            <div key={key} className="col-12">
                                <input
                                    value={value}
                                    name={`q_${index}_answers`}
                                    type="radio"
                                    id={`q_${index}_${key}`}
                                    required=""
                                />
                                <label
                                    onClick={() => submitAnswer(`q_${index}`, value)}
                                    className="labelClass"
                                    htmlFor={`q_${index}_${key}`}
                                >
                                    {value}
                                </label>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Controls */}
                <div className="controls">
                    <a onClick={next} className="next btn text-white bg-prime rounded">
                        <i className="fa fa-arrow-right"></i>
                    </a>
                    <a onClick={back} className="back btn text-white bg-prime rounded">
                        <i className="fa fa-arrow-left"></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Assessment;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL } from "../config";
import '../CSS/Quiz.css';
import DonutChart from './DonutChart';


const QuizComponents = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [typeeng, setTypeeng] = useState(0);
  const [typemed, setTypemed] = useState(0);
  const [typeBus, setTypeBus] = useState(0);
  const [typelaw, setTypelaw] = useState(0);
  const [typeArsts, setTypeArts] = useState(0);
  const [typesports, setTypesports] = useState(0);
  const [typeteach, setTypeteach] = useState(0);
  const [typeres, setTyperes] = useState(0);
  const [typephoto, setTypephoto] = useState(0);
  const [typeagri, setTypeagri] = useState(0);

  const counts = [
    { title: 'engineering', count: typeeng },
    { title: 'medical', count: typemed },
    { title: 'businessEconomics', count: typeBus },
    { title: 'law', count: typelaw },
    { title: 'arts', count: typeArsts },
    { title: 'sports', count: typesports },
    { title: 'teaching', count: typeteach },
    { title: 'research', count: typeres },
    { title: 'photography', count: typephoto },
    { title: 'agriculture', count: typeagri }
  ];

  useEffect(() => {
    // Fetch questions from the Java controller using Axios
    axios.get(`${URL}/quiz/`) // Change this URL to match your Java backend API endpoint
      .then(response => {
        const fetchedQuestions = response.data;
        setQuestions(fetchedQuestions);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleOptionClick = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleNextClick = () => {
    if (selectedOptionIndex !== null) {
      checkAnswer(selectedOptionIndex);
      setSelectedOptionIndex(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsSubmitted(true);
      }
    }
  };

  const checkAnswer = (selectedOptionIndex) => {
    const correctAnswerIndex = questions[currentQuestionIndex].queAns;
    console.log("correctAnswerIndex=======",correctAnswerIndex);
    console.log("selectedOptionIndex=======",questions[currentQuestionIndex][`queOpt${selectedOptionIndex}`]);

    if (questions[currentQuestionIndex][`queOpt${selectedOptionIndex}`] === correctAnswerIndex) {
         
         if((questions[currentQuestionIndex].queType)=='engineering'){
          setTypeeng(typeeng+1)
         }else if((questions[currentQuestionIndex].queType)=='medical'){
          setTypemed(typemed+1)
         }else if((questions[currentQuestionIndex].queType)=='businessEconomics'){
          setTypeBus(typeBus+1)
         }else if((questions[currentQuestionIndex].queType)=='law'){
          setTypelaw(typelaw+1)
         }else if((questions[currentQuestionIndex].queType)=='arts'){
          setTypeArts(typeArsts+1)
         }else if((questions[currentQuestionIndex].queType)=='sports'){
          setTypesports(typesports+1)
         }else if((questions[currentQuestionIndex].queType)=='teaching'){
          setTypeteach(typeteach+1)
         }else if((questions[currentQuestionIndex].queType)=='research'){
          setTyperes(typeres+1)
         }else if((questions[currentQuestionIndex].queType)=='photography'){
          setTypephoto(typephoto+1)
         }else if((questions[currentQuestionIndex].queType)=='agriculture'){
          setTypeagri(typeagri+1)
         }
      
      setScore(score + 1);
    }
  };

  return (
    <div style={{ marginTop: '150px' }}>
      
    <div className="quiz-container">
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div className="question-card">
          <div className="question-number">Question {currentQuestionIndex + 1}</div>
          <div className="question-text">{questions[currentQuestionIndex].queBody}</div>
          <div className="options-container">
            {[1, 2, 3, 4].map((optionNumber) => (
              <div
                className={`option-container ${
                  selectedOptionIndex === optionNumber ? 'selected-option' : ''
                }`}
                key={optionNumber}
                onClick={() => handleOptionClick(optionNumber)}
              >
                <div className="option-number">{String.fromCharCode(65 + optionNumber - 1)}</div>
                <div className="option">{questions[currentQuestionIndex][`queOpt${optionNumber}`]}</div>
                {selectedOptionIndex === optionNumber && (
                  <div className="selection-indicator">&#10003; Selected</div>
                )}
              </div>
            ))}
          </div>
          <button
            className="next-button"
            onClick={handleNextClick}
            disabled={selectedOptionIndex === null}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Submit Test' : 'Next'}
          </button>
        </div>
      )}
      {isSubmitted && (
        <div className="result-container">
          <div className="result-text">
            Test Submitted! Your Score: {score} / {questions.length}
          </div>
        </div>
      )}
      {isSubmitted && (
        <div className="doughnut-chart-container">
          <div style={{ marginBottom: '150px' }}> 
          
          <DonutChart counts={counts} />
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default QuizComponents;

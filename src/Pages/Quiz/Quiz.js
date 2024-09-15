import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./Quiz.css";
import Questions from '../../components/Questions/Questions';

const Quiz = ({name, score , questions, setQuestions , setScore}) => {

  const [options, setoptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(()=>{
    console.log(questions);
    setoptions(
      questions && 
      handleShuffle([questions[currentQuestion]?.correct_answer,
      ...questions[currentQuestion]?.incorrect_answers]))
 },[currentQuestion, questions])

 console.log(options);

 const handleShuffle =(options)=>{
  return options.sort(() => Math.random() - 0.5)

 }
  return (
    <div className='quiz'>
      <span className='subtitle'>
       Welcome , {name}
      </span>
      {
        questions ? (
          <>
            <div className='quizInfo'>
            <span >{questions[currentQuestion].category}</span>
            <span> Score : {score}</span>
            </div>
            <Questions
             questions={questions}
             currentQuestion={currentQuestion}
             setCurrentQuestion={setCurrentQuestion}
             options={options}
             correct ={questions[currentQuestion]?.correct_answer}
             score={score}
             setScore={setScore}
             />
          </>

        ):(
          <CircularProgress 
            style={{
              margin: 100,
              
            }}
            color= 'inherit'
              size={150}
              thickness={1}
          />
        )
      }
    </div>
  )
}

export default Quiz
import React, { useState } from 'react'
import "./Questions.css"
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const Questions = ({
    questions,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    correct,
    options

}) => {
    const history =useNavigate()
    const [selected, setselected] = useState();
    const [error, seterror] = useState(false);
    const handleSelect =(i)=>{
        if(selected === i && selected === correct){
            return "select";
        }else if(selected === i && selected !== correct){
            return "wrong";
        }else if(i=== correct){
            return "select";
        }

    };

    const handleCheck = (i) =>{
        setselected(i);
        if(i === correct) {
            setScore(score+1)
        }
        seterror(false);
    }

    if (!questions || !questions[currentQuestion]) {
        return <p>Loading...</p>; // You can show a loading message or handle it differently
      }


      const handleNext =()=>{
        if(currentQuestion >8){
            history("/result");

        }else if(selected){
            setCurrentQuestion(currentQuestion +1);
            setselected(null);
        }else{
            seterror("Please select an option");
        }
      };

      const handleQuit =()=>{
        history("/home");
      }

  return (
    <div className='question'>
        <h1>Qusetion {currentQuestion + 1}</h1>
        <div className='singleQuestion'>
        <h2>
            {questions[currentQuestion].question}</h2>
         <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          { options &&
            options.map((i)=>(
                <button 
                onClick={()=>handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
                >
                {i}
                </button>
            ))
          }
         </div>
         <div className='controls'>
         <Button 
           variant='contained'
           color='secondary'
           size='large'
           style={{width: 185}}
           href='/'
           onClick={()=>handleQuit}
          className='quit'>Quit</Button>

         <Button
         variant='contained'
           color='primary'
           size='large'
           style={{width: 185}}
          onClick={handleNext}
           className='next'>Next</Button>
         

         </div>

        </div>
    </div>
  )
}

export default Questions
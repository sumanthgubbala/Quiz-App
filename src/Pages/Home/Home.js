import React, { useState } from 'react'
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material'
import Categories from '../../Data/Category'
import {useNavigate } from "react-router-dom";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({name,setName , fetchQuestions}) => {



    const [category, setcategory] = useState("");
    const [Difficulty, setDifficulty] = useState("");
    const [error, seterror] = useState(false);

    const history =useNavigate()
    const handleSubmit = () => {
        if(!category || !Difficulty){
            seterror(true);
            return ;

        }else{
            seterror(false);
            fetchQuestions(category,Difficulty);
            history("/quiz");
        }

    }





  return (
    <div className='content'>
    <div className='settings'>
        <span style={{fontSize:30}}>Quiz Settings</span>
        <div className='settings__select'>
         {error && <ErrorMessage > Please Fill all the feilds</ErrorMessage>}
         <TextField label='Enter your Name' variant='outlined'  
            style={{
                marginBottom:25
            }}
            onChange={(e)=> setName(e.target.value)}
         />

         <TextField
            select
            label='Select Category'
            variant='outlined'
            style={{marginBottom:30}}
            onChange={(e)=> setcategory(e.target.value)}
            value={category}


         >
         {
            Categories.map((cat)=>(
                <MenuItem key={cat.value} value={cat.value}>{cat.category}</MenuItem>
            ))
         }

         </TextField>

         <TextField
            select
            label="Select Difficulty"
            value={Difficulty}
            onChange={(e)=>setDifficulty(e.target.value)}
           
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant='contained' color='primary' size='large' 
          onClick={handleSubmit}
          >
            Start Quiz
          </Button>



        </div>

    </div>
    <img src='/quiz.svg' className='banner' alt="quiz img"/>

    </div>
  )
}

export default Home
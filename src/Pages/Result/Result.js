import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import "./Result.css"

const Result = ({name , score}) => {
  const back=useNavigate();
  useEffect(()=>{
    if(!name){
      back('/');
    }
  },[name,back])
  return (
    <div className='result'>
    <span className='title'>
      Final Score : {score}
    </span>
    <Button
    variant="contained"
    color="primary"
    size="large"
    style={{
      alignSelf:"center",
      marginTop: 20
    }}
    href="/"
     >
     Back to HomePage

    </Button>

    </div>
  )
}

export default Result
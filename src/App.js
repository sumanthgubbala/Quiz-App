import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setname] = useState("");
  const [questions, setquestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions =async( category="",difficulty="" )=>{
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
   //console.log(data.results);
    setquestions(data.results);
  };
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setname} fetchQuestions={fetchQuestions}/>} />
          <Route path="/quiz" element={<Quiz 
          name={name}
          setName={setname} 
          questions={questions} 
          score={score} 
          setScore={setScore}
          setquestions={setquestions}
           />} />
          <Route path="/result" element={<Result score={score}
          name={name}
           />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

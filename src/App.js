import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`

const ContainerWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Title = styled.p`
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
`

const Question = styled.div`
  font-size: 40px;
  text-align: center;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
`

const Score = styled.p`
  margin-top: 10px;
  font-size: 20px;
`

const TxtWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const TxtBox = styled.input`
  border: none;
  padding-bottom: 5px;
  padding-left: 10px;
  border-bottom: 2px solid #000;
  font-size: 40px;
  &:focus{
    outline: none;
  }
  width: 80px;
`

const Button = styled.button`
  width: 90px;
  height: 40px;
  margin-left: 10px;
  font-size: 18px;
  background-color: #FF8000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

const ResultTxt = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
`

function App() {

  const [first,setFirst] = useState(randomNumber());
  const [second,setSecond] = useState(randomNumber());
  const [value,setValue] = useState('');
  const [result,setResult] = useState('');
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  function randomNumber(){
    return Math.ceil(Math.random() * 9);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(parseInt(value) === first * second){
      setResult('⭕정답입니다.')
      setValue('');
      setScore(score + 1)
      newQuiz();
    }else{
      setResult('❌틀렸어요! 다시 생각해보세요.')
      setValue('');
      setScore(score - 1)
    }
  }

  const userInput = (e) => {
    setValue(e.target.value);
  }

  const newQuiz = () => {
    setFirst(randomNumber());
    setSecond(randomNumber());
  }

  const Num = (e)=>{
    return e.target.value = e.target.value.replace(/[^0-9.]/g, '');
  }

  return (
    <>
      <Container>
        <ContainerWrap>
          <Title>✖구구단 게임🎮</Title>
          <Box>
            <form onSubmit={onSubmit}>
              <Score>점수 : {score}</Score>
              <TxtWrap>
                <Question>{first} x {second} = </Question>
                <TxtBox type="text" onInput={Num} ref={inputRef} value={value} onChange={userInput} required autoFocus />             
                <Button>확인</Button>
              </TxtWrap>
              <ResultTxt>{result}</ResultTxt>
            </form>
          </Box>
        </ContainerWrap>
      </Container>
    </>
  );
}

export default App;

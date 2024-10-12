import Timer from "./Timer";
import Answers from "./Answers";
import QUESTIONS from '../questions.js'
import { useState } from "react";

export default function Question({index, onSelectAnswer, onSkip})
{
    const [answer, setAnswer] = useState({
        selectedAnswer : '',
        isCorrect : null
    })
    let timer = 10000;
    function handleSelectAnswer(givenanswer){
        setAnswer({
            selectedAnswer: givenanswer,
            isSelected : true,
            isCorrect: null
        })

        setTimeout(()=>{
            console.log('Timer1')
            setAnswer({
                selectedAnswer: givenanswer,
                isCorrect: QUESTIONS[index].answers[0] === givenanswer,
            });
            setTimeout(()=>{
                console.log('Timer2')
                onSelectAnswer(givenanswer);
            },2000)
        },1000)
    }
    let answerState = ''
    if (answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
        console.log(answerState)
    }else if (answer.selectedAnswer){
        answerState = 'answered';
    }
    //let showTimer = answer.selectedAnswer ==='' && answer.isCorrect
    return(
        <div className ="h-full w-9/12 flex flex-col mt-8 gap-4 content-center items-center">
            {answer.selectedAnswer === '' && <Timer key={timer} timeOut={timer} onTimeOut={answer.selectedAnswer === ''? onSkip:null}/>}
            <h3 className='text-stone-600 font-bold'>{QUESTIONS[index].text}</h3>
            <Answers 
            answers={QUESTIONS[index].answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}/>
        </div>
    )
}
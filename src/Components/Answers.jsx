import { useRef } from "react";
export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef() //for managing the shuffledAnswer independently as it helps in not computing it again and AGAIN WHEN THE COMPONENT rerenders

    if(!shuffledAnswers.current)
        {
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(()=>Math.random() - 0.5);
        }
        
    return(
        <ul className = "h-full w-9/12 flex flex-col mt-8 gap-2 items-center">
        {shuffledAnswers.current.map((answer)=>{
            const  isSelected = selectedAnswer === answer;
            let cssClasses = "w-96 rounded-full bg-stone-800 hover:bg-stone-400 text-stone-100";

            if (answerState === 'wrong' && isSelected){
                console.log(answerState)
                cssClasses = 'w-96 rounded-full text-stone-100 bg-red-500'
            }
            else if (answerState === 'correct' && isSelected){
                console.log(answerState)
                cssClasses = 'w-96 rounded-full text-stone-100 bg-lime-500'
            }
        return (<li key={answer} className="w-96 flex flex-col gap-2 align-left text-stone-500">
            <button onClick={()=>onSelect(answer)} className={cssClasses} disabled={answerState !== ''}>{answer}</button>
        </li>)})
        }
     </ul>
    )
}
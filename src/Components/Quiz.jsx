import { useState , useCallback} from 'react';
import QUESTIONS from '../questions.js';
import Questions from './Questions.jsx';
import Summary from './Summary.jsx';

export default function Quiz(){
    /* This can be a way to store the active question id as well the answers given by users but 
    it is rather a redundant approach as userAnswers should be enough to determine active question index.
    eg. usrAnswrs = ['A', 'B' ] -> 2 answrs given (ie, 2 questions solved)
    -> the next question should be third one ie next question index should be 2 (as indexing starts from 0)
    

    const [activeQuestionind, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setuserAnswers] = useState([]);
    */
    const [userAnswers, setuserAnswers] = useState([]);
    const activeQuestionind = userAnswers.length;

    const handleSelectAnswer = useCallback((selectedAnswer)=>
        {
            setuserAnswers((prevuserAnswers)=>{
                return [...prevuserAnswers,selectedAnswer]
            })
        },[]);
    const handleskipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])
    const quizIsComplete = activeQuestionind === QUESTIONS.length;

    

    if (quizIsComplete){
        return(
        <Summary userAnswers={userAnswers}/>
        )
    }
    //Answers will be shuffled only if current of shuffledanswers is undefined
    
    return(
    <div className='w-full h-96 flex flex-col content-center items-center'>
        <Questions key = {activeQuestionind} index = {activeQuestionind} onSelectAnswer ={handleSelectAnswer}
        onSkip = {handleskipAnswer}/>
     </div>
     )
     //A key attribute in the react component destroys the previous instance and recreates the component again.
     //it is however not a prop and cannot be passed across components
}
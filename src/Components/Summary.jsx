import QUESTIONS from "../questions.js"
export default function Summary({ userAnswers}){
    const skippedAnswers = userAnswers.filter((answer) => answer === null)
    const correctAnswers = userAnswers.filter((answer,index) => {
        return answer === QUESTIONS[index].answers[0]
})


    return(
        <div className='w-2/3 m-auto h-fit flex flex-col content-center items-center bg-stone-200 gap-4 mb-2'>
        <h1 className="uppercase text-xl font-extrabold text-stone-600 content-center">Quiz Completed!!</h1>
            <div className="flex gap-4 m-auto">
            <p className="flex flex-col ">
                <span className="text-xl font-extrabold text-stone-400">{skippedAnswers.length}</span>
                <span className="text-l font-bold uppercase text-stone-400">skipped</span>
            </p>
            <p className="flex flex-col">
                <span className="text-xl font-extrabold text-stone-400">{correctAnswers.length}</span>
                <span className="text-l font-bold uppercase text-stone-400">answered correctly</span>
            </p>
            <p className="flex flex-col">
                <span className="text-xl font-extrabold text-stone-400">{userAnswers.length - skippedAnswers.length - correctAnswers.length}</span>
                <span className="text-l font-bold uppercase text-stone-400">answered incorrectly</span>
            </p>
            </div>
            <br className="text-stone-800"/>
            <ol className="mb-4">
                {userAnswers.map((answer,index) => {
                    let cssClasses = 'text-amber-700 font-bold'
                    if (answer === QUESTIONS[index].answers[0])
                        cssClasses = 'text-lime-600 font-bold'
                    else if(answer !== QUESTIONS[index].answers[0] && answer)
                        cssClasses = 'text-rose-500 font-bold'
                    return(
                    <li key = {index}>
                        <h3 className ="text-stone-600 font-bold">{index + 1}</h3>
                        <p className ="text-stone-500 font-bold">{QUESTIONS[index].text}</p>
                        <p className={cssClasses}>{answer ?? 'SKIPPED!!'}</p>
                        {answer!== QUESTIONS[index].answers[0] && <p className="text-sm text-teal-700 font-bold">Correct Answer: {QUESTIONS[index].answers[0]}</p>}
                    </li>
                    );
                })}
            </ol>
        </div>
    )
}
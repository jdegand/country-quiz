import { useCapitalQuestion } from '../hooks/useCapitalQuestion';
//import { useId } from 'react';

function Capital({ answers, handleClick, handleSubmit, answer }) {
  
    const data = useCapitalQuestion(answers);

    // originally used useId to generate key below. Not good idea. 
  
    return (
      <>
      {
        data?.map(question => {
          if(question.status === 'success' && question.data[0].name.common === answer){
            return (
              <div key={question.data[0].name.common} className="question-div"> 
                <h2>_____ is the capital of {answer}</h2>
              </div>  
            ) 
          }
        })
      }
        {
          data?.map(question => {
            if(question.status === 'success'){  
              return (  
                <button key={question.data[0].capital} className="answer-bubble" onClick={handleClick}>
                  {question.data[0].capital} <span className={`hidden hidden-${question.data[0].name.common}`}>{question.data[0].name.common}</span>
                </button>
              )
            } else {
              return null;
            }
          })
        }
        <button className="answer-button" onClick={handleSubmit}>Answer</button>
      </>
    )
}

export default Capital;

/*
import { useCapitalQuestion } from '../hooks/useCapitalQuestion';
import { useId } from 'react';

function Capital({ answers, handleClick, handleSubmit, answer }) {
    
    const data = useCapitalQuestion(answers);

    // css styling problem had this originally not inside the grid container
    // Then I moved the grid container into the app component vs duplicating it inside capital and flag

    return (
      <>
      {
        data?.map(question => {
          if(question.status === 'success' && question.data[0].name.common === answer){
            return (
              <div key={useId}>
                <h2>_____ is the capital of {answer}</h2>
              </div>  
            ) 
          }
        })
      }

      <div className="grid">
        {
          data?.map(question => {
            if(question.status === 'success'){  
              return (  
                <div key={question.data[0].capital} className="answer-bubble" onClick={handleClick}>
                  {question.data[0].capital} <span className={`hidden hidden-${question.data[0].name.common}`}>{question.data[0].name.common}</span>
                </div>
              )
            } else {
              return;
            }
          })
        }
        <button onClick={handleSubmit}>Answer</button>
      </div>
      </>
    )
}

export default Capital;
*/
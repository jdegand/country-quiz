import { useCapitalQuestion } from '../hooks/useCapitalQuestion';

function Capital({ answers, handleClick, handleSubmit, answer }) {

  const data = useCapitalQuestion(answers);

  return (
    <>
      {
        data?.map(question => {
          if (question.status === 'success' && question.data[0].name.common === answer) {
            return (
              <div key={question.data[0].name.common} className="question-div">
                <h2>_____ is the capital of {answer}</h2>
              </div>
            )
          } else {
            return null;
          }
        })
      }
      {
        data?.map(question => {
          if (question.status === 'success') {
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

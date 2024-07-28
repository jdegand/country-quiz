import { useFlagQuestion } from '../hooks/useFlagQuestion';

function Flag({ answers, handleClick, handleSubmit, answer }) {

  const data = useFlagQuestion(answers);

  return (
    <>
      {
        data?.map(question => {

          if (question.status === 'success' && question.data[0].name.common === answer) {
            return (
              <div key={question.data[0].name.common} className="question-div">
                <img className="flag-image" src={question.data[0].flags.png} alt="Guess which country has this flag" />
                <h2>Which country does this flag belong to?</h2>
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
              <button key={question.data[0].name.common} className="answer-bubble" onClick={handleClick}>
                {question.data[0].name.common}
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

export default Flag;

// Virgin Islands causing problems - returns an array - have to see what name will fetch just the united states virgin islands or british virgin islands

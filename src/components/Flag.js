import { useFlagQuestion } from '../hooks/useFlagQuestion';

function Flag({ answers, handleClick, handleSubmit, answer }) {

    const data = useFlagQuestion(answers);

    return (
      <>
      {
        data?.map(question => {
          
          if(question.status === 'success' && question.data[0].name.common === answer){
            return (
              <div key={question.data[0].name.common} className="question-div">
                <img className="flag-image" src={question.data[0].flags.png} alt="Guess which country has this flag" /> 
                <h2>Which country does this flag belong to?</h2>
              </div>  
            ) 
          }
  
        })
      }
        {
          data?.map(question => {
            if(question.status === 'success'){  
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


/*

import { useCapitalQuestion } from '../hooks/useCapitalQuestion';
import { useQuery } from 'react-query';
import { randomInt } from '../helper';

//https://restcountries.com/v3.1/all

  const { isLoading, error, data } = useQuery('answer1', () =>
    fetch('https://restcountries.com/v3.1/name/cocos%20islands?fields=name,capital,flags').then(res =>
      res.json()
    )
  )

  const { data: answer2 } = useQuery('answer2', () =>
  fetch('https://restcountries.com/v3.1/name/japan?fields=name,capital,flags').then(res =>
    res.json()
  )
)

const { data:answer3 } = useQuery('answer3', () =>
fetch('https://restcountries.com/v3.1/name/panama?fields=name,capital,flags').then(res =>
  res.json()
)
)

const { data:answer4 } = useQuery('answer4', () =>
fetch('https://restcountries.com/v3.1/name/germany?fields=name,capital,flags').then(res =>
  res.json()
)
)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
*/

/*

  //Virgin Islands causing problems - return an array - have to see what name will fetch just the united states virgin islands or british virgin islands
  
    const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Botswana","Brazil","Brunei","Bulgaria","Burundi","Cambodia","Cameroon","Chad","Chile","China","Colombia","Congo","Cook%20Islands","Cocos%20(Keeling)%20Islands","Costa%20Rica","Croatia","Cuba","Cyprus","Czech%20Republic","Denmark","Djibouti","Dominica","Dominican%20Republic","Ecuador","Egypt","El%20Salvador","Equatorial%20Guinea","Estonia","Ethiopia","Falkland%20Islands","Faroe%20Islands","Fiji","Finland","France","French%20Polynesia","French%20West%20Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea%20Bissau","Guyana","Haiti","Honduras","Hong%20Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle%20of%20Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz%20Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands%20Antilles","New%20Caledonia","New%20Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua%20New%20Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto%20Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint%20Pierre%20and%20Miquelon","Samoa","San%20Marino", "Saudi%20Arabia","Senegal","Serbia","Seychelles","Sierra%20Leone","Singapore","Slovakia","Slovenia","South%20Africa","South%20Korea","Spain","Sri%20Lanka","St%20Kitts%20and%20Nevis","St%20Lucia","St%20Vincent","St%20Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad%20and%20Tobago","Tunisia","Turkey","Turkmenistan","Turks%20and%20Caicos","Uganda","Ukraine","United%20Arab%20Emirates","United%20Kingdom", "United%20States", "Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
  
    
    //const data = useFlagQuestion(['Panama', 'Spain', 'Argentina', 'Albania']);

    const cl = country_list.length;
    const answer1 = country_list[`${randomInt(cl)}`];
    const answer2 = country_list[`${randomInt(cl)}`];
    const answer3 = country_list[`${randomInt(cl)}`];
    const answer4 = country_list[`${randomInt(cl)}`];

    // causes an explosion of requests
    
    const data = useFlagQuestion([answer1, answer2, answer3, answer4])

    data?.map(question => {
      if(question.status === 'success'){
        console.log(question.data[0].name.common)
      } else {
        return;
      }
    })
  */
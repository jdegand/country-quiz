import Capital from "./Capital";
import Flag from './Flag';
import { QueryClient, QueryClientProvider } from 'react-query';
import { randomInt } from "../helper";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
})

function Quiz({score, setScore, setGameState }){
  // "Macau" doesn't have a common name?
  const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Botswana","Brazil","Brunei","Bulgaria","Burundi","Cambodia","Cameroon","Chad","Chile","China","Colombia","DR Congo","Croatia","Cuba","Cyprus","Denmark","Djibouti","Dominica","Ecuador","Egypt","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Reunion","Romania","Russia","Rwanda","Samoa","Senegal","Serbia","Seychelles","Singapore","Slovakia","Slovenia","Spain","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

  const cl = country_list.length;
  //const answer1 = country_list[`${randomInt(cl)}`];
  //const answer2 = country_list[`${randomInt(cl)}`];
  //const answer3 = country_list[`${randomInt(cl)}`];
  //const answer4 = country_list[`${randomInt(cl)}`];

  // unnecessary to shuffle answers? - already randomly picked - but have to check all different
  //const arr = [answer1, answer2, answer3, answer4]; 

  const makeAnswersArray = () => {
    const arr = [];
    let count = 4;

    for(var i = 0; i < count; i++){
      let answer = country_list[`${randomInt(cl)}`];

      if(arr.indexOf(answer) === -1) {
        arr.push(answer);
      } else {
        count++; // otherwise, if duplicate - only 3 answers 
      }
      
    }
    return arr;
  }

  const arr = makeAnswersArray();

  //console.log('possible choices', arr)

  const answer = arr[`${randomInt(arr.length)}`];

  //console.log('answer', answer)

  const handleClick = (e) => {

    document.querySelectorAll('.answer-bubble').forEach(answer => {
      if(answer.classList.contains('answer')){
        answer.classList.remove('answer')
      }
    })

    e.target.classList.add('answer')
  }

  const handleSubmit = (e) => {
    //console.log(e)
    const answerPicked = Array.from(e.target.parentElement.children).filter(bubble => bubble.classList.contains('answer'));
    if(answerPicked.length === 0) return;

    //console.log(document.querySelector(`.hidden-${answer}`)?.innerText === answer)

    if(answerPicked[0].innerText === answer){
      setScore(prev => prev + 1);
      //answerPicked[0].classList.add('correct');
    } else {
      //answerPicked[0].classList.add('incorrect')
      setGameState("results");
      /* if(score === 0){
        window.location.reload(true);
      } else {
        //setScore(0);
        setGameState("results");
      }
      */
    }
  }

  const handleCapitalSubmit = (e) => {
    
      const answerPicked = Array.from(e.target.parentElement.children).filter(bubble => bubble.classList.contains('answer'));
      if(answerPicked.length === 0) return;

      //console.log('ap',answerPicked[0].querySelector('.hidden').innerText)

      // need to grab the correct piece and grab the span with hidden attribute

      if(answerPicked[0].querySelector('.hidden').innerText === answer){
        setScore(prev => prev + 1);
      } else {
        setGameState("results")
    }
  }

    const flip = randomInt(2);

    return (
        <QueryClientProvider client={queryClient}>
        {flip > 0 ? 
        <Flag answers={arr} handleClick={handleClick} handleSubmit={handleSubmit} answer={answer} />
        : 
        <Capital answers={arr} handleClick={handleClick} handleSubmit={handleCapitalSubmit} answer={answer} />
        }
      </QueryClientProvider>
    )

}

export default Quiz;
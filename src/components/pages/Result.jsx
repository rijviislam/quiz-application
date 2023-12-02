// import _ from "lodash";
// import { useLocation, useParams } from "react-router-dom";
// import useAnswers from "../../hooks/useAnswers";
// import Analysis from "../Analysis";
// import Summary from "../Summary";

// export default function Result() {
//   //problem Location
//   // const { id } = useParams();
//   // const location = useLocation();
//   // const { state } = location;
//   // const qna = state ? state.qna : null;
//   // const { loading, error, answers } = useAnswers(id);

//   // console.log(qna);
//   const { id } = useParams();
//   const location = useLocation();
//   const { state } = location;
//   const qna = state ? state.qna : null;
//   const { loading, error, answers } = useAnswers(id);

//   // Check if qna and answers are available before calculations
//   if (!qna || !answers || loading) {
//     return <div>Loading...</div>;
//   }
//   function calculate() {
//     let score = 0;
//     answers.forEach((question, index1) => {
//       let correctIndexes = [],
//         checkedIndexes = [];
//       question.options.forEach((option, index2) => {
//         if (option.correct) correctIndexes.push(index2);
//         if (qna[index1].options[index2].checked) {
//           checkedIndexes.push(index2);
//           option.checked = true;
//         }
//       });
//       if (_.isEqual(correctIndexes, checkedIndexes)) {
//         score = score + 5;
//       }
//       return score;
//     });
//   }

//   const userScore = calculate();

//   return (
//     <>
//       {loading && <div>Loading...</div>}
//       {error && <div>There was an error ...</div>}
//       {answers && answers.length > 0 && (
//         <>
//           <Summary score={userScore} noq={answers.length} />
//           <Analysis answers={answers} />
//         </>
//       )}
//     </>
//   );
// }

// import { useLocation, useParams } from "react-router-dom";
// import useAnswers from "../../hooks/useAnswers";
// import Analysis from "../Analysis";
// import Summary from "../Summary";

// export default function Result() {
//   const { id } = useParams();
//   const location = useLocation();
//   const { state } = location;
//   const qna = state ? state.qna : null;
//   const { loading, error, answers } = useAnswers(id);

//   function calculateScore() {
//     let score = 0;

//     if (answers && qna) {
//       answers.forEach((question, index1) => {
//         let correctIndexes = [];
//         let checkedIndexes = [];

//         question.options.forEach((option, index2) => {
//           if (option.correct) correctIndexes.push(index2);
//           if (qna[index1].options[index2]?.checked) {
//             checkedIndexes.push(index2);
//             option.checked = true;
//           }
//         });

//         if (JSON.stringify(correctIndexes) === JSON.stringify(checkedIndexes)) {
//           score += 5;
//         }
//       });
//     }

//     return score;
//   }

//   const userScore = calculateScore();

//   return (
//     <>
//       {loading && <div>Loading...</div>}
//       {error && <div>There was an error...</div>}
//       {answers && answers.length > 0 && (
//         <>
//           <Summary score={userScore} noq={answers.length} />
//           <Analysis answers={answers} />
//         </>
//       )}
//     </>
//   );
// }

import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);

  console.log(qna);
  console.log(answers);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

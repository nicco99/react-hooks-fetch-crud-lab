import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({questions, handleRerender}) {

  let quiArr = questions.map((quiz,index)=><QuestionItem handleRerender={handleRerender} key={index} question={quiz}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quiArr}</ul>
    </section>
  );
}

export default QuestionList;

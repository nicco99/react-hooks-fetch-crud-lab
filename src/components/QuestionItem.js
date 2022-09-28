import React, {useEffect, useState} from "react";

function QuestionItem({ question, handleRerender }) {
  const [newCorrectIndex, setNewCorrectIndex] = useState("")
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => console.log(data))
    handleRerender()
  }

  function handleUpdate(e) {
     setNewCorrectIndex((newCorrectIndex) => e.target.value)

 
  }

  useEffect(()=>{
    let updateIndex = {
      correctIndex:question.correctIndex=newCorrectIndex
    }
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(updateIndex)
  }).then(res => res.json())
  .then(data => console.log(data))
  

  },[newCorrectIndex])


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select  onChange={handleUpdate} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

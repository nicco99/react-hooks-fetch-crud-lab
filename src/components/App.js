import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
function App() {
  const [page, setPage] = useState("List");
const [questions, setQuestions] = useState([])
const [formSubmit, setFormSubmit] = useState(true)
const [deleted, setDeleted] = useState(false)

useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(res => res.json())
  .then(data =>{
    setQuestions(questions => data)
  } )
},[formSubmit,deleted])

function handleUpdate() {
setFormSubmit(formSubmit => !formSubmit)
}
function handleRerender() {
  setDeleted(deleted => !deleted)
}
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} handleUpdate={handleUpdate}/> : <QuestionList questions={questions} handleRerender={handleRerender}/>}
    </main>
  );
}

export default App;

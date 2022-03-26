import React, {useState, useEffect} from 'react'
import LabstorEditor from './LabstorEditor'
import LabstorRow from './LabstorRow'

function Labstor() {
const [initialList, setInitialList] = useState([])
const [isDel, setIsDel] = useState(false)
const [inEdit, setInEdit] = useState(
    {
        id: "",
        question_text: "",
        ao_1: "",
        ao_2: "",
        ao_3: "",
        ao_4: "",
        ao_5: "",
}
)


// get the initial database list
useEffect (() => {
fetch(`http://127.0.0.1:3000/quiz_questions/`)
.then(resp => resp.json())
.then((data)=>setInitialList(data))
}, [])

// get the record to edit
function handleClickEdit(e){
    fetch(`http://127.0.0.1:3000/quiz_questions/${e.target.id}`)
    .then(resp => resp.json())
    .then((data) => setInEdit(data))
}

// write the edits to the DB
function handleEditUpdate(recordId){
    const updates = {
        question_text: inEdit.question_text,
        ao_1: inEdit.ao_1,
        ao_2: inEdit.ao_2,
        ao_3: inEdit.ao_3,
        ao_4: inEdit.ao_4,
        ao_5: inEdit.ao_5,  
    }
    fetch(`http://127.0.0.1:3000/quiz_questions/` + recordId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })
    // .then(resp => resp.ok ? console.log("update ok") : console.log("error"))
    .then(response => response.json())
    .then(data => goFetch(data))
    
}
// manual refresh of our DB list
function goFetch() {
    fetch(`http://127.0.0.1:3000/quiz_questions/`)
    .then(resp => resp.json())
    .then((data)=>setInitialList(data))
}
// watch for save button click, and pass updated to record to db
function saveEdit(e){
    const recordId = e.target.value
    handleEditUpdate(recordId)
}
// handle the edits from the form and pass to state
function handleEditChange(e){
    const name = e.target.name;
    let value = e.target.value;
    setInEdit({
        ...inEdit,
        [name]: value
    })
}

const listStyle = {
    backgroundColor: '#4c956c',
    marginTop: "10",
    margin: "0 auto",
    padding: "0",
    textalign: "center"
}
const container = {
    display: "flex",
    flexDirection: "row",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    width: "100%"
}

const item = {
    // width: "5em",
    // display: "flex"
}


// console.log(inEdit)
  return (

    <div style={listStyle}>
        <button onClick={goFetch}>refresh</button>
        <h2>Labstor: Legend Database Editor</h2>

                <LabstorRow initialList={initialList} handleClickEdit={handleClickEdit} isDel={isDel} setIsDel={setIsDel} />
                <LabstorEditor inEdit={inEdit} saveEdit={saveEdit} handleEditChange={handleEditChange}/>
            
            
    </div>
  )
}

export default Labstor
import React, {useState, useEffect} from 'react'
import LabstorEditor from './LabstorEditor'
import LabstorRow from './LabstorRow'

function Labstor() {
const [initialList, setInitialList] = useState([])
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
    .then(resp => resp.json())
    .then(data => console.log("data-back" + data))

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
    padding: "10",
    textalign: "center",
    width: "80%",
}

const dbviewStyle = {
    width: "100%",
    backgroundColor: '#ffc9b9',
    // tableBorder: "black solid 2px"
}

// console.log(inEdit)
  return (

    <div>
        <h2>Labstor: Legend Database Editor</h2>
        <div style={dbviewStyle}>
        <table style={listStyle}>
            <thead>
                <tr >
                        <th>id:</th>
                        <th>question_text:</th>
                        <th>ao_1:</th>
                        <th>ao_2:</th>
                        <th>ao_3:</th>
                        <th>ao_4:</th>
                        <th>ao_5:</th>
                        <th></th>
                </tr>
            </thead>
            <tbody style={{border: "solid 2px black"}}>
                <LabstorRow initialList={initialList} handleClickEdit={handleClickEdit} />
            </tbody>
        </table>
        </div>
        <LabstorEditor inEdit={inEdit} saveEdit={saveEdit} handleEditChange={handleEditChange}/>
    </div>
  )
}

export default Labstor
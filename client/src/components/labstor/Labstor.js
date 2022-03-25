import React, {useState, useEffect} from 'react'
import Labstor_editor from './Labstor_editor'
import Labstor_row from './Labstor_row'

function Labstor() {
const [initialList, setInitialList] = useState([])
const [inEdit, setInEdit] = useState([])

// get the initial database list
useEffect (() => {
fetch(`http://127.0.0.1:3000/quiz_questions/`)
.then(resp => resp.json())
.then((data)=>setInitialList(data))
}, [])

function saveEdit(e){
    console.log(e)
}

function handleClickEdit(e){
    // console.log(e.target)
    // console.log(e.target.id)
    fetch(`http://127.0.0.1/quiz_questions/${e.target.name}`)
    .then(resp => resp.json())
    .then((data) => setInEdit(data))
    
}

console.log(inEdit)
  return (

    <div>
        <h2>Labstor: Legend Database Editor</h2>
        <table>
            <thead>
                <tr>
                        <th>id:</th>
                        <th>question_text:</th>
                        <th>ao_1:</th>
                        <th>ao_2:</th>
                        <th>ao_3:</th>
                        <th>ao_4:</th>
                        <th>ao_5:</th>
                </tr>
            </thead>
            <tbody>
                <Labstor_row initialList={initialList} handleClickEdit={handleClickEdit} />
            </tbody>
        </table>
        <Labstor_editor inEdit={inEdit} saveEdit={saveEdit}/>
    </div>
  )
}

export default Labstor
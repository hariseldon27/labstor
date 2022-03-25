import React, {useState, useEffect} from 'react'
import Labstor_editor from './Labstor_editor'

function Labstor() {
const [inEdit, setInEdit] = useState([])

const BASE_DB_URL = 'http://127.0.0.1:3000'

useEffect (() => {
fetch(`http://127.0.0.1:3000/quiz_questions/`)
.then(resp => resp.json())
.then((data)=>setInEdit(data))
}, [])

function handleEditChange(e){
    const name = e.target.name;
    let value = e.target.value;
    setInEdit({
        ...inEdit,
        [name]: value,
      });
    
}

// console.log(inEdit)
  return (

    <div>
        <h2>Labstor: Legend Database Editor</h2>
        <Labstor_editor inEdit={inEdit} handleEditChange={handleEditChange} />
    </div>
  )
}

export default Labstor
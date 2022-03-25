import React from 'react'
import Labstor_row from './Labstor_row'

function Labstor_editor( { inEdit, saveEdit } ) {
    console.log(inEdit)

    function handleSaveEdit(e){
        saveEdit(e)
    }
    function handleEditChange(e) {
        console.log(e.target.value)
    }

    const editorStyle = {
        backgroundColor: '#789',
        marginTop: 10,
        padding: 10
        
    }

    return (
    <div id={inEdit.id} style={editorStyle}>
        ID: {inEdit.id}
        <input type="text" value={inEdit.question_text} name="question_text" onChange={handleEditChange}></input>
        <input type="text" value={inEdit.ao_1} name="ao_1" onChange={handleEditChange}></input>
        <input type="text" value={inEdit.ao_2} name="ao_2" onChange={handleEditChange}></input>
        <input type="text" value={inEdit.ao_3} name="ao_3" onChange={handleEditChange}></input>
        <input type="text" value={inEdit.ao_4} name="ao_4" onChange={handleEditChange}></input>
        <input type="text" value={inEdit.ao_5} name="ao_5" onChange={handleEditChange}></input>
        <button value={inEdit.id} onClick={handleSaveEdit}>Save Edit</button>
    </div>
    )
}

export default Labstor_editor 
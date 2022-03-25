import React from 'react'

function LabstorEditor( { inEdit, saveEdit, handleEditChange } ) {

    function handleSaveEdit(e){
        saveEdit(e)
    }
    function handleEdit(e) {
        handleEditChange(e)
    }

    const editorStyle = {
        backgroundColor: '#fefee3',
        marginTop: 10,
        padding: 10
    }
// console.log(inEdit)
    return (
    <div id={inEdit.id} style={editorStyle}>
        ID: {inEdit.id}
        <input key="question_text" type="text" value={inEdit.question_text} name="question_text" onChange={handleEditChange}></input>
        <input key="ao_2" type="text" placeholder={inEdit.ao_1} value={inEdit.ao_1} name="ao_1" onChange={handleEdit}></input>
        <input key="ao_3" type="text" value={inEdit.ao_2} name="ao_2" onChange={handleEdit}></input>
        <input key="ao_4" type="text" value={inEdit.ao_3} name="ao_3" onChange={handleEdit}></input>
        <input key="ao_5" type="text" value={inEdit.ao_4} name="ao_4" onChange={handleEdit}></input>
        <input key="ao_6" type="text" value={inEdit.ao_5} name="ao_5" onChange={handleEdit}></input>
        <button value={inEdit.id} onClick={handleSaveEdit}>Save Edit</button>
    </div>
    )
}

export default LabstorEditor 
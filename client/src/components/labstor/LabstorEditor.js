import React, { useState } from 'react'

function LabstorEditor( { inEdit, saveEdit, handleEditChange } ) {
    const newRecord = {
        id: "new",
        question_text: "",
        ao_1: "",
        ao_2: "",
        ao_3: "",
        ao_4: "",
        ao_5: ""
}
    function handleSaveEdit(e){
        saveEdit(e)
    }
    function handleNewEdit(e){
        
    }
    function handleEdit(e) {
        handleEditChange(e)
    }

    const container = {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        margin: "10px 0 0px 10px"
    }
    const inputStyle = {
       backgroundColor: "#fefee3",
       border: "0px solid #4c956c",
       padding: "5px",
       color: "black",
       width: "60%",
       margin: "5px 10px 5px 10px",
       rows:"4",
        cols:"50",
        display: "flex",
        
    }

// console.log(inEdit)
    return (
        <div style={{border:"1px solid #fefee3", margin: "10px 15px", padding: "5px"}}>
            <h3><strong>Editor</strong></h3>
            <div id={inEdit.id} style={container}>
                <div><strong>Question ID: </strong><span style={{backgroundColor: "#d68c45", padding:"3px"}}>{inEdit.id}</span></div>
            </div>
                
            <div style={container}>
                <div>
                    <label for="question_text_input">Question Text</label>
                    <textarea cols="50" rows="4" id="question_text_input" style={inputStyle} key="question_text" type="textarea" value={inEdit.question_text} name="question_text" onChange={handleEditChange}></textarea>
                </div>
                <div>
                    <label for="ao_1">Answ Opt 1</label>
                    <textarea style={inputStyle} id="ao_1" key="ao_1" value={inEdit.ao_1} name="ao_1" onChange={handleEdit}></textarea>
                </div>
                <div>
                    <label for="ao_2">Answ Opt 2</label>
                    <textarea style={inputStyle} id="ao_2" key="ao_2" type="textarea" value={inEdit.ao_2} name="ao_2" onChange={handleEdit}></textarea>
                </div>
                <div>
                    <label for="ao_3">Answ Opt 3</label>
                    <textarea style={inputStyle} id="ao_3" key="ao_3" type="textarea" value={inEdit.ao_3} name="ao_3" onChange={handleEdit}></textarea>
                </div>
                <div>
                    <label for="ao_4">Answ Opt 4</label>
                    <textarea style={inputStyle} id="ao_4" key="ao_4" type="textarea" value={inEdit.ao_4} name="ao_4" onChange={handleEdit}></textarea>
                </div>
                <div>
                    <label for="ao_5">Answ Opt 5</label>
                    <textarea style={inputStyle} id="ao_5" key="ao_5" type="textarea" value={inEdit.ao_5} name="ao_5" onChange={handleEdit}></textarea>
                </div>
                <div>
                    <button value={inEdit.id} id="save_button" onClick={handleSaveEdit}>Save Edit</button>
                    <button value={inEdit.id} id="new_button" onClick={handleNewEdit}>New Question</button>
                    
                </div>
            </div>
        </div>
    )
}

export default LabstorEditor 
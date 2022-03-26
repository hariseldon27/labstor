import React from 'react'

function LabstorEditor( { inEdit, saveEdit, handleEditChange } ) {

    function handleSaveEdit(e){
        saveEdit(e)
    }
    function handleEdit(e) {
        handleEditChange(e)
    }

    const container = {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
    }
    const inputStyle = {
       backgroundColor: "#fefee3",
       border: ".5px solid #4c956c",
       padding: "5px",
       color: "black",
       width: "60%",
       margin: "10px 15px 10px 15px",
       rows:"4",
        cols:"50",
        display: "flex",
        
    }

// console.log(inEdit)
    return (
        <div>
            <div id={inEdit.id} style={container}>
                <div style={{textAlign:"left"}}>Question ID: {inEdit.id}</div>
                <div><textarea cols="50" rows="4" style={inputStyle} key="question_text" type="textarea" value={inEdit.question_text} name="question_text" onChange={handleEditChange}></textarea></div>
            </div>
                
            <div style={container}>
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
                    <label for="save_button">Save</label>
                    <button value={inEdit.id} id="save_button" onClick={handleSaveEdit}>Save Edit</button>
                </div>
            </div>
        </div>
    )
}

export default LabstorEditor 
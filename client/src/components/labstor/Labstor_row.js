import React from 'react'

function Labstor_row( { row, handleEditChange } ) {
    // console.log(row)

    function onEditChange(e) {
        handleEditChange(e)
    }
    return <div>
    <div>ID: {row.id}</div>
    <input type="text" value={row.question_text} name="question_text" onChange={onEditChange}></input>
    <input type="text" value={row.ao_1} name="ao_1" onChange={onEditChange}></input>
    <input type="text" value={row.ao_2} name="ao_2" onChange={onEditChange}></input>
    <input type="text" value={row.ao_3} name="ao_3" onChange={onEditChange}></input>
    <input type="text" value={row.ao_4} name="ao_4" onChange={onEditChange}></input>
    <input type="text" value={row.ao_5} name="ao_5" onChange={onEditChange}></input>
    </div>

    // return row.map((cell) => {
    //     return <Labstor_row cell={cell}/>
    // })
}

export default Labstor_row
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function LabstorRow( { initialList, handleClickEdit } ) {
    // console.log(initialList)

    function onClickEdit(e) {
        // debugger
        // console.log(e.target.name)
        handleClickEdit(e)
    }
    return initialList.map((row) => {
        return ( 
            <tr key={uuidv4()} style={{backgroundColor: "#ffc9b9"}} >
                <td key={row.id}>{row.id}</td>
                <td key={row.question_text}><strong>{row.question_text}</strong></td>
                <td key={uuidv4()}>{row.ao_1}</td>
                <td key={uuidv4()}>{row.ao_2}</td>
                <td key={uuidv4()}>{row.ao_3}</td>
                <td key={uuidv4()}>{row.ao_4}</td>
                <td key={uuidv4()}>{row.ao_5}</td>
                <td key={uuidv4()}><button onClick={onClickEdit} id={row.id} name={row.id}>&#9998;</button></td>
            </tr>

        )
    })
}

export default LabstorRow
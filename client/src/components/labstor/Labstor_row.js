import React from 'react'

function Labstor_row( { initialList, handleClickEdit } ) {
    // console.log(initialList)

    function onClickEdit(e) {
        // debugger
        console.log(e.target.name)
        handleClickEdit(e)
    }
    return initialList.map((row) => {
        return ( 
            <tr>
                <td>{row.id}</td>
                <td>{row.question_text}</td>
                <td>{row.ao_1}</td>
                <td>{row.ao_2}</td>
                <td>{row.ao_3}</td>
                <td>{row.ao_4}</td>
                <td>{row.ao_5}</td>
                <button onClick={onClickEdit} name={row.id}>&#9998;</button>
            </tr>

        )
    })
}

export default Labstor_row
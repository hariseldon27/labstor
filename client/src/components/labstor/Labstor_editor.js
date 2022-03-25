import React from 'react'
import Labstor_row from './Labstor_row'

function Labstor_editor( { inEdit, handleEditChange } ) {
    console.log(inEdit)
    return inEdit.map((row) => {
        return <Labstor_row key={row.id} row={row} handleEditChange={handleEditChange}/>
    })
}

export default Labstor_editor 
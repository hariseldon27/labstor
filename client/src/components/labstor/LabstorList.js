import React, {  } from 'react'

import LabstorRow from './LabstorRow';

function LabstorList( { initialList, handleClickEdit, goFetch } ) {

    return (
        initialList.map((row) => (
        <>
            <LabstorRow key={`row${row.id}`} row={row} handleClickEdit={handleClickEdit} goFetch={goFetch} />
        </>
    )))
}
    


export default LabstorList
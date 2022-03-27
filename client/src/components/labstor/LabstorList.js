import React, { useState, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import LabstorOk from './LabstorOk'
import LabstorRow from './LabstorRow';

function LabstorList( { initialList, handleClickEdit } ) {

    return (
        initialList.map((row) => (
        <>
            <LabstorRow row={row} handleClickEdit={handleClickEdit} />
        </>
    )))
}
    


export default LabstorList
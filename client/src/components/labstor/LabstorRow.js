import React, { useState, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import LabstorOk from './LabstorOk'


function LabstorRow( { initialList, row, handleClickEdit} ) {
    const initialState = {isDel: false};
    const [state, dispatch] = useReducer(reducer, initialState);
        
        function reducer(state, action) {
            let newState
            switch (action.type) {
            case 'toggleIsDel':
                newState = { isDel: !state.isDel }
                break
            default:
                throw new Error();
            }
            return newState
        }

    function onClickEdit(e) {
        handleClickEdit(e)
    }

    function onToggleClick(e) {
        
        dispatch({type: 'toggleIsDel'})
    }

    function doDelete(){
        console.log("delete")
    }

    const itemAuto = {
        backgroundColor: "#ffc9b9",
        padding: "10px",
        position: "relative"
    }
    const itemWide = {
        backgroundColor: "#ffc9b9",
        flexGrow: ".5",
        padding: "10px",
        position: "relative",
        textAlign: "left"
    }

    const helper = {
        fontSize: "75%",
        position: "absolute",
        top: "-15px",
        left: "-5px",
        textTransform: "uppercase"
    }

    const container = {
        display: "flex",
        flexDirection: "row",
        flexFlow: "row nowrap",
        justifyContent: "space-around",
        columnGap: "20px",
        marginTop: "15px",

    }

    const containerColumn = {
        display: "flex",
        flexFlow: "column nowrap",
        padding: "20px",
        border: "white 1px solid",
        rowGap: "20px",
        margin: "10px 15px 10px 15px"
    }

        return ( 
        <div style={containerColumn}>
            <div key={uuidv4()} style={container} >
                <div style={itemAuto} key={uuidv4()}>
                    <strong>ID:</strong> {row.id}
                </div>
                <div style={itemWide} key={uuidv4()}>
                    <span style={helper}>Question Text</span>
                    <strong>{row.question_text}</strong>
                </div>
            </div>
            <div style={containerColumn}>
                <div style={itemAuto} key={uuidv4()}>
                    <span style={helper}>Answer 1</span>
                    {row.ao_1}
                </div>
                <div style={itemAuto} key={uuidv4()}>
                    <span style={helper}>Answer 2</span>
                    {row.ao_2}
                </div>
                <div style={itemAuto} key={uuidv4()}>
                    <span style={helper}>Answer 3</span>
                    {row.ao_3}
                </div>
                <div style={itemAuto} key={uuidv4()}>
                    <span style={helper}>Answer 4</span>
                    {row.ao_4}
                </div>
                <div style={itemAuto} key={uuidv4()}>
                    <span style={helper}>Answer 5</span>
                    {row.ao_5}
                </div>
                <div style={itemAuto} key={uuidv4()}>
                    <span style={helper}>edit...</span>
                    <button onClick={onClickEdit} id={row.id} name={row.id}>&#9998;</button>
                    {/* <button onClick={onClickOkay} id={row.id} name={row.id}>&#x1F5D1;</button> */}
                    <button onClick={onToggleClick}>Toggle IsDel</button>
                    { state.isDel ? <button onClick={doDelete} id={row.id} name={row.id}>&#x1F5D1; Click to Del Record #<strong>{row.id}</strong></button> : null } 
                    {/* <LabstorOk isDel={state.isDel} rowId={row.id}/> */}
                </div>
            </div>
        </div>

        )
    // })
}

export default LabstorRow
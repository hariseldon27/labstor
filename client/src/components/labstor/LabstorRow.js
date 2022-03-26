import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import LabstorOk from './LabstorOk'

function LabstorRow( { initialList, handleClickEdit, isDel, setIsDel } ) {
    

    function onClickEdit(e) {
        // debugger
        // console.log(e.target.name)
        handleClickEdit(e)
    }
    function onClickOkay(e){
        setIsDel(isDel => isDel = !isDel)
    }
    useEffect(() => {
        console.log(isDel)
    }, [isDel])
    
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

    return initialList.map((row) => {
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
                    <button onClick={onClickOkay} id={row.id} name={row.id}>&#x1F5D1;</button>
                    <LabstorOk isDel={isDel} rowId={row.id}/>
                </div>
            </div>
        </div>

        )
    })
}

export default LabstorRow
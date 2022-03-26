import React from 'react'

function LabstorOk( { isDel, rowId } ) {
    
    function doDelete(){
        console.log("delete")
    }
    
  return (
    <div>
        {isDel ? <button onClick={doDelete} id={rowId} name={rowId}>&#x1F5D1; are you sure?</button> : null}
    </div>
  )
}

export default LabstorOk
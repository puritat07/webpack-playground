import React from 'react'

const VisibilityFilter = (props) => {

    
    return (
        <div>
            Show: 
            <span 
                onClick={props.onFilter("SHOW_ALL")}
                style={{color:props.filter==="SHOW_ALL"?"blue":"black"}}
            >
                {" "}All
            </span> | 
            <span 
                onClick={props.onFilter("SHOW_ACTIVE")}
                style={{color:props.filter==="SHOW_ACTIVE"?"blue":"black"}}
            >
                {" "}Active
            </span> | 
            <span 
                onClick={props.onFilter("SHOW_COMPLETED")}
                style={{color:props.filter==="SHOW_COMPLETED"?"blue":"black"}}
            >
                {" "}Completed
            </span>
        </div>
    )
}

export default VisibilityFilter

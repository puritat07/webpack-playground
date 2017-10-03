import React from 'react';


const TodoListItem = (props) => {
    let lineStyle = props.value.completed?"line-through":""
    return (    
        <div 
            style={{
                width: "400px",
                borderBottom: "solid 1px"
            }}
        >
            <li>
                <div
                    onClick={props.onToggleVisibility(props)}
                    style={{
                        textDecoration: lineStyle,
                        display: "inline-block",
                    }}
                >
                    {props.value.text}
                </div>
                <div
                    style={{
                        display: "inline-block",
                        float: "right",
                        paddingRight: "10px",
                        color: "red"
                    }}
                    onClick={props.onDeleteClick(props)}
                >
                    &times;
                </div>
            </li>
        </div>
    )
}

export default TodoListItem
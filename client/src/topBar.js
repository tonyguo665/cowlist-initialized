import React from "react";

const TopBar = (props) => {

    return (
        <div className='topbar'>
            <h1>{props.cow_name}</h1>
            <p>{props.cow_description}</p>
        </div>
    )
}


export default TopBar;
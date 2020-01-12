import React from "react";

const CowPic = (props) => {


    return (
        <div className='picture'>
            <img className='showPic' src={props.cow_pic} alt='Picture of Cow DUH!'></img>
            <div className='description'>{props.cow_description}</div>
        </div>
    )
}


export default CowPic;
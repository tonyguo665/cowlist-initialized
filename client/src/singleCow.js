import React from "react";
import axios from 'axios';

const SingleCow = (props) => {

    const clickHandleCurrent = (event) =>{
        props.setCurrentCow(props.currentCow)
    };

    const clickHandleDelete = (event) =>{
        axios.delete('http://localhost:3000/cows',{data:{
            name: props.currentCow.cow_name,
            description: props.currentCow.cow_description,
            pic: props.currentCow.cow_pic
        }})
        .then(()=>{
            return axios.get('http://localhost:3000/cows')
        })
        .then((datas) =>{
            props.setCowList(datas.data)
        })
        .catch((err)=>{
            console.log('Error with deleting a cow')
        })
    }

    return (
        <div className='single-cow-entry'>
            <img className='list-pic' src={props.pic} alt='Picture of Cow MINI!' onClick={clickHandleCurrent}></img>
            <div className='list-name'>{props.name}</div>
            <button onClick={clickHandleDelete}>DELETE COW</button>
        </div>
    )
}


export default SingleCow;
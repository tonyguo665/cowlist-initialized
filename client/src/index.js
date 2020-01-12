import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import CowList from "./cowList";
import TopBar from "./topBar";
import CowPic from "./cowPic.js";
import axios from "axios"

const App = () => {

const [cowList, setCowList] = useState([]);
const [currentCow, setCurrentCow] = useState({});

useEffect(() =>{
  axios.get('http://localhost:3000/cows')
  .then((datas) =>{
    setCowList(datas.data);
  })
},[])

  return (
  <div className='container'>
    <TopBar cow_name={currentCow.cow_name} cow_description={currentCow.cow_description}/>
    <div className='innerContainer'>
    <CowPic cow_pic={currentCow.cow_pic} cow_description={currentCow.cow_description}/>
    <CowList totalCows={cowList} setCowList={setCowList} setCurrentCow={setCurrentCow}/>
    </div>
  </div>
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);
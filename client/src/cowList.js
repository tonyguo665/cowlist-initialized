import React, { useState } from "react";
import SingleCow from "./singleCow";
import axios from "axios";
import $ from 'jquery'

const CowList = props => {
  const [cowName, setCowName] = useState("");
  const [cowDescription, setCowDescription] = useState("");
  const [cowPicture, setCowPicture] = useState("");

  const clickbutton = event => {
      
    axios
      .post("http://localhost:3000/cows", {
        name: cowName,
        description: cowDescription,
        pic: cowPicture
      })
      .then(() => {
        return axios.get("http://localhost:3000/cows");
      })
      .then(datas => {
        props.setCowList(datas.data);
        $('input[type="text"]').val('')
      })
      .catch(err => {
        console.log("Error with making a new cow");
      });
  };

  return (
    <div className="list">
      {props.totalCows.map(cow => (
        <SingleCow
          key={cow.cow_name}
          name={cow.cow_name}
          pic={cow.cow_pic}
          setCowList={props.setCowList}
          setCurrentCow={props.setCurrentCow}
          currentCow={cow}
        />
      ))}
      Cow Name:
      <br />
      <input
        type="text"
        onChange={e => {
          setCowName(e.target.value);
        }}
      />
      <br />
      Cow Description:
      <br />
      <input
        type="text"
        onChange={e => {
          setCowDescription(e.target.value);
        }}
      />
      <br />
      Cow Pic URL:<br></br>
      <input
        type="text"
        onChange={e => {
          setCowPicture(e.target.value);
        }}
      />
      <br />
      <button onClick={clickbutton}>Submit</button>
    </div>
  );
};

export default CowList;

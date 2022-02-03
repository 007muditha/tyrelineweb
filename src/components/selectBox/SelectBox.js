import React, { useState, useEffect } from "react";
import "./SelectBox.css";

const SelectBox = () => {
  const [inputValue, setInoutValue] = useState("");
  const [selectableVal,setSelectables] = useState([]);
  const [showAll,setShowAll] = useState(false)
  const options = ["Michelin", "Contenental","GRI","Dunlop","Dunlop"];

  
useEffect(() =>{displaySelection()},[inputValue])
  
useEffect(() =>{displauAllOptions()},[showAll])



  const displaySelection = () => {
    const selectables = [];
    if(inputValue !== ""){
    options.forEach((option) => {
      if (option.toUpperCase().includes(inputValue.toUpperCase())) {
        selectables.push(option);
      }
    });
}
    setSelectables(selectables)
  };


  const showAllOptions = () => {
    setShowAll(showAll => !showAll)
    setInoutValue("")
  }


  const displauAllOptions = () => {
      if(showAll){
        setSelectables(options)
      }else{
        setSelectables([])
      }

  }



  return (
    <div className="selectBoxContainer" >
      <div className="selectInputcontainer">
      <input value={inputValue}  onChange={event => {setInoutValue(event.target.value)}} placeholder="Tyre Brand" />
      <button onClick={showAllOptions}>All</button>
      </div>
      <div className="selectOptionContainer">
      {selectableVal.map(a=> (
        <div className="selectOption">{a}</div>
      ))}
      </div>
    </div>
  );
};

export default SelectBox;

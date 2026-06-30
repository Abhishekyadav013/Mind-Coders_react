import React from "react";

const LocalStorage = () => {
  const Name = "Abhishek";
  localStorage.setItem("name", "Dhurandar"); // key value pair set sting value in local storage
  sessionStorage.setItem("Age", "67"); // set key value to sesion storage ( Temprory)

  // same key Update the values
  localStorage.setItem("Age", "25");
  localStorage.setItem("Age", 56);

  const Data = localStorage.getItem("name");
  console.log(Data);

  //localStorage.removeItem("name") // remove perticulure item // name: dhurandar

  // localStorage.clear()  // remove all data from local storage


  // Used data in local storage
  const User = {
    name : "Anurag solanki",
    id : 56
  }
localStorage.setItem("UserData", JSON.stringify(User)) // (JSON.stringfy(User)) convert object unredable data into redable data
const UserData = JSON.parse(localStorage.getItem("UserData"))
console.log(UserData)


  return (
    <div>
      <h1> Data </h1>
    </div>
  );
};
export default LocalStorage;

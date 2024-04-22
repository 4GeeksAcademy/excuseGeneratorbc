/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector("#La-excusa").innerHTML = randomNumber;
  console.log("hola");
};
let generateExcuse = () => {
  return "My dog eat my homework";
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#La-excusa").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let pron = ["My", "Your", "The"];
  let who = ["grandmother", "dog", "President", "Alien", "neighbor"];
  let act = [
    "burned down",
    "caused chaos on",
    "flooded",
    "ripped",
    "ate",
    "lost",
    "stole"
  ];
  let thin = [
    "my head",
    "my house",
    "my homework",
    "my country",
    "my family",
    "my phone"
  ];
  let how = [
    "dancing reggaeton",
    "while eating an ice cream",
    "accidentally",
    "in a fit of rage",
    "while sleepwalking"
  ];

  let pronind = Math.floor(Math.random() * pron.length);
  let whoind = Math.floor(Math.random() * who.length);
  let actind = Math.floor(Math.random() * act.length);
  let thinind = Math.floor(Math.random() * thin.length);
  let howind = Math.floor(Math.random() * how.length);
  return (
    pron[pronind] +
    " " +
    who[whoind] +
    " " +
    act[actind] +
    " " +
    thin[thinind] +
    " " +
    how[howind]
  );
};

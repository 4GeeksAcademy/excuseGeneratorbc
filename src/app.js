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
  let pronombre = ["My", "Your", "The"];
  let quien = ["grandmother", "dog", "President", "Alien", "neighbor"];
  let action = [
    "burned down",
    "caused chaos on",
    "flooded",
    "ripped",
    "ate",
    "lost",
    "stole"
  ];
  let que = [
    "my head",
    "my house",
    "my homework",
    "my country",
    "my family",
    "my phone"
  ];
  let como = [
    "dancing reggaeton",
    "while eating an ice cream",
    "accidentally",
    "in a fit of rage",
    "while sleepwalking"
  ];

  let pronombreRandom = Math.floor(Math.random() * pronombre.length);
  let quienRandom = Math.floor(Math.random() * quien.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let queRandom = Math.floor(Math.random() * que.length);
  let comoRandom = Math.floor(Math.random() * como.length);
  return (
    pronombre[pronombreRandom] +
    " " +
    quien[quienRandom] +
    " " +
    action[actionRandom] +
    " " +
    que[queRandom] +
    " " +
    como[comoRandom]
  );
};

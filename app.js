/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = domainGenerator();
  })
};


let pronoun = ['the', 'your']
let adj = ['great', 'big', 'awesome']
let color = ['red', 'blue', 'yellow']
let object = ['door', 'window', 'table']


const domainGenerator = (param1,param2) => {
    pronoun.forEach(item1 => {
        adj.forEach(item2 => {
            color.forEach(item3 => {
                object.forEach(item4 => {
                    console.log(`${item1}${item2}${item3}${item4}.com`);
                    return(item1+item2+item3+item4+".com")

                });
            });
        });
    });
}

domainGenerator()
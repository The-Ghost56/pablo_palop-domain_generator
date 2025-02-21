/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () => {
        document.querySelector("#excuse").innerHTML = domainGenerator();
    })
};


const pronoun = ['the', 'your']
const adj = ['great', 'big', 'awesome']
const color = ['red', 'blue', 'yellow']
const object = ['door', 'window', 'table']


const domainGenerator = () => {
    pronoun.forEach(item1 => {
        adj.forEach(item2 => {
            color.forEach(item3 => {
                object.forEach(item4 => {
                    console.log(`${item1}${item2}${item3}${item4}.com`);
                    return (item1 + item2 + item3 + item4 + ".com")

                });
            });
        });
    });
}

domainGenerator()
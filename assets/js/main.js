/*
 * @Author: Collin Blatt
 * @Date: 2020-12-09 21:50:41 
 * @Last Modified by: collinblatt
 * @Last Modified time: 2020-12-30 14:41:48
 */

let url = window.location.href;

//insert and modify header and footer
document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", `<div id="top"></div><header><div class="title"><img src="./assets/img/spectre-v5.svg" width="50" height="50"><br><h1><a href="` + url + `">SPECTRE</a></h1></div></header>`);
document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", `<footer><div  class="copyright"><a href="` + url + `">JAMES BOND IS THE PROPERTY OF IAN FLEMING PUBLICATIONS, ET AL.&mdash;WITH WHICH WE HAVE NO AFFILIATION. ALL RIGHTS RESERVED BY THEIR RESPECTIVE OWNERS.</a></div></footer>`);


window.addEventListener("load", () =>
  [...document.querySelectorAll("a[target=_blank]")]
    .forEach(lnk => lnk.setAttribute("rel", "noopener noreferrer"))
);

function toTop() {
  navigator.vibrate([5,5]);
};

function navVib() {
  navigator.vibrate([25]);
};

if (window.location.href.indexOf("?ref=blt") != -1) {
  console.log("%cyo! you know blt.gg? wut a legend", "color: lime; font-family: 'Castellar', serif; font-size: 32px");
};

document.querySelector('.barcode').insertAdjacentHTML('afterbegin', '*');
document.querySelector('.barcode').insertAdjacentHTML('beforeend', '*');
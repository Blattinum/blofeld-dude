let url = window.location.href;

let newDate = new Date();
let year = newDate.getFullYear();

//insert and modify header and footer
document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", `<header><div class="title"><h1><a href="` + url + `"><img src="./assets/img/spectre-v4.svg" width="60" height="60"><br>SPECTRE</a></h1></div></header>`);
document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", `<footer><div  class="copyright"><a href="` + url + `">JAMES BOND IS THE PROPERTY OF IAN FLEMING PUBLICATIONS, WITH WHICH WE HAVE NO AFFILIATION. ALL RIGHTS RESERVED BY THEIR RESPECTIVE OWNERS.</a></div></footer>`);
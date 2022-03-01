

 //console.dir(document);
 //console.log(document.domain);
 //console.log(document.URL);
 //console.log(document.title);

 //console.log(document.doctype);
 //console.log(document.head);
 //console.log(document.body);
 //console.log(document.all);
 //console.log(document.all[10]);

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// using selectors (GETELEMENTBYID)
// console.log(document.getElementById("main-header"));
 //var header = document.getElementById('main-header');
 //console.log(headerTitle);
 //headerTitle.textContent = "Hello";
//headerTitle.innerText = 'Here is the full list';
 //console.log(headerTitle.innerText);
 //headerTitle.innerHTML = "<h3>hello</h3>";
// header.style.borderBottom = "solid 4px #000";

//GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName("list-group-item");
console.log(items);
items[1].textContent = "Hello2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

//to give all the items a background color we can do looping

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = "yellow";
    items[i].style.fontWeight = "bold";
}




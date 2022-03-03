

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
//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[1]);
//items[3].textContent = "Hello2";
//items[3].style.fontWeight = "bold";
//items[3].style.backgroundColor = "green";

//to give all the items a background color we can do looping

//for(var i=0; i<items.length; i++){
  //  items[i].style.backgroundColor = "green";
  //  items[i].style.fontWeight = "bold";
//}


//GETELEMENTSBYTAGNAME
//var li = document.getElementsByTagName("li");
//console.log(li);
//console.log(li[1]);
//li[3].textContent = "Hello2";
//li[3].style.fontWeight = "bold";
//li[3].style.backgroundColor = "green";

//for(var i=0; i<li.length; i++){
  //  li[i].style.backgroundColor = "pink";
    //li[i].style.fontWeight = "bold";
//}

//QUERYSELECTOR

//var secondItem = document.querySelector('.list-group-item:nth-child(2');
//secondItem.style.backgroundColor = "green";

//var thirdItem = document.querySelector('.list-group-item:nth-child(3');
//thirdItem.style.visibility = "hidden";


//QUERYSELECTORALL
//var secondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
//secondItem.style.color = 'green';

//var odd = document.querySelectorAll('li:nth-child (odd)');

//for(var i=0; i<odd.length; i++){
  //  odd[i].style.backgroundColor='green';
//}

//TRAVERSING THE DOM
var itemList = document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor= 'pink'; 
console.log(itemList.parentNode.parentNode.parentNode); 

//parentElement
 var itemList = document.querySelector('#items');

 console.log(itemList.parentElement);
 itemList.parentElement.style.background = 'yellow';

 //children[2]
 var itemList = document.querySelector('#items');

 console.log(itemList.children[2]);
 itemList.children[2].style.backgroundColor = 'pink';
  

 //firstChild
 var itemList = document.querySelector('#items');
 console.log(itemList.firstChild);

 //firstElementChild
var itemList = document.querySelector('#items');
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.style.backgroundColor = 'pink';

 //lastChild
 var itemList = document.querySelector('#items');
 console.log(itemList.lastChild);

 //lastElementChild
 var itemList = document.querySelector('#items');
 console.log(itemList.lastElementChild);
 itemList.lastElementChild.style.backgroundColor = 'pink';

 //nextSibling
 var itemList = document.querySelector('#items');
 console.log(itemList.nextSibling);

 //nextElementSibling
 var itemList = document.querySelector('#items');
 console.log(itemList.nextElementSibling);

 //previousSibling

 var itemList = document.querySelector('#items');
 console.log(itemList.previousSibling);

 //previousElementSibling
 var itemList = document.querySelector('#items');
 console.log(itemList.previousElementSibling);

 //CREATING NEW ELEMENTS IN DOM
 //Create a new div 
 var newDiv = document.createElement('div');

 newDiv.className = 'Hello';
 newDiv.id = 'Hello 1';
 newDiv.setAttribute('title', 'Hello Div');

 var newDivText = document.createTextNode('HEllo');
 newDiv.appendChild(newDivText);

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');

 console.log(newDiv);
 container.insertBefore(newDiv, h1);

//creating another new element

 var newDiv2 = document.createElement('div');

 newDiv2.className = 'Hello2';
 newDiv2.id = 'Hello 22';
 newDiv2.setAttribute('title', 'Hello Div');

var newDivText2 = document.createTextNode('HEllo');
 newDiv2.appendChild(newDivText2);
  
 var container2 = document.querySelector('ul .list-group-item');
 var li1 = document.querySelector('ul li1');



 console.log(newDiv2);
 container2.insertBefore(newDiv2, li1);
 






 









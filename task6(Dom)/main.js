console.log('Examine The document');
console.log(document.URL);
console.log(document.domaine);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all); //return all element in document as an array
console.log(document.all[10]);
console.log(document.doctype);
console.log(document.forms);
console.log(document.links);
console.log('\n \n');

////////////////
console.log("Diferrance between innerText and textContent");
var headerTitle =document.getElementById('header-title');
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
console.log(" الفرق ان تكست كونتنت بتجيب اي كلام داخل التاج بتاعك سواء كان معمله استايل انه مخفي ولا ال اما بالنسبه للالنر فهيا بتاخر في الاعتبار الاستيل");
/////////////////

console.log('popular tool to change in variable');
headerTitle.innerHTML='<span>yess</span>';
headerTitle.style.color ='#123456'


// //////////////////
console.log('Selector ById , ByClassName , ByTagName and QuarySelector ');
var items = document.getElementsByClassName('list-group-item');
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor='#12'+i+'456';
}


var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
  li[i].style.color='#000';
}

// ///////////////////////
//css بترجع اول عنصر بس لو انته عاوز اي عنصر اخر بتجيبه باستخدام
console.log("QuarySelector \n بيتيح لك انك تستخدم كلاس أدي او تاجوكمان تقدر تاكسس سثث");
var header = document.querySelector('#header-title');
header.textContent='moustafa';

var list = document.querySelector('.list-group-item');
var secList =document.querySelector('.list-group-item:nth-child(even)');
secList.textContent='mmmm';

var secList =document.querySelector('.list-group-item:last-child');
secList.textContent='momomo'

// ///////////////////////////////
console.log('querySelectorAll \n' +' نفس عمل التجنيم و الكلاسنيم');
var title =document.querySelectorAll('.title');
console.log(title[0]);

// ///////////////////////////////
console.log('parentNode are the same as parentElement');
var itms =document.querySelector('#items');
console.log(itms.parentNode.parentNode.parentElement);


/////////////////////////
console.log('childNodes and childern');
console.log('childern better than childNodes');
console.log('firstElementNode better than firstChild'); // لانها بتحسب المسافات علي انها عناصر
console.log('lastElementNode better than lastChild');
console.log('nextElementSibling better than nextSibling');
console.log('previousElementSibling better than previousSibling');

// ///////////////////
console.log('Create Elemnet');
var ele =document.createElement('div');
ele.class='ele';
ele.id='mm';
ele.setAttribute('title','mmg');
console.log(ele);
var txt =document.createTextNode('hhhh');
ele.appendChild(txt);
container =document.querySelector('header .container');
var h =document.querySelector('header h1');
container.insertBefore(ele,h)

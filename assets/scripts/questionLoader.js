// COOKIES!!! :D Yum!
function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for(let i = 0; i <ca.length; i++) {
     let c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
}

// Set Question
var url = "/api/questions/questions.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

//var ansID = rando(1,22);
var maxQs = 25;
var ansID = getCookie("qid").toString();

if (ansID > maxQs) {
   location.replace("/finish")
}

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
        var jsonObj = $.parseJSON('[' + xhr.responseText+ ']');
        var txt = jsonObj[0]['questions'][ansID]['text']

        var q = document.getElementById('q');
        var qid = document.getElementById('qid');

        q.innerHTML = '<h1>' + txt + '</h1>';
        qid.nodeValue = ansID.toString();
        document.getElementById('qid').value = ansID.toString();
   }};

xhr.send();

// Set Answers
var x = new XMLHttpRequest();
x.open("GET", url);

x.onreadystatechange = function () {
   if (x.readyState === 4) {
        var jsonObj = $.parseJSON('[' + x.responseText+ ']');
        var type = jsonObj[0]['questions'][ansID]['type']

        var form = document.getElementById('ansForm');

      if (type['type'] == 'choice') {
         for (var i = 0; i < type['choices'].length; i++) {
            var input = document.createElement('input');
            input.setAttribute('type', 'submit');
            input.setAttribute('name', 'answer');
            input.setAttribute('class', 'bttn');
            input.setAttribute('value', type['choices'][i]);
            form.appendChild(input);
         }
      } else if (type['type'] == 'scale') {
         var min = parseInt(type['min']);
         var max = parseInt(type['max']);

         for (var i = min; i <= max; i++) {
            var input = document.createElement('input');
            input.setAttribute('type', 'submit');
            input.setAttribute('name', 'answer');
            input.setAttribute('class', 'bttn');
            input.setAttribute('value', i.toString());
            form.appendChild(input);
         }
      } else {
            var input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'answer');
            input.setAttribute('class', 'bttn');
            form.appendChild(input);

            var input = document.createElement('input');
            input.setAttribute('type', 'submit');
            input.setAttribute('name', 'answer');
            input.setAttribute('class', 'bttn');
            input.setAttribute('value', 'Submit');
            form.appendChild(input);
        }
   }};

x.send();

var qid = parseInt( ansID ) + 1
document.cookie = "qid=" + qid.toString();

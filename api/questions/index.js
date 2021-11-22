var url = "/api/questions/questions.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      var jsonObj = $.parseJSON('[' + xhr.responseText+ ']');
      document.write(jsonObj[0]['questions'][rando(0,3)]['text']);
   }};

xhr.send();

var url = "/api/questions/questions.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
        var ansID = rando(0,3);

        var jsonObj = $.parseJSON('[' + xhr.responseText+ ']');
        var txt = jsonObj[0]['questions'][ansID]['text']

        var q = document.getElementById('q');
        var qid = document.getElementById('qid');

        q.innerHTML = '<h1>' + txt + '</h1>';
        qid.nodeValue = ansID.toString();
        document.getElementById('qid').value = ansID.toString();
   }};

xhr.send();

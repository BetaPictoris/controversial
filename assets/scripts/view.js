var url = "https://xuqylkfqoawvbctdxqvf.supabase.co/rest/v1/submissions";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzU0NDM3NCwiZXhwIjoxOTUzMTIwMzc0fQ.47VCMNsHGxlgR2WgeC2w5BFD_WbiZk3KWSg_PsBfrPc");
xhr.setRequestHeader("Authorization", "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzU0NDM3NCwiZXhwIjoxOTUzMTIwMzc0fQ.47VCMNsHGxlgR2WgeC2w5BFD_WbiZk3KWSg_PsBfrPc, Au");

// Sample datapoint: { qID: 2, ans: [ {"Name": "Cats", "Value": 2}, {"Name": "Dogs", "Value": 0}  ] }
var data = [
    { qID: 2, ans: [ {"Name": "Cats", "Value": 2}, {"Name": "Dogs", "Value": 0}  ] }
];

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      jsonObj = $.parseJSON(xhr.responseText);
      for (i in jsonObj) { 
            var foundQ = false;
            for (x in window.data) {
                if ( window.data[x]["qID"] == jsonObj[i]["QuestionID"]) {
                    foundQ = true;

                    console.log("Found Q");
                }

                if (foundQ == false) {
                    window.data.push({qID: jsonObj[i]["QuestionID"], ans: {"Name": jsonObj[i]["ans"], "Value": 1}})
                }
                
            }

            if (foundQ == false) {
                //window.data.push({ label: jsonObj[i]["ans"], y: 1});
            }
      }

      console.log(data)
   }};

xhr.send();

var url = "https://xuqylkfqoawvbctdxqvf.supabase.co/rest/v1/submissions";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzU0NDM3NCwiZXhwIjoxOTUzMTIwMzc0fQ.47VCMNsHGxlgR2WgeC2w5BFD_WbiZk3KWSg_PsBfrPc");
xhr.setRequestHeader("Authorization", "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzU0NDM3NCwiZXhwIjoxOTUzMTIwMzc0fQ.47VCMNsHGxlgR2WgeC2w5BFD_WbiZk3KWSg_PsBfrPc, Au");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      document.write(xhr.responseText.toString());
   }};

xhr.send();

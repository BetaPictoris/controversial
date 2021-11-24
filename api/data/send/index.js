var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var qID = getUrlParameter('qid');
var ans = getUrlParameter('answer');

/*
alert(
    'qID: ' + qID + '\n' + "ans: " + ans
)
*/

// TODO: Upload answer to supabase
var SUPABASE_URL = 'https://xuqylkfqoawvbctdxqvf.supabase.co/'
var SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzU0NDM3NCwiZXhwIjoxOTUzMTIwMzc0fQ.47VCMNsHGxlgR2WgeC2w5BFD_WbiZk3KWSg_PsBfrPc'

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

async function main() {
    const { data, error } = await supabase
        .from('submissions')
        .insert([
            { QuestionID: qID.toString(), ans: ans.toString() },
        ])
}

main();

location.href = "/app"
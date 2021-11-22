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

location.href = "/app"
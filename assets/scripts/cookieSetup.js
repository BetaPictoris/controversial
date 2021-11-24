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

console.log(getUrlParameter("reset"))

if (document.cookie && getUrlParameter("reset") != "1") {
    console.log("Cookies are already setup!");
} else {
    console.log("Cookie setup is starting...");

    document.cookie = "qid=1";
}
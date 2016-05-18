/**
 *
 * Created by Edgar S. Hurtado on 27/04/16.
 */


var jsonUtils = {
    jsonRequest: function(url, cb) {
        var oReq = new XMLHttpRequest();

        function reqListener() {
            var jsonObject = JSON.parse(this.responseText);
            cb(jsonObject);
        }

        oReq.open("GET", url);
        oReq.send();

        oReq.addEventListener("load", reqListener);
        oReq.addEventListener("error", function() {
            alert("Server currently unavailable")
        });
    }
}

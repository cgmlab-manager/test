function URLQueryParameter() {
    var url = location.href;
    var result = {};
    if (url.indexOf("?") !== -1) {
        var parameter = url.split("?")[1].split("&");
        for (var i = 0; i < parameter.length; i++) {
            var nameValue = parameter[i].split("=");
            result[nameValue[0]] = decodeURIComponent(nameValue[1]);
        }
    }
    this.get = function (name) {
        return result[name];
    };
}
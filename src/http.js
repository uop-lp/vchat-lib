define(function() {
    return {
        call: function(url, opts, onload, error) { //todo: headers, default options, etc...
            opts = opts || {};
            var req = new XMLHttpRequest();
            req.onload = onload;
            var method = opts.method || 'get';
            var params = opts.params;


            if(params) {
                var query = "";
                for(var key in params) {
                    if(params.hasOwnProperty(key)) {
                        var value = params[key];
                        query += "&" + encodeURIComponent(key) +"="+ encodeURIComponent(value);
                    }
                }
                if(url.indexOf("?") === -1 && query.length > 0) {
                    query = "?"+query.substring(1);
                }
            }


            req.open(method, url+query, true);
            req.send();
            return req;
        }
    };
});

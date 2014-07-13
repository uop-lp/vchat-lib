define(["tiny-emitter", "reqwest"], function (Emitter, reqwest) {

    function Hateoas(endpoint) {
        if (this === window) {
            return new Hateoas(endpoint);
        }
        Emitter.call(this);

        if (endpoint[endpoint.length - 1] === "/") {
            endpoint = endpoint.substring(0, endpoint.length - 1);
        }

        function based(path) {
            if (path[0] !== "/") {
                path = "/" + path;
            }
            return endpoint + path;
        }

        this.api = reqwest({
            url: based("/"),
            type: "json"
        }).then(function (results) {
                var ret = {};

                return ret;
            });

    }

    Hateoas.prototype = new Emitter();

    return Hateoas;
});

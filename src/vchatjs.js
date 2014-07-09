define([
    'hateoas'
], function (Hateoas) {

    // Object Contructor
    var vchatjs = function (endpoint) {
        //endpoint = endpoint || "https://vchat.labsperson.com/";
        endpoint = endpoint || "https://lpvchat.apiary-mock.com/";
        Hateoas.call(this, endpoint);

    };
    vchatjs.prototype = new Hateoas();

    // Properties
    vchatjs.VERSION = '1.0.0';

    return vchatjs;
});

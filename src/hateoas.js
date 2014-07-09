define(["tiny-emitter","http"],function(Emitter, http) {

    function Hateoas(endpoint) {
        if(this === window) {
            return new Hateoas(endpoint);
        }
        Emitter.call(this);


    }
    Hateoas.prototype = new Emitter();

    return Hateoas;
});

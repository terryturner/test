/*
    Content-Type: text/javascript
    */
(function () {
    console.log('test.js');

    var ajs = function addJS() {
        console.log('addJS already called!');
        tcavTrnsTarget.placeOrder();
    }

    return {
        test: ajs
    }
})();

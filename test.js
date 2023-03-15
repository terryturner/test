(function () {

    function addJS() {
        console.log('addJS already called!');
        tcavTrnsTarget.placeOrder();
    }

    addJS();
    console.log('test.js');
    tcavTrnsTarget.placeOrder();
})();

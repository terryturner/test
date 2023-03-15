(function () {

    function addJS() {
        console.log('addJS already called!');
        tcavTrnsTarget.placeOrder();
    }

    addJS();
    console.log('test.js');
    tcavTrnsTarget.placeOrder();
    
    if (typeof (window as any).myCallbackFunction === 'function') {
      console.log('js trigger myCallbackFunction');
      (window as any).myCallbackFunction();
    }
})();

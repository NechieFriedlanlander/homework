(function () {
    'use strict';
// q1
    const acount1 = {
        balance: 0,
        preformTransaction: function (amount) {
            this.balance += amount;
        }
    };

    const acount2 = {
        balance: 0,
        preformTransaction: function (amount) {
            this.balance += amount;
        }
    };
 
    acount1.preformTransaction(50);
    acount2.preformTransaction(-50);

    console.log('acount1.balance',acount1.balance);
    console.log('acount2.balance',acount2.balance);

    //q2
    const acount3 = {
        balance: 0,
    };

    const acount4 = {
        balance: 0,
        
    };

    function preformTransaction2 (amount) {
       this.balance += amount;
    }
     preformTransaction2.apply(acount3,[50]);
     preformTransaction2.call(acount4, -50);

    console.log('acount3.balance',acount3.balance);
    console.log('acount4.balance',acount4.balance);
})();
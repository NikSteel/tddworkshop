
var vendingMachine = {
    creditTotal: 0,
    rejectTotal: 0,
    displayMsg: 'INSERT COIN'
};

vendingMachine.acceptCoin = function(weight) {
    switch(weight) {
        case 1:
            this.creditTotal += 0.05;
            this.displayMsg = 'credit = $' + this.creditTotal ;
            break;
        case 2:
            this.creditTotal += 0.10;
            this.displayMsg ='credit = $' + this.creditTotal ;
            break;
        case 3:
            this.creditTotal += 0.25;
            this.displayMsg = 'credit = $' + this.creditTotal;
            break;
        case 0.5:
            this.rejectTotal += 0.01;
            this.displayMsg = 'rejected = $' + this.rejectTotal;
            break;
        default:
            this.displayMsg = 'INSERT COIN';
    }
};

vendingMachine.selectProduct = function() {

};





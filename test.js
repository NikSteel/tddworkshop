/*
describe('assert', function() {
  it('works!', function(){
    assert.equal(true, true);
  });
});

describe('expect', function() {
  it('works!', function(){
    expect(true).to.be.true;
  });
});

describe('should', function() {
  it('works!', function(){
    true.should.equal(true);
  });
});
*/



describe('vendingMachine', function() {

  it('should have a credit total', function() {
    vendingMachine.creditTotal.should.be.at.least(0);
  });

  it('should have a reject total', function() {
    vendingMachine.rejectTotal.should.be.at.least(0);
  });

  it('should have an acceptCoin method', function() {
    vendingMachine.should.have.property('acceptCoin');
  });

  it('should have a selectProduct method', function() {
    vendingMachine.should.have.property('selectProduct');
  });

  it('should have a displayMsg variable', function() {
    vendingMachine.should.have.property('displayMsg');
  });
});

describe('vendingMachine.acceptCoin', function() {

  it('should not modify creditTotal or rejectTotal for invalid input, displayMsg should remain INSERT COIN', function() {
    var cred = vendingMachine.creditTotal;
    var reject = vendingMachine.rejectTotal;
    vendingMachine.acceptCoin(undefined);
    vendingMachine.creditTotal.should.equal(cred);
    vendingMachine.rejectTotal.should.equal(reject);
    vendingMachine.displayMsg.should.equal('INSERT COIN');
  });

  it('should add 0.01 to rejectTotal for input of 0.5', function(){
    var beforeRejected = vendingMachine.rejectTotal;
    vendingMachine.acceptCoin(0.5);
    vendingMachine.rejectTotal.should.equal(beforeRejected + 0.01);
  });

  it('should add 0.05 to creditTotal for input of 1', function(){
    var beforeCredit = vendingMachine.creditTotal;
    vendingMachine.acceptCoin(1);
    vendingMachine.creditTotal.should.equal(beforeCredit + 0.05);
  });

  it('should add 0.10 to creditTotal for input of 2', function(){
    var beforeCredit = vendingMachine.creditTotal;
    vendingMachine.acceptCoin(2);
    vendingMachine.creditTotal.should.equal(beforeCredit + 0.10);
  });

  it('should add 0.25 to creditTotal for input of 3', function(){
    var beforeCredit = vendingMachine.creditTotal;
    vendingMachine.acceptCoin(3);
    vendingMachine.creditTotal.should.equal(beforeCredit + 0.25);
  });

});

describe('vendingMachine.selectProduct', function() {
  it('should vend chips if affordable', function() {
    var credTot = vendingMachine.creditTotal;
    var spyOnSomething = sinon.spy(vendingMachine.selectProduct);
    vendingMachine.selectProduct('chips');
    if (credTot >= 0.50) {
      vendingMachine.displayMsg.should.equal('Thank you.');
      assert(spyOnSomething.calledOnce(vendingMachine.makeChange);
    }

  });
});






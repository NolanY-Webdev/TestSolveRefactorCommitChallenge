var expect = chai.expect;

describe('challenge', function() {
  it('should be a function', function() {
    expect(challenge).to.be.a('function');
  });
  it('should return 1 with the argument 1', function() {
    expect(challenge(1)).to.equal(1);
  });
  it('should return the sum of numbers', function() {
    expect(challenge(1)).to.equal(1);
    expect(challenge(2)).to.equal(2.414213562373095);
    expect(challenge(3)).to.equal(4.146264369941973);
    expect(challenge(4)).to.equal(6.146264369941973);
    expect(challenge(5)).to.equal(8.382332347441762);
  });
  it('should work for bigass numbers that you would never use in real life', function() {
    expect(challenge(80278023)).to.equal(479516712250.1759);
  })
});
const value1 = "passwort";
const value2 = "passwort";
const value3 = [{hauptziel: "aufbauen", erledigt: 1, unterziele: [{name: "laufen", erledigt:1}, {name: "schwimmmen", erledigt: 1}]}];

QUnit.module('getAlter', function() {
    QUnit.test('should get the age', function(assert) {
    assert.equal(getAlter(),21,"Is passing the test when result is 21");
  });
});

QUnit.module('checkPasswort', function() {
    QUnit.test('should check if passwords are the same', function(assert) {
    assert.equal(checkPasswort(value1, value2),value1,"Is passing the test when passwords are the same");
  });
});

QUnit.module('checkFortschritt', function() {
  QUnit.test('should check if passwords are the same', function(assert) {
  assert.equal(checkFortschritt(value3),100,"Is passing the test when progress value is correct");
});
});
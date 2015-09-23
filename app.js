function challenge(n) {
  var end = 0;
  for (var i = 1; i <= n; i++) {
    end += Math.sqrt(i)
  }
  return end;
}
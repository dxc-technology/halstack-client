export function applyErrorConditions(possibleErrors = []) {
  return possibleErrors.filter(error => error.if).map(error => error.error);
}

export function test() {
  return null;
}

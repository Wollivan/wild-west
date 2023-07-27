function maths(request, response) {
  const { num1, num2 } = request.query; // #Destructuring
  const product = num1 * num2;
  response.json(product);
}

module.exports = maths;

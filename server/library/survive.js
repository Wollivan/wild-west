function survive(request, response) {
  try {
    const scenarios = [
      "You made it to the saloon. Congrats",
      "You died of dysentery.",
      "A snake gotcha!",
      "Your horse made it... you didn't.",
      "Your made it... your horse didn't.",
      "You found gold!",
      "You found oil!",
      "You didn't even attempt to cross the Oregon trail.",
    ];
    const randomNum = Math.floor(Math.random() * scenarios.length);
    const outcome = scenarios[randomNum];

    // if (request.query.api_key !== "1234567890") {
    //   //. you need to put ?api_key=1234567890 in the URL to use this endpoint
    //   response.status(403).json("You do not have my permission!");
    // }

    if (outcome) {
      response.status(200).json(outcome);
    } else {
      // if outcome is undefinded, tell the user it can't find what they were looking for
      response.status(404).json("Not found.");
    }
  } catch (error) {
    response.status(404).json(error);
  }
}

module.exports = survive;

const superagent = require("superagent");

function getTatooineResidents() {
  const myPromise = new Promise(function(resolve, reject) {
    superagent
      .get("https://swapi.co/api/planets/1/")
      .then(resolve)
      .catch(reject);
  });
  return Promise.resolve(
    myPromise
      .then(res => res.body.residents)
      .catch(err =>
        console.log("Failed to retrieve info on residents of Tatooine")
      )
  );
}

function promiseMeAString(stringPassed) {
  return new Promise((resolveFunction, rejectFunction) => {
    if (typeof stringPassed === "string") {
      resolveFunction("You kept the Promise!");
    }
    if (stringPassed === null) {
      rejectFunction("You have failed me!");
    }
  });
}

module.exports = {
  getTatooineResidents,
  promiseMeAString
};

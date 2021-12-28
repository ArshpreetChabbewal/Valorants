const { TOKEN } = require("./config.js");
const axios = require("axios");

axios
  .get(`https://api.pandascore.co/lol/matches?token=${TOKEN}`)
  .then((res) => {
    console.log(res);
  });

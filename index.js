const axios = require("axios");
const fs = require("fs");

function getIGtest() {
  axios
  .get("https://www.instagram.com/cahya.12/?__a=1")
  .then(res =>
    console.log(res.data)
  );
}

function getIG() {
  axios.get("https://www.instagram.com/explore/tags/gempi/?__a=1").then(res => {
    fs.writeFile("instagram.json", JSON.stringify(res.data, null, 4), res =>
      console.log("Success Writen")
    );
  });
}

function postOnly() {
  axios.get("https://www.instagram.com/ridwankamil?__a=1").then(res => {
    const item = res.data.graphql.user.edge_owner_to_timeline_media.edges;
    fs.writeFile("RidwanKamilPost.json", JSON.stringify(item, null, 4), res =>
      console.log("Success Writen")
    );
  });
}

// postOnly();
getIGtest();

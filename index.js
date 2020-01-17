require("dotenv").config();

const server = require("./server");

const port = process.env.PORT;

server.listen(port, () =>
  console.log(`Server Listening on http://localhost:${post}`)
);

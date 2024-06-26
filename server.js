const http = require("http");

// Creating the server
const server = http.createServer((request, response) => {
  const url = request.url; // Getting the request URL

  console.log(`URL requested: ${url}`); // Logging the requested URL to the console

  response.setHeader("Content-Type", "text/plain"); // Setting the responseponse header

  // Handling the different url routes using switch statement
  switch (url) {
    case "/":
      response.writeHead(200);
      response.end("Welcome to the Home Page!");
      break;
    case "/about":
      response.writeHead(200);
      response.end("This is the About Page!");
      break;
    case "/contact":
      response.writeHead(200);
      response.end("This is the Contact Page!");
      break;
    case "/products":
      response.writeHead(200);
      response.end("These are our Products!");
      break;
    case "/services":
      response.writeHead(200);
      response.end("These are our Services!");
      break;
    case "/subscribe":
      response.writeHead(200);
      response.end("Subscribe Page!");
      break;
    default:
      response.writeHead(404);
      response.end("404 Not Found");
      break;
  }
});

const PORT = 3000; // Starting the server

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

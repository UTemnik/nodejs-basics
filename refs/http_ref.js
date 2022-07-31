const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write('<h1>Hello from NodeJS</h1>');
  res.write('I love NodeJS');
  res.end(`
  <div style="background: red; width: 200px; height: 200px">
    <h1>TEST 41</h1>
  </div>
  `);
});

server.listen(3001, () => {
  console.log('Server is running...')
})
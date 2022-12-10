ReactDOMServer.renderToString
ReactDOMServer.renderToString
import path from 'path';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from 'App';

const PORT = process.env.PORT || 3006;
const app = express();
console.log("SERVER RUNNING . . . ");
app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('../dist/index.html');
  console.log(`${indexFile} SERVER WORKING . . .`);
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error("[ ERROR ] : ", err);
      return res.status(500).send("500 ERROR");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root>${html}</div>`)
    );
  });
});
app.use(express.static(path.resolve('./build')));
app.listen(PORT, () => {
  console.log(`SERVER IS LISTENEING ON PORT ${PORT}`);
});

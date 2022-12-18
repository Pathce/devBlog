import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3010;
const app = express();

console.log("SERVER RUNNING . . . ");

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

app.use(express.json());

app.get('/api/get/test-api', cors(corsOptions), function(req, res) {
  console.log("[API SERVER] GET: TEST-API");
  res.status(200).json({
    "result": "SUCCESS"
  });
});

// [ LOGIN ]
app.options('*', cors(corsOptions));
app.post('/api/login', cors(corsOptions), (req, res) => {
  console.log("Try Login . . .");
  res.status(200).json({
    "result": "TEST"
  });
  console.log(req.rawHeaders);
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENEING ON PORT ${PORT}`);
});
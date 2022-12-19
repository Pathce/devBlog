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

// [ LOGIN ]
// TEST 용 ID, PW
const userInfo = {
  id: "test",
  pw: "test12#$"
}
app.options('*', cors(corsOptions));
app.post('/api/login', cors(corsOptions), (req, res) => {
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) res.status(200).json({"result": "TEST"});
  else res.status(400).json({"error": "Invalid account"});
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENEING ON PORT ${PORT}`);
});
import express, { response } from 'express';
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
  const responseData: ResponseData = {
    resultCode: 404,
  };
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    responseData.resultCode = 200;
    responseData.data = {
      msg: "Login Success",
      token: "TEST",
    };
  }
  else {
    responseData.resultCode = 400;
    responseData.reason = "Invalid Account";
  }
  res.status(responseData.resultCode).json(responseData);
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENEING ON PORT ${PORT}`);
});

interface ResponseData {
  resultCode: number;
  data?: object;
  reason?: string;
}
import express from 'express';

const PORT = process.env.PORT || 3010;
const app = express();

console.log("SERVER RUNNING . . . ");

app.get('/api/get/test-api', function(req, res) {
  console.log("[API SERVER] GET: TEST-API");
  res.status(200).json({
    "result": "SUCCESS"
  });
});
app.listen(PORT, () => {
  console.log(`SERVER IS LISTENEING ON PORT ${PORT}`);
});
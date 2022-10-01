//server
//express server
//express 모듈 불러오기
const express = require("express");
const path = require("path");

//express 사용
const app = express();

app.use(express.static(path.resolve(__dirname, "js-company")));

//어떤 요청이 들어오든 index.html 처음에 보여주기
app.get("/*",(req, res) => {
	res.sendFile(path.resolve("js-company", "index.html"));
})

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));

//참고 바닐라 js spa구현 
//https://emewjin.github.io/211215/
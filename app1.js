// 2022-08-26 EXPRESS, HTML 로드 함수

const express = require('express'); // express 모듈 실행 (익스프레스 내부에 http 모듈이 내장)
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3005);  // 서버가 실행될 포트를 설정
// -> process.env 객체에 PORT 속성이 있다면 그 값을 사용, 없다면 3005 포트 사용

app.get('/', (req, res) => {    // 주소에 대한 GET 요청이 올 때 동작하는 함수
    //res.send('Hello Express');
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '빈 포트에서 대기중');
});
// 2022-08-26 EXPRESS, 미들웨어 코드

const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3005);

app.use((req, res, next)=> {
    console.log('모든 요청에 다 실행');
    next();
})

app.get('/', (req, res, next) => {
    console.log('get 요청에서만 실행');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로');
}) 

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '빈 포트에서 대기중');
});
const express = require('express');
const app = express();

app.get('/', (req, resp)=> {
    resp.send({msg: 'Hello World'});
});

app.listen(80, ()=> {
    console.log('server running on 8080');
})
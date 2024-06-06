const express = require('express');
require('./config');
const teacher = require('./teacher');

const app = express();
app.use(express.json());

app.post('/insert', async (req, resp) => {
    let data = new teacher(req.body)
    let result = await data.save();
    console.log(req.body);
    resp.send(result);
})

app.get('/list', async (req, resp) => {
    let data = await teacher.find()
    resp.send(data);
});

app.delete('/delete', async (req, resp) => {
    console.log(req.params)
    let data = await teacher.deleteOne(req.params);
    resp.send(data);
});

app.put('/update/:_id', async (req, resp) => {
    console.log(req.params);
    let data = await teacher.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    resp.send(data);
});

app.listen(8000);
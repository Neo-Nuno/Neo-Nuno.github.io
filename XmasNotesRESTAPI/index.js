const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/note', (req, res) =>{
    res.status(200).send({
        label: 'This is a xmas note',
        something:'lalal'
    })

});

app.post('/note/:id',(req, res) => {
    const{id} = req.params;
    const{NoteMessage} = req.body;

    if(!NoteMessage){
        res.status(418).send({message:'we need a valid XMAS note!'})
    }

    res.send({
        note: `Note with your${NoteMessage} and ID of ${id}`,
    })

});
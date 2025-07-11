import express from 'express';
const app = express();

const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
         {
            id:2,
            title: 'Another joke',
            content: 'Another joke'
        },
         {
            id:3,
            title: 'third joke',
            content: 'third joke'
        },
        {
            id:4,
            title: 'fourth joke',
            content: 'fourth joke'
        }
    ];
    res.send(jokes);
})
app.listen(PORT,()=>{
    console.log(`Serving at PORT ${PORT}`);  
})
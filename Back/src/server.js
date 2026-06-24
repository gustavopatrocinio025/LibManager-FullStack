const express = require('express');
const cors = require('cors');

const livroRoutes =
    require('./routes/livroRoutes');

const authRoutes =
    require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', authRoutes);
app.use('/', livroRoutes);
app.get('/', (req, res) => {
    res.send(
        'Servidor funcionando'
    );
});

app.listen(3000, () => {

    console.log(
        'Servidor funcionaod na porta 3000'
    );

});
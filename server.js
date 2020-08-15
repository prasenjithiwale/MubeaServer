const express = require('express');
const cors = require('cors');
//const serverless = require('serverless-http');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Welcome to Mubea APIs");
})

const productionRoute = require('./routes/productionRoutes');
//app.use('/.netlify/functions/api', productionRoute);
app.use('/api', productionRoute);

const coilingRoute = require('./routes/coilingRoutes');
//app.use('/.netlify/functions/api', coilingRoute);
app.use('/api', coilingRoute);

const grindingRoute = require('./routes/grindingRoutes');
//app.use('/.netlify/functions/api', grindingRoute);
app.use('/api', grindingRoute);

const chamferingRoute = require('./routes/chamferingRoutes');
//app.use('/.netlify/functions/api', chamferingRoute);
app.use('/api', chamferingRoute);

const hpsRoute = require('./routes/hpsRoutes');
//app.use('/.netlify/functions/api', hpsRoute);
app.use('/api', hpsRoute);

const spccRoute = require('./routes/spccRoutes');
//app.use('/.netlify/functions/api', spccRoute);
app.use('/api', spccRoute);

const springdataRoute = require('./routes/springdataRoutes');
app.use('/api', springdataRoute);
//app.use('/.netlify/functions/api', springdataRoute);


db.sequelize.sync().then(() =>{
    //module.exports.handler = serverless(app);
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});

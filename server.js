const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const productionRoute = require('./routes/productionRoutes');
app.use('/api', productionRoute);

const coilingRoute = require('./routes/coilingRoutes');
app.use('/api', coilingRoute);

const grindingRoute = require('./routes/grindingRoutes');
app.use('/api', grindingRoute);

const chamferingRoute = require('./routes/chamferingRoutes');
app.use('/api', chamferingRoute);

const hpsRoute = require('./routes/hpsRoutes');
app.use('/api', hpsRoute);

const spccRoute = require('./routes/spccRoutes');
app.use('/api', spccRoute);

const springdataRoute = require('./routes/springdataRoutes');
app.use('/api', springdataRoute);

db.sequelize.sync().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});

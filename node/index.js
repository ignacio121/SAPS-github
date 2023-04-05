import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js"
import db from "./database/db.js"
import routesCategoriaPF from './routes/routesCategoriaPF.js'
import routesCategoriaP from './routes/routesCategoriaP.js'
import routesCategoriaS from './routes/routesCategoriaS.js'
import routesEstado from './routes/routesEstado.js'
import routesPF from './routes/routesPF.js'
import routesPR from './routes/routesPR.js'
import routesPregunta from './routes/routesPregunta.js'
import routesPrioridad from './routes/routesPrioridad.js'
import routesRamos from './routes/routesRamos.js'
import routesSolicitud from './routes/routesSolicitud.js'
import routesSR from './routes/routesSR.js'


dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

/* crear modelo de db en mysql
(async()=>{
    await db.sync();
})();
*/

// secure: false/true : http/https



app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json())

app.use(UserRoute);
app.use(AuthRoute);
app.use('/categoriaPF',routesCategoriaPF);
app.use('/categoriaP',routesCategoriaP);
app.use('/categoriaS',routesCategoriaS);
app.use('/estado',routesEstado);
app.use('/preguntas_frecuentes',routesPF );
app.use('/pregunta_realizada',routesPR );
app.use('/pregunta',routesPregunta );
app.use('/prioridad',routesPrioridad );
app.use('/ramos',routesRamos);
app.use('/solicitud',routesSolicitud);
app.use('/solicitud_realizada',routesSR );


// store.sync(); hace sessions

app.listen(process.env.APP_PORT, ()=> {
    console.log('API levantada exitosamente y corriendo');
}); 
const app=require('./src/app');
require('dotenv').config();
const connectdb=require('./src/db/db');
connectdb();


app.listen(3000,()=>
{   
console.log(`Server Is running at port:http://localhost:${3000}`);

}
    
)
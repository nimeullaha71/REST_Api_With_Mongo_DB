const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port;

app.get("/",(req,res)=>{
    res.send("Server is running ");
});

app.listen(PORT,()=>{
    console.log(`app is runnnig on http://localhost:${PORT}`);
});
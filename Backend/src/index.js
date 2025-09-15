// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";

import ConnectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

ConnectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`)
    });

})
.catch((err) => {
    console.log("MONGODB Connection failed!!!", err);
})

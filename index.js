const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const usersRoutes = require("./features/routes/user.routes");
const analyticsRoutes = require("./features/routes/analytics.routes");
const postsRoutes = require("./features/routes/posts.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello adobe");
});

app.use("/users", usersRoutes)
app.use("/analytics", analyticsRoutes)
app.use("/posts", postsRoutes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
  try{
    await dbConnect();
    console.log(`server started on port ${PORT}`);  
  }catch(err){
    if(err.message==="querySrv ECONNREFUSED _mongodb._tcp.cluster0.3pvw9hk.mongodb.net"){
      console.log("Network/database not connected");
    }else{
      console.log(err);
    }
  }
})
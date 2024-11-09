const express=require("express");
const app=express();
const axios=require("axios");
const path=require("path");
const apikey="471e8972";

// app.use(express.json());
app.use(express.static(path.join(__dirname, ".")));

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index2.html"));
})



//ab apni search api bnayenge

//so search ko click krne pe ye search vali api call ho rhi hai
app.get("/search",async (req,res)=>{
    const name=req.query.query;//because html me delhi hmne search?query hi diya hai
    const response=await axios.get("http://www.omdbapi.com/",{
        params:{
            apikey:apikey,
            s:name,
        },
    });
    return res.status(200).json(response.data);
})

// const fun=async ()=>{
//     const response= await axios.get("http://www.omdbapi.com/",{
//         params:{
//             apikey:apikey,
//             s:"Ghatak",
//         },
//     });
//     console.log(response.data);
// };
// fun();

const port = process.env.PORT || 8080; // Use the environment port provided by Azure, or fallback to 8080 locally
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


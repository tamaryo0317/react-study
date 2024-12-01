const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

// CORSを有効化
app.use(cors());

// LoginServlet endpoint
app.post("/SAKURAspa/system/LoginServlet", (req, res) => {
    console.log('request came!');
    // 固定のレスポンスを返す
    res.json({
        message: "This is a hardcoded response!",
        user: "hardcodedUser",
        success: true,
    })
});

// app.post("/SAKURAspa/system/LoginServlet", (req, res) => {
//     console.log('request came!');
//     // 固定のレスポンスを返す
//     res.json({
//         errormsg: "this is a error."
//     })
// });

app.get("/SAKURAspa/system/LoginServlet", (req, res) => {
    res.json({
        message: "GET requests are not supported. Please use POST.",
    });
});


// サーバー起動
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
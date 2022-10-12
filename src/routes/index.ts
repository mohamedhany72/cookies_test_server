import express from "express";

const routes = express.Router();

routes.get("/get_cookies", (_req: express.Request, res: express.Response):void => {
    console.log("get cookies route");

     res.status(200).json({
        refresh: "this-is-refresh-cookie-from-server",
        browser: "browser-cookie-from-server-is-awosome"
     })
})

routes.post("/test_cookies", (req:express.Request, res:express.Response):void => {
    const cookies = req.cookies;
    const user = req.body.user;
    const pswd = req.body.password;

    console.log("test cookies route")
    

    res.status(200).json({
        cookies,
        user,
        pswd,
        msg: "this is a response from server"
    })
})


export default routes;
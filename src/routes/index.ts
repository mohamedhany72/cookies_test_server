import express from "express";
import { refreshCookie, browserCookie, clearCookies } from "./cookiesUtil";

const routes = express.Router();

routes.get(
    "/get_cookies",
    (_req: express.Request, res: express.Response): void => {
        console.log("get cookies route");

        const refresh = "this-is-refresh-cookie-from-server";
        const browser = "browser-cookie-from-server-is-awosome";

        refreshCookie(res, refresh);
        browserCookie(res, browser);

        res.status(200).json({
            refresh,
            browser
        });
        return;
    }
);

routes.post(
    "/test_cookies",
    (req: express.Request, res: express.Response): void => {
        const cookies = req.cookies;
        const user = req.body.user;
        const pswd = req.body.password;

        console.log("test cookies route");

        res.status(200).json({
            cookies,
            user,
            pswd,
            msg: "this is a response from server"
        });
        return;
    }
);

routes.delete(
    "/remove_cookies",
    (_req: express.Request, res: express.Response): void => {
        clearCookies(res);
        res.status(200).send("cookies shall be removed!");
        return;
    }
);

export default routes;

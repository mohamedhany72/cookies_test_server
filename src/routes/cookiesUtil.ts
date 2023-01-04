import express from "express";

const refreshCookie = (res: express.Response, refresh: string): void => {
    const date = new Date();
    date.setHours(date.getHours() + 24 * 7);

    res.cookie("refresh", refresh, {
        expires: date,
        sameSite: "none",
        secure: true,
        path: "/"
    });
};

const browserCookie = (res: express.Response, browser: string): void => {
    const date = new Date();
    date.setHours(date.getHours() + 365 * 7);

    res.cookie("browser", browser, {
        expires: date,
        sameSite: "none",
        secure: true,
        path: "/"
    });
};

const clearCookies = (res: express.Response): void => {
    res.clearCookie("browser", {
        sameSite: "none",
        secure: true
    });
    res.clearCookie("refresh", {
        sameSite: "none",
        secure: true
    });
};

export { refreshCookie, browserCookie, clearCookies };

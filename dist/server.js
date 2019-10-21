"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url_1 = require("url");
const database_service_1 = require("./database.service");
const server = http_1.createServer(function (req, res) {
    const url = url_1.parse(req.url, true);
    switch (url.pathname) {
        default:
            res.statusCode = 404;
            res.end();
            break;
        case "/siswa":
            database_service_1.detailRecordService(req, res);
            break;
        case "/siswa/list": database_service_1.listRecordService(req, res);
        // break;
        // case "/siswa/add": dbActionService(req, res);
        // break;
        // case "/siswa/delete": dbActionService(req, res);
        // break;
        // case "/siswa/update": dbActionService(req, res);
        // break;
        // case "/logs": logService(req, res);
        // break;
    }
});
server.listen(80);

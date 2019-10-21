"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const dbFunction_1 = require("./dbFunction");
function detailRecordService(req, res) {
    const url = url_1.parse(req.url, true);
    const query = url.query;
    if (!query["name"]) {
        res.statusCode = 400;
        res.end();
        return;
    }
    try {
        dbFunction_1.selectFROM(query["name"], function (hasilProses) {
            res.write("ID : " + hasilProses.id + "\r\n");
            res.write("Nama : " + hasilProses.nama + "\r\n");
            res.write("Kelas : " + hasilProses.kelas + "\r\n");
            res.end();
        });
    }
    catch (err) { //blm work
        if (err) {
            res.statusCode = 400;
            res.end();
            return;
        }
    }
    // else{
    //     selectFROM(query["name"], function(hasilProses){
    //         res.write("ID : "+hasilProses.id+"\r\n");
    //         res.write("Nama : "+hasilProses.nama+"\r\n");
    //         res.write("Kelas : "+hasilProses.kelas+"\r\n");
    //         res.end();
    //     });
    // }
    //http://localhost/siswa?name=kevin    
}
exports.detailRecordService = detailRecordService;
function listRecordService(req, res) {
    const url = url_1.parse(req.url, true);
    const query = url.query;
    // if(!query["get"]){
    //     res.statusCode = 400;
    //     res.end();
    //     return;
    // }
    try {
        dbFunction_1.selectALL([query["classroom"], query["ordercol"], query["ordersort"], query["limit"], query["offset"]], function (hasilProses) {
            hasilProses.forEach(elemen => {
                res.write("ID : " + elemen.id + "\r\n");
                res.write("Nama : " + elemen.nama + "\r\n");
                res.write("Kelas : " + elemen.kelas + "\r\n");
            });
            res.end();
        });
    }
    catch (err) { //blm work
        if (err) {
            res.statusCode = 400;
            res.end();
            return;
        }
    }
}
exports.listRecordService = listRecordService;

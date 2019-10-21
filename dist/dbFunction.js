"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
// import { reportselectFROM } from "./reportFunction"
// enum SORT_DIRECTION{
//     ASC = "ASC",
//     DESC = "DESC"
// }
// enum SISWA_SORT_BY{
//     NAME = "name";
//     CLASSROOM = "classroom";
// }
// export interface Siswa{
//     id?: number;
//     name: string;
//     classroom: string;
// }
// export class SQLite{
//     db: Database;
//     constructor(path: string){
//         this.db = new Database(path);
//     }
//     selectFROMA(name: string, callback: Function){
//         const query = "SELECT * FROM siswa WHERE name=?";
//         this.db.get(query, [name], (err, row)=>{
//             if(err){ console.log("error mengambil data"); return; }
//             else{  callback(row); }
//         });
//         callback(row)
//     }
//     selectALL(callback: Function){
//         const query = "SELECT * FROM siswa ORDER BY ?";
//         this.db.all(query, (err, rows)=>{
//             if(err){ console.log("Error saat mengambil data siswa") }
//             else{ callback(rows); }
//         });
//     }
//     insertINTO(callback: Function, data: string[]){
//         const sql = "INSERT INTO siswa(name, classroom) VALUES(?, ?)"
//         this.db.run(sql, [data[0], data[1]], (err)=>{
//             if(err){ callback(err) }
//             else{ callback("Sukses menambah data") }
//         });
//     }
//     selectLIMIT(){}
//     selectOFFSET(){}
//     selectORDERBY(){}
//     selectWHERE(){}
// }
// const dbSiswa = new SQLite("./db/siswa.db");
function selectFROM(data, callback) {
    const db = new sqlite3_1.Database("./db/siswa.db");
    const query = `SELECT * FROM siswa WHERE name=?`;
    let penampungResult = null;
    db.get(query, data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            return penampungResult = { id: result.id, nama: result.name, kelas: result.classroom };
        }
    });
    setTimeout(function () {
        //  console.log(blabla);
        callback(penampungResult);
    }, 1000);
}
exports.selectFROM = selectFROM;
function selectALL(data, callback) {
    const db = new sqlite3_1.Database("./db/siswa.db");
    let penampungResult = [];
    const query = "SELECT * FROM siswa WHERE classroom=? ORDER BY ? ASC LIMIT ? OFFSET ?";
    db.each(query, [data[0], data[1], data[3], data[4]], (err, result) => {
        if (err) {
            console.log("aaaaaaaa" + data);
            console.log(err.message);
        }
        else {
            console.log("bbbbbbbbbbbb" + result.id, result.name, result.classroom);
            return penampungResult.push({ id: result.id, nama: result.name, kelas: result.classroom });
        }
    }); //http "http://localhost/siswa/list?classroom=&ordercol=&ordersort=&limit=&offset="
    setTimeout(function () {
        //  console.log(blabla);
        callback(penampungResult);
    }, 1000);
    console.log("fuck");
}
exports.selectALL = selectALL;

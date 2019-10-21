import { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import { selectFROM, selectALL } from "./dbFunction";
import { reportselectFROM } from "./reportFunction";

export function detailRecordService(req: IncomingMessage, res: ServerResponse){
    const url = parse(req.url, true);
    const query = url.query;

    if(!query["name"]){
        res.statusCode = 400;
        res.end();
        return;
    }
    try{
        selectFROM(query["name"], function(hasilProses){
            res.write("ID : "+hasilProses.id+"\r\n");
            res.write("Nama : "+hasilProses.nama+"\r\n");
            res.write("Kelas : "+hasilProses.kelas+"\r\n");
            res.end();
        });
    }catch(err){ //blm work
        if(err){
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

export function listRecordService(req: IncomingMessage, res: ServerResponse){
    const url = parse(req.url, true);
    const query = url.query;

    // if(!query["get"]){
    //     res.statusCode = 400;
    //     res.end();
    //     return;
    // }
    try{
        selectALL([query["classroom"], query["ordercol"], query["ordersort"], query["limit"], query["offset"]], function(hasilProses){
            hasilProses.forEach(elemen => {
                res.write("ID : "+elemen.id+"\r\n");
                res.write("Nama : "+elemen.nama+"\r\n");
                res.write("Kelas : "+elemen.kelas+"\r\n");
            });
            
            res.end();
        });
    }catch(err){ //blm work
        if(err){
            res.statusCode = 400;
            res.end();
            return;
        }
        
    }
}
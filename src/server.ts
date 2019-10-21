import { createServer } from "http";
import { parse } from "url";
import { detailRecordService, listRecordService } from "./database.service";

const server = createServer(function(req, res){
    const url = parse(req.url, true);
    switch (url.pathname){
        default: res.statusCode = 404; res.end(); 
        break;
        case "/siswa": detailRecordService(req, res);
        break;
         case "/siswa/list": listRecordService(req, res);
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







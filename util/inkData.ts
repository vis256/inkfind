import {DataType} from "../types/dataType";

var Inkdata = require("inkdb-data");

let inks : Array<DataType>
Inkdata.loadAPI(function(err : any,  api : any) {
    inks = api.getInks();
});

export default inks!
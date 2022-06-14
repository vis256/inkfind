import {DataType} from "../types/dataType";
import {InkDataType} from "../types/inkDataType";

export function trimData( initialData : DataType ) : InkDataType {
    return {
        colors : initialData.colorInformation.colors[0],
        companyName : initialData.company,
        inkName : initialData.name
    }
}
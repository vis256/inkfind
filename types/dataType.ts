import { ColorType } from "./colorType"

export interface DataType {
    colorInformation: {
        composition?: boolean,
        colors: Array<ColorType>
    },
    company: string,
    inkline?: string,
    name: string,
    notes?: Array<string>,
    properties?: any
    retailers?: any
    reviewes?: any
}
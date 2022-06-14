export interface ColorType {
    r : number,
    g : number,
    b : number
}

function convert( int : number ) {
    const s = int.toString(16)
    return s.length == 1 ? "0" + s : s
}

export function getHex( color : ColorType ) {
    return "#" + convert(color.r) + convert(color.g) + convert(color.b)
}

export function getColorFromHex( hex : string ) {
    // https://stackoverflow.com/a/12947109
    const c : number = parseInt('0x' + hex.substring(1), 16)
    return {
        r : (c>>16)&255, 
        g : (c>>8)&255, 
        b : c&255
    }
}
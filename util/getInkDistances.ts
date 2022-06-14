import inks from "./inkData";

interface ColorData {
    r : number,
    g : number,
    b : number
}

function getDistance( targetRGB : ColorData, inkRGB : ColorData ) {
    // https://en.wikipedia.org/wiki/Color_difference
    // Using redmean

    const r = 0.5 * (targetRGB.r + inkRGB.r)
    const delta_r = inkRGB.r - targetRGB.r
    const delta_g = inkRGB.g - targetRGB.g
    const delta_b = inkRGB.b - targetRGB.b

    return Math.sqrt(
        (2 + (r / 256)) *
        delta_r * delta_r + (4 * delta_g * delta_g) +
        (2 + ((255 - r) / 256)) * delta_b * delta_b
    )
}

function compareItems( a : any, b : any ) {
    return a.d - b.d
}

export default function getInkDistances( targetHex : string ) {
    // https://stackoverflow.com/a/12947109
    const c = '0x' + targetHex
    const r = (c>>16)&255
    const g = (c>>8)&255
    const b = c&255

    let a : Array<{ i : Number, d : Number }> = []

    inks?.forEach((ink, i) => {
        const d = getDistance({r,g,b}, ink.colorInformation.colors[0])
        a.push({ i, d })
    })

    a.sort(compareItems)

    return a
}
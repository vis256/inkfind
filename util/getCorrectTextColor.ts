import { ColorType } from "../types/colorType";

export default function getCorrectTextColor( bgColor : ColorType ) {
    // https://www.w3.org/TR/AERT/#color-contrast
    const brightness = Math.round(((bgColor.r * 299) + (bgColor.g * 587) + (bgColor.b * 114)) / 1000) 
    return brightness > 125 ? '#121212' : '#fefefe'
}
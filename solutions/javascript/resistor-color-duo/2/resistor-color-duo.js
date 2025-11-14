//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = bands => new Number(bands.map(getValue).join(""))

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

const getValue = color => COLORS.indexOf(color);
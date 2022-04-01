interface iRGB {
  r: number | undefined;
  g: number | undefined;
  b: number | undefined;
}

function invertColor(hex: string | undefined) {
  if (hex === undefined) {
    return;
  }
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str: string, len: number = 2) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

// function that converts hex format to a rgb color
function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function selectColor(hex: string) {
  const rgb = hexToRgb(hex);
  const brightness =
    ((rgb?.r ?? 0) * 299 + (rgb?.g ?? 0) * 587 + (rgb?.b ?? 0) * 114) / 1000;
  return brightness > 125 ? "black" : "white";
}

export default invertColor;

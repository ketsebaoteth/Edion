/**
 * Converts a hex color code to an RGB color code.
 * @param {string} hex - The hex color code.
 * @returns {object} An object with r, g, and b properties.
 */
export function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
}
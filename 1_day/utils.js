const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";

function generateHash(length) {
   return Array.from(
        { length: length },
        (v, k) => chars[Math.floor(Math.random() * chars.length)]
    ).join('');
}

module.exports = { generateHash }

const chars =
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";

export default function generateCode(length) {
  return Array.from(
    { length: length },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

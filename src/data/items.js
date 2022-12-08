export const items = [
  { id: "0", name: "Jose", telephone: "1111 0000", favorite: false },
  { id: "1", name: "Josefina", telephone: "2222 1111", favorite: true },
];

export function getContact(id) {
  return items.find((item) => item.id === id);
}

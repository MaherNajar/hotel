export default function paginate(rooms, pageSize, actualPage) {
  const startItem = actualPage * pageSize;
  return rooms.slice(startItem, startItem + pageSize);
}

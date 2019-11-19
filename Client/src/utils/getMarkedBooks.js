export const getMarkedBooks = (currentId, choosenBooks) => {
  let books;
  if (choosenBooks.includes(+currentId)) {
    books = choosenBooks.filter(id => id !== +currentId);
  } else {
    books = [...choosenBooks, +currentId];
  }
  return books;
};

export const generateTaskId = (todos) => {
  return todos.reduce((acc, cur) => {
    return cur.id > acc ? cur.id : acc
  }, 0) + 1
}
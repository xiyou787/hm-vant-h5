export const setItem = (data) => {
  localStorage.setItem('token', data)
}
export const getItem = () => {
  return localStorage.getItem('token')
}
export const removeItem = () => {
  localStorage.removeItem('token')
}

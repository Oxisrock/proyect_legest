export const SHOW_USERS = 'SHOW_USERS'
export function showUsers () {
  const users = [
    {id: 1, name: 'Simeone'},
    {id: 2, name: 'Koke'}
  ]

  return {
    type: SHOW_USERS,
    payload: users
  }
}

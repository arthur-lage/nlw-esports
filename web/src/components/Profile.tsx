import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';

export function Profile () {
  const { currentUser } = useAuth()
  
  async function handleLogout () {
    const res = await api.post("/auth/discord/revoke", {
      token_type: currentUser!.token_type,
      access_token: currentUser!.access_token
    })

    console.log(res.data)
  }

  return (
    <div>
      <span>Logged as</span> <strong>{currentUser!.discord}</strong>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import type { IUser } from "../../models/IUser"
import { apiService } from "../../services/api.service"

export const UsersComponent = () => {
    const [query] = useSearchParams()
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const pg = query.get('pg') || '1'
        setLoading(true)

        apiService.getAllUsers(pg)
            .then(data => {
                setUsers(data.users)
                setLoading(false)
            })
            .catch(err => {
                console.error("Fetch error:", err)
                setLoading(false)
            })
    }, [query])

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '10px' }}>
            <h2>Users List (Page {query.get('pg') || '1'})</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    ))}
                </ul>
            )}
            {!loading && users.length === 0 && <p>No users found.</p>}
        </div>
    )
}

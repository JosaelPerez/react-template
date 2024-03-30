import { useEffect, useState } from "react"

type User = {
  id: string
  name: string
}

function ComponentList() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await response.json()
      setList(users)
      setIsLoading(false)
    }

    fetchUsers()
  }, [])

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <ul className="m-4">
      {list.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default ComponentList

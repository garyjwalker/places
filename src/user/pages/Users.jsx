import React from "react"

import UsersList from "../components/UsersList"

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Gary",
      places: 3,
      image: "https://dummyimage.com/300x200/000/fff",
    },
  ]

  return (
    <>
      <h1 className="center">Users List</h1>
      <UsersList users={USERS} />
    </>
  )
}

export default Users

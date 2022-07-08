import React from "react"
import UserItem from "./UserItem"

import Card from "../../shared/components/UIElements/Card.js"
import "./UsersList.css"

function UsersList(props) {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users Found.</h2>
        </Card>
      </div>
    )
  }

  return (
    <ul className="users-list">
      {props.users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            places={user.places}
          />
        )
      })}
    </ul>
  )
}

export default UsersList

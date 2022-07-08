import React from "react"
import { useParams } from "react-router-dom"

import PlaceList from "../components/PlaceList"

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "This is jsut a description",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "This is jsut a description",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
]

const UserPlaces = (props) => {
  let params = useParams()
  return <h1>Hello, World</h1>
  // const userId = useParams().userId
  // console.log(userId)
  // const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
  // return <PlaceList items={loadedPlaces} />
}

export default UserPlaces

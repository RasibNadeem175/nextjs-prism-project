import React from 'react'

type Props = {
  UserId: String,
  UserName: String,
  reviews: String

}

function reviewsbyothers(props: Props) {
  return (
    <>
      <div>Review By: {props.UserName}</div>
    <div>Review: {props.reviews}</div>
    </>
  )
}

export default reviewsbyothers
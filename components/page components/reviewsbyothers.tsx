import React from 'react'

type Props = {
  UserId: string;
  UserName: string;
  reviews: string;

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
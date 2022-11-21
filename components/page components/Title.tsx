import React from 'react'

type Props = {
  title: String;
  by : String; //By author or producer whatever
}

const Title = (props: Props) => {
  return (
    <div>{props.title} by {props.by}</div>
  )
}

export default Title
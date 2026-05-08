// import ss from './Day.module.scss'
import * as React from "react";

interface Props {
  children?: React.ReactNode
}

export const Day = (props: Props) => {
  const {children} = props;
  return (
    <>Day workspace{children}</>
  )
}
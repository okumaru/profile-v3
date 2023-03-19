// import type Props from "../interface-props";
// import style from './List.module.css'
import React, { ReactNode } from "react";

export default interface Props {
  children?: ReactNode
  // any props that come into the component
}

export const OrderedList = ({ children }: Props) => (
  <ol className="list-decimal list-inside">
    {children}
  </ol>
)

export const UnorderedList = ({ children }: Props) => (
  <ul className="list-disc list-inside">
    {children}
  </ul>
)
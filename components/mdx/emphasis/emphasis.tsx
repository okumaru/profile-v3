import type Props from "../interface-props";
import style from './Emphasis.module.css'

export const Emphasis = ({ children }: Props) => {
    return <em>{children}</em>
}

export const EmphasisBold = ({ children }: Props) => {
    return <span className={style.EmphasisBold}>{children}</span>
}
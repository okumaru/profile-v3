import type Props from "../interface-props";
import style from "./Paragraph.module.css";

export const Paragraph = ({ children }: Props) => (
  <>
    <p className={style.textParagraph}>{children}</p>
  </>
);

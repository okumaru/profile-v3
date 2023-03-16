import type Props from "../interface-props";
import style from "./paragraph.module.css";

export const Paragraph = ({ children }: Props) => (
  <>
    <p className="mb-5 leading-relaxed">{children}</p>
  </>
);

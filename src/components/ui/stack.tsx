import React from "react";
import Title from "./title";

export default function StackComp({
  text,
  className,
  children,
}: {
  text: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Title text={text} />
      {children}
    </div>
  );
}

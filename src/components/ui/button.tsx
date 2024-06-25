import ImageComp from "./image";

export default function Button({
  text,
  icon,
  iconClassName,
  className,
}: {
  text: string;
  icon?: string;
  iconClassName?: string;
  className?: string;
}) {
  return (
    <button className={className}>
      {icon ? <ImageComp link={icon} className={iconClassName} /> : ""}
      <p>{text}</p>
    </button>
  );
}

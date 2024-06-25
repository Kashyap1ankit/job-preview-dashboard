export default function ImageComp({
  link,
  className,
}: {
  link: string;
  className?: string;
}) {
  return <img src={link} alt="No Internet" className={className} />;
}

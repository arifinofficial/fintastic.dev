import Link from "next/link";
interface Props {
  text: string;
  permalink: string;
  total?: number 
}

const Tag = ({ text, permalink, total }: Props) => {
  return (
    <Link
      href={permalink}
      className="mr-3 text-sm font-medium uppercase text-primary-500"
      aria-label={`View posts tagged ${text}`}
    >
      {text} {(total ? `(${total})` : '')}
    </Link>
  );
};

export default Tag;

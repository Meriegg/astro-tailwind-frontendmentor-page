interface Props {
  text: string;
  href: string;
}

const MenuItem = ({ text, href }: Props) => {
  return (
    <a
      href={href}
      className="transition-all duration-300 text-base text-veryDarkBlue"
    >
      {text}
    </a>
  );
};

export default MenuItem;

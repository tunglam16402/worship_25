import Link from "next/link";

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileLink = ({ href, children, onClick }: MobileLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-4 text-lg font-medium border-b border-primary"
    >
      {children}
    </Link>
  );
};

export default MobileLink;

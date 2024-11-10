import Link from "next/link";

export default function SocialLink({
  children,
  href,
  title,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="mx-1.5 size-8 flex hover:text-blue-400"
      title={title}
      target="_blank"
    >
      {children}
    </Link>
  );
}

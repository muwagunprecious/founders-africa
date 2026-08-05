import Link from "next/link";
import clsx from "clsx";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  className?: string;
};

export default function NavLink({
  children,
  active = false,
  className = "",
  href,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        className,
        "hover:text-primary p-2",
        active ? "text-foreground font-medium" : "text-gray-400",
      )}
    >
      {children}
    </Link>
  );
}

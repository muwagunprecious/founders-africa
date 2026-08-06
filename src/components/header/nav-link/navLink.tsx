import Link from "next/link";
import clsx from "clsx";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  className?: string;
  disabled?: boolean;
};

export default function NavLink({
  children,
  active = false,
  className = "",
  href,
  disabled = false,
}: NavLinkProps) {
  return (
    <Link
      href={disabled ? "#" : href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        className,
        "hover:text-primary p-2",
        active ? "text-foreground font-medium" : "text-gray-400",
      )}
      onClick={(e) => {
        if (disabled) e.preventDefault();
      }}
    >
      {children}
    </Link>
  );
}

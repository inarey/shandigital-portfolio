import Link from "next/link";

const navLinks = [
  { href: "/#blog", label: "Blog" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/#shop", label: "Shop" },
  { href: "/#about", label: "About" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-bg/80 px-5 py-3.5 backdrop-blur md:bg-fixed md:left-0 md:h-screen md:w-50 md:flex-col md:items-stretch md:justify-start md:border-b-0 md:border-r md:px-8 md:py-10">
      <Link
        href="/"
        className="text-[19px] font-bold tracking-tight text-heading"
      >
        shan<span className="text-gold">digital</span>.dev
      </Link>

      <nav aria-label="Main" className="mt-16 hidden flex-col gap-[5.5] md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[15px] font-medium text-muted transition-colors hover:text-heading"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden flex-1 md:block" />

      <Link href="/#contact"
      className="rounded-lg border border-teal px-3.5 py-2 text-sm font-semibold text-teal transition-colors hover:border-gold hover:text-gold md:py-3 md:text-center">
        Hire Me
      </Link>

      <div className="hidden items-center gap-2.5 border-t. border-line pt-5 text-[13px] text-faint md:flex">
        <div className="size-8 rounded-full border border-line bg-card" aria-hidden="true" />
        Kanagawa, Japan
      </div>

    </aside>
  );
}

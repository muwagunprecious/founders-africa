import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-foreground px-6 py-16 text-background sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex max-w-md flex-col gap-5">
            <h1 className="text-2xl font-bold">Founders Africa</h1>
            <p className="text-sm leading-7 text-gray-400 sm:text-base">
              Backing Africa&apos;s most ambitious founders through fellowship, community, and capital.
            </p>
            <div className="flex gap-4">
              <Link href="" className="hover:text-gray-400">
                <FaXTwitter size={20} />
              </Link>
              <Link href="" className="hover:text-gray-400">
                <FaInstagram size={20} />
              </Link>
              <Link href="" className="hover:text-gray-400">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm sm:text-base">
            <h2 className="text-xs uppercase tracking-[0.22em] text-gray-400">
              Programmes
            </h2>
            <Link href="/program/tech-incubation" className="hover:text-gray-400">
              Tech Incubation
            </Link>
            <Link href="/program/accelerator-program" className="hover:text-gray-400">
              Accelerator Programme
            </Link>
            <Link href="/program/remote-incubation" className="hover:text-gray-400">
              Remote Incubation
            </Link>
            <Link href="/program/research-internship" className="hover:text-gray-400">
              Research Internship
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-sm sm:text-base">
            <h2 className="text-xs uppercase tracking-[0.22em] text-gray-400">
              Summit
            </h2>
            <Link href="/summit" className="hover:text-gray-400">
              About Summit
            </Link>
            <Link href="/summit" className="hover:text-gray-400">
              Speakers
            </Link>
            <Link href="/summit" className="hover:text-gray-400">
              Agenda
            </Link>
            <Link href="/summit" className="hover:text-gray-400">
              Tickets
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-sm sm:text-base">
            <h2 className="text-xs uppercase tracking-[0.22em] text-gray-400">
              Organization
            </h2>
            <Link href="/#about" className="hover:text-gray-400">
              About Us
            </Link>
            <Link href="/#impact" className="hover:text-gray-400">
              Impact Report
            </Link>
            <Link href="/#partners" className="hover:text-gray-400">
              Partners
            </Link>
            <Link href="/#newsletter" className="hover:text-gray-400">
              Newsletter
            </Link>
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />

        <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Founders Africa. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

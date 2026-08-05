import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-20 px-32 bg-foreground text-background">
      <div className="flex flex-row items-start justify-between w-full px-16 text-xl gap-4">
        <div className="w-1/4 flex flex-col gap-6 items-start">
          <h1 className="font-bold text-2xl">Founders Africa</h1>
          <p className="text-gray-400">Backing Africa's most ambitious founders through fellowship, community, and capital.</p>
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

        <div className="flex flex-col text-base gap-4">
          <h2 className="text-gray-400 uppercase">Programmes</h2>
          <Link href="/programmes/tech-incubation" className="hover:text-gray-400">
            Tech Incubation
          </Link>
          <Link href="/programmes/accelerator-program" className="hover:text-gray-400">
            Accelerator Programme
          </Link>
          <Link href="/programmes/remote-incubation" className="hover:text-gray-400">
            Remote Incubation
          </Link>
          <Link href="/programmes/research-internship" className="hover:text-gray-400">
            Research Internship
          </Link>
        </div>

        <div className="flex flex-col text-base gap-4">
          <h2 className="text-gray-400 uppercase">Summit</h2>
          <Link href="" className="hover:text-gray-400">
            About Summt
          </Link>
          <Link href="" className="hover:text-gray-400">
            Speakers
          </Link>
          <Link href="" className="hover:text-gray-400">
            Agenda
          </Link>
          <Link href="" className="hover:text-gray-400">
            Tickets
          </Link>
        </div>

        <div className="flex flex-col text-base gap-4">
          <h2 className="text-gray-400 uppercase">Organization</h2>
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/impact" className="hover:text-gray-400">
            Impact Report
          </Link>
          <Link href="/partners" className="hover:text-gray-400">
            Partners
          </Link>
          <Link href="/press" className="hover:text-gray-400">
            Press
          </Link>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-400 mt-8"></div>

      <div className="flex flex-row items-center justify-between w-full px-16 text-xl text-gray-400">
        <p>
          &copy; 2026 Founders Africa. All rights reserved.
        </p>
        <div className="flex flex-row items-center justify-between gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
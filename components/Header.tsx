import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center bg-slate-900 px-8 py-3 rounded-lg">
      <Link className="text-white font-semibold" href="/">
        Techloset Solution's
      </Link>
      <Link className="bg-white p-2 rounded-xl" href="/addTopic">
        Add Topic
      </Link>
    </nav>
  );
}

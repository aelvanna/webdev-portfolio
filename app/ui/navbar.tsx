import Link from "next/link";
import { Card } from "pixel-retroui";

export default function NavBar() {
  return (
    <aside>
      <div>
        <Card
          bg="#fdff9e"
          textColor="#000000"
          borderColor="#000000"
          shadowColor="#fedc34"
        >
          <div className="flex gap-4 text-md text-center underline underline-offset-2 navbar">
            <Link href="/" className="hover:bg-amber-50">
              Home
            </Link>
            <Link href="/about-me" className="hover:bg-amber-50">
              About Me
            </Link>
            <Link href="/work" className="hover:bg-amber-50">
              Work
            </Link>
          </div>
        </Card>
      </div>
    </aside>
  );
}

import Link from "next/link";
import { Card } from "pixel-retroui";

export default function NavBar() {
  return (
    <aside>
      <Card
        bg="#fdff9e"
        textColor="#000000"
        borderColor="#000000"
        shadowColor="#fedc34"
        className="md:w-xl lg:w-4xl"
      >
        <div className="flex flex-row gap-6 text-xl underline underline-offset-2">
          <Link href="#" className="hover:bg-amber-50">
            Home
          </Link>
          <Link href="#" className="hover:bg-amber-50">
            About Me
          </Link>
          <Link href="#" className="hover:bg-amber-50">
            Work
          </Link>
        </div>
      </Card>
    </aside>
  );
}

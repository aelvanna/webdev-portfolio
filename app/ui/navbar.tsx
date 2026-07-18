import Link from "next/link";
import { Card } from "pixel-retroui";

export default function SideNav() {
  return (
    <aside>
      <Card
        bg="#fdff9e"
        textColor="#000000"
        borderColor="#000000"
        shadowColor="#fedc34"
        className="md:w-xl lg:w-4xl"
      >
        <div className="flex flex-row gap-6">
          <Link href="#" className="text-xl">
            Home
          </Link>
          <Link href="#" className="text-xl">
            About Me
          </Link>
          <Link href="#" className="text-xl">
            Work
          </Link>
        </div>
      </Card>
    </aside>
  );
}

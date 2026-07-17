import { Card } from "pixel-retroui";
import Link from "next/link";

export default function SideNav() {
  return (
    <aside>
      <Card
        bg="#fdff9e"
        textColor="#000000"
        borderColor="#000000"
        shadowColor="#fedc34"
        className="p-4 md:h-48 flex flex-row gap-10 md:flex-col md:gap-5 items-center justify-center"
      >
        <Link href="#" className="text-xl">
          Home
        </Link>
        <Link href="#" className="text-xl">
          About Me
        </Link>
        <Link href="#" className="text-xl">
          Work
        </Link>
      </Card>
    </aside>
  );
}

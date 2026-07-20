import Link from 'next/link';
import { Card } from 'pixel-retroui';

export default function NavBar() {
  return (
    <aside>
      <div className="p-5">
        <Card bg="#fdff9e" textColor="#000000" borderColor="#000000" shadowColor="#fedc34">
          <div className="text-md navbar flex gap-4 text-center underline underline-offset-2">
            <Link href="/">Home</Link>
            <Link href="/about-me">About Me</Link>
            <Link href="/work">Work</Link>
          </div>
        </Card>
      </div>
    </aside>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/users">Users</Link>
      <button className="bg-primary text-white rounded">
        Add to cart
      </button>
    </div>
  );
}

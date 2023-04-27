import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="border-t-2 w-full flex justify-between items-center p-3">
      <Link href="/">
        <Image src="/homeally.png" alt="home icon" width={40} height={40} />
      </Link>
      <Link href="/notifications">
        <Image
          src="/notificationsally.png"
          alt="notifications icon"
          width={40}
          height={40}
        />
      </Link>
      <Link href="/add-post">
        <Image src="/addally.png" alt="add icon" width={40} height={40} />
      </Link>
      <Link href="/saved-posts">
        <Image src="/saveally.png" alt="save icon" width={40} height={40} />
      </Link>
      <Link href="/user-profile">
        <Image
          src="/profileally.png"
          alt="profile icon"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}

export default Footer;

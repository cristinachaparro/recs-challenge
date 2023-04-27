import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col ml-3 mt-4">
      <Link className="flex items-center mb-2" href="/">
        <Image src="/homeally.png" alt="home icon" width={40} height={40} />
        <span className="text-gray-500 text-xl ml-1">Home</span>
      </Link>
      <Link className="flex items-center mb-2" href="/notifications">
        <Image
          src="/notificationsally.png"
          alt="notifications icon"
          width={40}
          height={40}
        />
        <span className="text-gray-500 text-xl ml-1">Notifications</span>
      </Link>
      <Link className="flex items-center mb-2" href="/saved-posts">
        <Image src="/saveally.png" alt="save icon" width={40} height={40} />
        <span className="text-gray-500 text-xl ml-1">Saves</span>
      </Link>
      <Link className="flex items-center mb-2" href="/user-profile">
        <Image
          src="/profileally.png"
          alt="profile icon"
          width={40}
          height={40}
        />
        <span className="text-gray-500 text-xl ml-1">Profile</span>
      </Link>
    </div>
  );
}

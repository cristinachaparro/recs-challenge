import Image from "next/image";

function Footer() {
  return (
    <div className="border-t-2 w-full flex justify-between items-center p-3">
      <Image src="/homeally.png" alt="home icon" width={40} height={40} />
      <Image
        src="/notificationsally.png"
        alt="notifications icon"
        width={40}
        height={40}
      />
      <Image src="/addally.png" alt="add icon" width={40} height={40} />
      <Image src="/saveally.png" alt="save icon" width={40} height={40} />
      <Image src="/profileally.png" alt="profile icon" width={40} height={40} />
    </div>
  );
}

export default Footer;

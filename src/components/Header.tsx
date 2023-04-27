import Image from "next/image";

function Header() {
  return (
    <nav className="w-full flex justify-between items-center p-3 border-b-2">
      <a href="https://getally.ai/">
        <Image width={40} height={40} src="/logo.jpg" alt="Ally logo" />
      </a>
      <div className="flex border rounded-md border-sky-500 p-1">
        <Image
          className="m-2"
          width={15}
          height={15}
          src="/search.svg"
          alt="magnifying glass"
        />
        <input type="text" placeholder="Search" />
      </div>
      <Image width={30} height={30} src="/menu.png" alt="menu logo" />
    </nav>
  );
}

export default Header;

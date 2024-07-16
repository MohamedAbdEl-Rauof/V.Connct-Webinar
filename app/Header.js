import Link from 'next/link';

const Header = () => {
  return (

    <header className="flex items-center justify-between p-4 bg-white">


      <Link href="/" legacyBehavior>
        <a>
          <img src="/logo.jpg" alt="Logo" className="w-40 sm:w-48 md:w-80 pl-4 sm:pl-10 md:pl-20" />
        </a>
      </Link>


      <nav className="relative hidden md:block">

        <ul className="flex list-none font-bold text-lg md:text-xl lg:text-3xl">

          <li className="relative mx-2 sm:mx-3 md:mx-4 p-2 cursor-pointer">
            <Link href="/page1" legacyBehavior>
              <a className="block hover:text-yellow-500">Partnerships</a>
            </Link>
          </li>

          <li className="relative mx-2 sm:mx-3 md:mx-4 p-2 cursor-pointer">
            <Link href="/page2" legacyBehavior>
              <a className="block hover:text-yellow-500">Why US</a>
            </Link>
          </li>

          <li className="relative mx-2 sm:mx-3 md:mx-4 p-2 cursor-pointer">
            <Link href="/page3" legacyBehavior>
              <a className="block hover:text-yellow-500">FAQs</a>
            </Link>
          </li>

        </ul>

      </nav>


      <div className="flex items-center pr-4 sm:pr-10 md:pr-20">

        <button className="ml-2 sm:ml-3 md:ml-4 p-2 sm:p-3 md:p-4 border-2 border-yellow-500 rounded-xl bg-white text-yellow-500 font-bold cursor-pointer hover:bg-yellow-500 hover:text-black"> Login </button>

        <button className="ml-2 sm:ml-3 md:ml-4 p-2 sm:p-3 md:p-4 border-2 border-yellow-500 rounded-2xl bg-white text-yellow-500 font-bold cursor-pointer hover:bg-yellow-500 hover:text-black"> Sign up </button>

      </div>
      
    </header>

  );
};

export default Header;

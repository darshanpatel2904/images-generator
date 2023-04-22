import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { account } from "./config";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const [userDetails, setUserDetails] = useState({});
  const [login, setLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const getData = account.get()
    getData.then(
      function(response){
           setUserDetails(response)
           setLogin(!login)
          console.log(response);
      },
      function(error){
          console.log(error);
      }
    )
  },[router])

  const handleLogout = async () => {
    const promise = account.deleteSession('current');

    promise.then(function (response) {
      router.push('/login')
      setLogin(!login)
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
  }
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="">
              <h2 className="text-4xl font-semibold text-violet-400">Artify</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-16 md:space-y-0">
              {pages.map((page, key) => {
                return (
                  <li className="font-normal text-lg" key={key}>
                    <Link href={page.href}>{page.name}</Link>
                  </li>
                );
              })}
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                {login ? (
                  <div onClick={handleLogout}>
                   <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={require('../public/images.jpeg')} alt=""/>
                   </div>
                ) : (
                  <button
                    className="px-5 py-3 text-lg font-semibold rounded bg-violet-400 text-white"
                    onClick={() => router.push("/login")}
                  >
                    login
                  </button>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

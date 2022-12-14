import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/country.jpeg";
import Client from "../assets/images/client.jpeg";
import Integrator from "../assets/images/integrator.jpeg";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation();

  const navigation =
    localStorage.getItem("role") === "admin"
      ? [
          {
            name: "Dashboard",
            href: "#",
            current: location.pathname === "/dashboard",
            link: "/dashboard",
          },
          { name: "Search", href: "#", current: false },
          {
            name: "Report",
            href: "#",
            current: location.pathname === "/reports",
            link: "/reports",
          },
          {
            name: "Create Ticket",
            href: "#",
            current: location.pathname === "/addTicket",
            link: "/addTicket",
          },
          {
            name: "Add User",
            href: "#",
            current: location.pathname === "/createUser",
            link: "/createUser",
          },
          {
            name: "Upload File",
            href: "#",
            current: location.pathname === "/uploadFile",
            link: "/uploadFile",
          },
        ]
      : [
          {
            name: "Dashboard",
            href: "#",
            current: location.pathname === "/dashboard",
            link: "/dashboard",
          },
          { name: "Search", href: "#", current: false },
          {
            name: "Report",
            href: "#",
            current: location.pathname === "/reports",
            link: "/reports",
          },
        ];

  const navigate = useNavigate();

  if (location.pathname === "/") return;

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <span>Incident Management System</span>
                    <div>
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={Client}
                        alt="Your Company"
                      />
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={Logo}
                        alt="Your Country"
                      />

                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={Integrator}
                        alt="Your Integrator"
                      />
                    </div>
                    <img
                      className="hidden h-12 w-auto lg:block"
                      src={Client}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={Logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-12 w-auto lg:block"
                      src={Integrator}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          className={classNames(
                            item.current
                              ? "bg-sky-500 text-white"
                              : "text-gray-700 hover:bg-sky-500 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-sky-500 text-white"
                        : "text-gray-800 hover:bg-sky-500 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="w-full border-b-2 border-gray-300"></div>
    </>
  );
};

export default Navbar;

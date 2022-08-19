import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import FAQ from "./FAQ";
import Support from "./Support";

const navigation = [
  { name: "Home", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Support", href: "#" },
  { name: "Partners", href: "#" },
];

export default function Home() {
  return (
    <>
      <div className="relative bg-[#013f28] overflow-hidden min-h-screen">
        <div
          className="hidden sm:block sm:absolute sm:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
            width={364}
            height={384}
            viewBox="0 0 364 384"
            fill="none"
          >
            <defs>
              <pattern
                id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} fill="currentColor" />
              </pattern>
            </defs>
            <rect
              width={364}
              height={384}
              fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
            />
          </svg>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-16 w-auto sm:h-10"
                      src="images/main.png"
                      alt=""
                    />
                    {/* <span className="h-8 w-auto sm:h-10">🤝</span> */}
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-10 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#063020]"
                >
                  v1.0
                </a>
              </div>
            </nav>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    v1.0
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center text-white bg-[#063020] rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-sm font-semibold leading-5 bg-[#0f865a] rounded-full">
                        Hi there
                      </span>
                      <span className="ml-4 text-sm">Welcome to Help.com</span>
                      <ChevronRightIcon
                        className="ml-2 w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                      Platform to help charity organizations
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Help.com is a platform that gives you access to make
                      donations to different charity organizations. We are
                      trying to make it easy for charity homes to recieve
                      donation and make this world a better place.
                    </p>
                    <p className="mt-8 text-base text-white font-semibold sm:mt-10">
                      Our Partners
                    </p>
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-start justify-between">
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                            alt="Tuple"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                            alt="Workcation"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                            alt="StaticKit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div className="px-4 py-8 sm:px-10">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Make A Donation
                        </p>
                      </div>

                      <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                          <div>
                            <label htmlFor="name" className="sr-only">
                              Select Organization
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              // autoComplete="name"
                              placeholder="Select Organization"
                              required
                              className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="mobile-or-email"
                              className="sr-only"
                            >
                              Name on card
                            </label>
                            <input
                              type="text"
                              name="mobile-or-email"
                              id="mobile-or-email"
                              // autoComplete="email"
                              placeholder="Name on card"
                              required
                              className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="mobile-or-email"
                              className="sr-only"
                            >
                              Card Number
                            </label>
                            <input
                              type="text"
                              name="mobile-or-email"
                              id="mobile-or-email"
                              // autoComplete="email"
                              placeholder="Card number"
                              required
                              className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="flex flex-row space-x-3">
                            <div className="">
                              <label
                                htmlFor="mobile-or-email"
                                className="sr-only"
                              >
                                Expiration month (MM)
                              </label>
                              <input
                                type="text"
                                name="mobile-or-email"
                                id="mobile-or-email"
                                autoComplete="cc-exp"
                                placeholder="Expiration month (MM)"
                                required
                                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="">
                              <label
                                htmlFor="mobile-or-email"
                                className="sr-only"
                              >
                                CVC
                              </label>
                              <div className="">
                                <input
                                  type="text"
                                  name="cvc"
                                  id="cvc"
                                  autoComplete="cc-exp"
                                  placeholder="Expiration year (YY)"
                                  className="inline-flex w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-row space-x-3">
                            <div>
                              <label htmlFor="cvc" className="sr-only">
                                CVC
                              </label>
                              <input
                                id="cvc"
                                name="cvc"
                                type="text"
                                placeholder="CVC"
                                // autoComplete="current-password"
                                required
                                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div>
                              <label htmlFor="amount" className="sr-only">
                                Amount
                              </label>
                              <input
                                id="amount"
                                name="amount"
                                type="text"
                                placeholder="Amount"
                                // autoComplete="current-password"
                                required
                                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#013f28]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Donate
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="px-4 py-4 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                      <p className="text-xs leading-5 text-gray-500">
                        By donating, you agree to our{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Terms
                        </a>
                        ,{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Data Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Cookies Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <FAQ />
      <Support />
    </>
  );
}
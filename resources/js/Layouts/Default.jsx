//import React
import React, { useState } from "react";

//import Link, usePage
import { Link, usePage } from "@inertiajs/inertia-react";

function Layout({ children }) {
    const [navbar, setNavbar] = useState(false);
    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <header>
                <nav className="flex items-center justify-between flex-wrap bg-black p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">
                            SG Library
                        </span>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-teal-200 hover:border-teal-200"
                            onClick={() => setNavbar(!navbar)}
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`w-full flex-grow ${
                            navbar ? "block" : "hidden"
                        } lg:flex lg:items-center lg:w-auto`}
                    >
                        <div
                            className="text-sm lg:flex-grow"
                            id="navbarSupportedContent4"
                            data-te-collapse-item
                        >
                            {auth.user ? (
                                <>
                                    <Link
                                        className="inline-block text-sm px-4 py-2 me-2 leading-none text-white border-white hover:border-transparent hover:text-teal-200 mt-4 lg:mt-0"
                                        href="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        className="inline-block text-sm px-4 py-2 me-2 leading-none text-white border-white hover:border-transparent hover:text-teal-200 mt-4 lg:mt-0"
                                        href="/anggota"
                                    >
                                        Anggota
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        className="inline-block text-sm px-4 py-2 me-2 leading-none text-white border-white hover:border-transparent hover:text-teal-200 mt-4 lg:mt-0"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </>
                            )}
                        </div>
                        <div>
                            {auth.user ? (
                                <Link
                                    className="inline-block text-sm px-4 py-2 me-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                                    href="/logout"
                                    method="post"
                                >
                                    KELUAR
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        className="inline-block text-sm px-4 py-2 me-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                                        href="/login"
                                    >
                                        MASUK
                                    </Link>
                                    <Link
                                        className="inline-block text-sm px-4 py-2 leading-none border rounded bg-white border-white hover:border-white hover:text-white hover:bg-black mt-4 lg:mt-0"
                                        href="/register"
                                    >
                                        DAFTAR
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            <main className="mt-6 overflow-hidden">{children}</main>

            <footer className="m-4 bottom-0">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a
                            href="/"
                            className="hover:underline"
                        >
                            Sofyan Group™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Layout;

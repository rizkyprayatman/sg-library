//import hook useState from react
import React, { useState } from "react";
//import layout
import Layout from "../../Layouts/Default";
//import head
import { Head, usePage } from "@inertiajs/inertia-react";
//import inertia adapter
import { Inertia } from "@inertiajs/inertia";
//import Link
import { Link } from "@inertiajs/inertia-react";

function Login() {
    //destruct props "errors"
    const { errors } = usePage().props;

    //define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordSee, setPasswordSee] = useState(false);

    //method "storeLogin"
    const storeLogin = async (e) => {
        e.preventDefault();

        Inertia.post("/login", {
            //data
            email: email,
            password: password,
        });
    };

    //change type password
    const passwordDetail = async (e) => {
        setPasswordSee(e.target.checked);
    };

    return (
        <>
            <Head>
                <title>Login Account</title>
            </Head>
            <Layout>
                <div className="flex justify-center ">
                    <div className="mt-10 w-screen md:w-1/4 mx-10 md:mx-2 rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4 ">
                            <div className="mb-4">
                                <h1 className="font-bold">MASUK</h1>
                                <hr />
                            </div>
                            <form className="w-full" onSubmit={storeLogin}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="email"
                                            type="email"
                                            value={email}
                                            placeholder="emailvalid@mail.com"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <div className="text-red-500 text-xs italic">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="password"
                                            type={
                                                passwordSee == true
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="passwordmu"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        {errors.password && (
                                            <div className="text-red-500 text-xs italic">
                                                {errors.password}
                                            </div>
                                        )}
                                        <div className="flex items-center mb-4">
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value={passwordSee}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                onChange={passwordDetail}
                                            />
                                            <label
                                                htmlFor="default-checkbox"
                                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                lihat password
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-green-500 hover:bg-blue-700 text-white py-1 px-4 rounded me-3"
                                    >
                                        LOGIN
                                    </button>
                                    <Link
                                        href={`/register`}
                                        className="bg-slate-500 hover:bg-slate-700 text-white py-1.5 px-4 rounded"
                                    >
                                        DAFTAR
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Login;

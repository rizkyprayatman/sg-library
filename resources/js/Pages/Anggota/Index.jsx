//import React
import React, { useState } from "react";

//import layout
import Layout from "../../Layouts/Default";

//import Link
import { Head, Link } from "@inertiajs/inertia-react";

export default function anggotaIndex({ anggotas, session }) {
    const [alert, setAlert] = useState(session.message);

    const handleClose = () => {
        setAlert(null);
    };

    return (
        <>
            {" "}
            <Head>
                <title>Anggota Perpustakaan</title>
            </Head>{" "}
            <Layout>
                <div>
                    <div className="w-screen">
                        <div>
                            <div className="mx-10">
                                <Link
                                    href="/anggota/create"
                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                >
                                    TAMBAH ANGGOTA
                                </Link>
                            </div>
                            {alert != null && (
                                <div className="text-left mt-5 mx-10 flex justify-start">
                                    <div
                                        className="p-2 bg-green-800 border rounded-lg items-center text-white leading-none flex justify-between"
                                        role="alert"
                                    >
                                        <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                                            Success
                                        </span>
                                        <span className="font-semibold mr-2 text-left flex-auto">
                                            {session.message}
                                        </span>
                                        <div
                                            id="closeButton"
                                            onClick={handleClose}
                                        >
                                            <svg
                                                class="fill-current h-6 w-6 text-white"
                                                role="button"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <title>Close</title>
                                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {anggotas.length === 0 ? (
                                <div className="flex justify-center">
                                    <div className="mt-10 w-screen mx-10 rounded overflow-hidden shadow-lg bg-white">
                                        <div className="px-6 py-4 ">
                                            <p className="text-center">
                                                Belum ada anggota
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-center">
                                    <div className="mt-10 w-screen mx-10 overflow-hidden rounded shadow-lg bg-white">
                                        <div className="px-6 py-4 overflow-x-auto">
                                            <table className="table-auto border-collapse border-gray-500">
                                                <thead>
                                                    <tr>
                                                        <th className="w-auto border border-gray-400 px-4 py-2">
                                                            No
                                                        </th>
                                                        <th className="border border-gray-400 w-screen px-4 py-2">
                                                            Nama
                                                        </th>
                                                        <th className="border border-gray-400 w-screen px-4 py-2">
                                                            Email
                                                        </th>
                                                        <th className="border border-gray-400 w-screen px-4 py-2">
                                                            No. HP
                                                        </th>
                                                        <th className="border border-gray-400 w-full px-4 py-2">
                                                            Alamat
                                                        </th>
                                                        <th className="border border-gray-400 w-screen px-4 py-2">
                                                            Aksi
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {anggotas.map(
                                                        (anggota, index) => (
                                                            <tr key={index}>
                                                                <td className="border border-gray-400 px-5 py-2 text-center">
                                                                    {index + 1}
                                                                </td>
                                                                <td className="border border-gray-400 px-5 py-2">
                                                                    {
                                                                        anggota.nama
                                                                    }
                                                                </td>
                                                                <td className="border border-gray-400 px-5 py-2">
                                                                    {
                                                                        anggota.email
                                                                    }
                                                                </td>
                                                                <td className="border border-gray-400 px-5 py-2">
                                                                    {
                                                                        anggota.no_hp
                                                                    }
                                                                </td>
                                                                <td className="border border-gray-400 px-5 py-2">
                                                                    {
                                                                        anggota.alamat
                                                                    }
                                                                </td>
                                                                <td className="border border-gray-400 px-5 py-2">
                                                                    <div className="flex justify-center">
                                                                        <Link
                                                                            href={`/anggota/${anggota.id}`}
                                                                            className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-4 me-2 rounded"
                                                                        >
                                                                            SHOW
                                                                        </Link>
                                                                        <Link
                                                                            href={`/anggota/${anggota.id}?edit=true`}
                                                                            className="bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-4 me-2 rounded"
                                                                        >
                                                                            EDIT
                                                                        </Link>
                                                                        <Link
                                                                            href={`/anggota/${anggota.id}/delete`}
                                                                            className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 me-2 rounded"
                                                                        >
                                                                            DELETE
                                                                        </Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

//import hook useState from react
import React, { useState } from "react";

//import layout
import Layout from "../../Layouts/Default";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Link
import { Link } from "@inertiajs/inertia-react";

export default function DeleteAnggota({ anggota }) {
    //define state
    const [id, setId] = useState(anggota.id);
    const [nama, setNama] = useState(anggota.nama);
    const [email, setEmail] = useState(anggota.email);
    const [no_hp, setNoHP] = useState(anggota.no_hp);
    const [alamat, setAlamat] = useState(anggota.alamat);

    //function "deleteAnggota"
    const deleteAnggotaId = async (id) => {
        Inertia.delete(`/anggota/${id}`);
    };

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="mt-10 w-screen mx-10 rounded overflow-hidden shadow-lg bg-white">
                    <div className="px-6 py-4 ">
                        <div className="mb-4">
                            <h1 className="font-bold">Delete Anggota</h1>
                            <hr />
                        </div>
                        <form className="w-full">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="nama_lengkap"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        readOnly
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="nama_lengkap"
                                        type="text"
                                        value={nama}
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        readOnly
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="email"
                                        type="email"
                                        value={email}
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="no_hp"
                                    >
                                        No. HP
                                    </label>
                                    <input
                                        readOnly
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="no_hp"
                                        type="number"
                                        value={no_hp}
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="alamat"
                                    >
                                        Alamat
                                    </label>
                                    <textarea
                                        readOnly
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="alamat"
                                        value={alamat}
                                        rows={4}
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => deleteAnggotaId(id)}
                                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded me-3"
                                >
                                    <i className="fa fa-save"></i> DELETE
                                </button>
                                <Link
                                    href={`/anggota`}
                                    className="bg-slate-500 hover:bg-slate-700 text-white py-1.5 px-4 rounded"
                                >
                                    KEMBALI
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

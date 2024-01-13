//import hook useState from react
import React, { useState } from "react";

//import layout
import Layout from "../../Layouts/Default";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function CreateAnggota({ errors }) {
    //define state
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [no_hp, setNoHP] = useState("");
    const [alamat, setAlamat] = useState("");

    //function "storeAnggota"
    const storeAnggota = async (e) => {
        e.preventDefault();

        Inertia.post("/anggota/create", {
            nama: nama,
            email: email,
            no_hp: no_hp,
            alamat: alamat,
        });
    };

    const handleReset = () => {
        setNama("");
        setEmail("");
        setNoHP("");
        setAlamat("");
    };

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="mt-10 w-screen mx-10 rounded overflow-hidden shadow-lg bg-white">
                    <div className="px-6 py-4 ">
                        <div className="mb-4">
                            <h1 className="font-bold">Tambah Anggota</h1>
                            <hr />
                        </div>
                        <form className="w-full" onSubmit={storeAnggota}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="nama_lengkap"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="nama_lengkap"
                                        type="text"
                                        placeholder="Nama Lengkap"
                                        onChange={(e) =>
                                            setNama(e.target.value)
                                        }
                                    />
                                    {errors.nama && (
                                        <div className="text-red-500 text-xs italic">
                                            {errors.nama}
                                        </div>
                                    )}
                                </div>
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
                                        htmlFor="no_hp"
                                    >
                                        No. HP
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="no_hp"
                                        type="number"
                                        placeholder="+628++"
                                        onChange={(e) =>
                                            setNoHP(e.target.value)
                                        }
                                    />
                                    {errors.no_hp && (
                                        <div className="text-red-500 text-xs italic">
                                            {errors.no_hp}
                                        </div>
                                    )}
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="alamat"
                                    >
                                        Alamat
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="alamat"
                                        placeholder="jalan kaliurang, kec. a, kab. b, prov. c"
                                        onChange={(e) =>
                                            setAlamat(e.target.value)
                                        }
                                        rows={4}
                                    ></textarea>
                                    {errors.alamat && (
                                        <div className="text-red-500 text-xs italic">
                                            {errors.alamat}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-blue-700 text-white py-1 px-4 rounded me-3"
                                >
                                    SAVE
                                </button>
                                <button
                                    type="reset"
                                    onClick={handleReset}
                                    className="bg-yellow-500 hover:bg-grey-700 text-white py-1 px-4 rounded"
                                >
                                    RESET
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

//import hook useState from react
import React, { useState } from "react";
//import layout
import Layout from "../../Layouts/Default";
//import inertia adapter
import { Inertia } from "@inertiajs/inertia";
//import Link
import { Link } from "@inertiajs/inertia-react";

export default function EditAnggota({ errors, anggota, edit }) {
    //define state
    const [nama, setNama] = useState(anggota.nama);
    const [email, setEmail] = useState(anggota.email);
    const [no_hp, setNoHP] = useState(anggota.no_hp);
    const [alamat, setAlamat] = useState(anggota.alamat);

    //function "updateAnggota"
    const updateAnggota = async (e) => {
        e.preventDefault();

        Inertia.put(`/anggota/${anggota.id}`, {
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
                            <h1 className="font-bold">
                                {edit == true
                                    ? "Edit Anggota"
                                    : "Detail Anggota"}
                            </h1>
                            <hr />
                        </div>
                        <form className="w-full" onSubmit={updateAnggota}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="nama_lengkap"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        readOnly={edit === true ? false : true}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="nama_lengkap"
                                        type="text"
                                        value={nama}
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
                                        readOnly={edit === true ? false : true}
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
                                        htmlFor="no_hp"
                                    >
                                        No. HP
                                    </label>
                                    <input
                                        readOnly={edit === true ? false : true}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="no_hp"
                                        type="number"
                                        placeholder="+628++"
                                        value={no_hp}
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
                                        readOnly={edit === true ? false : true}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="alamat"
                                        placeholder="jalan kaliurang, kec. a, kab. b, prov. c"
                                        value={alamat}
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
                                {edit == true ? (
                                    <>
                                        <button
                                            type="submit"
                                            className="bg-green-500 hover:bg-blue-700 text-white py-1 px-4 rounded me-3"
                                        >
                                            SAVE
                                        </button>
                                        <button
                                            type="reset"
                                            onClick={handleReset}
                                            className="bg-yellow-500 hover:bg-grey-700 text-white py-1 px-4 me-2 rounded"
                                        >
                                            RESET
                                        </button>
                                        <Link
                                            href={`/anggota`}
                                            className="bg-slate-500 hover:bg-slate-700 text-white py-1.5 px-4 rounded"
                                        >
                                            KEMBALI
                                        </Link>
                                    </>
                                ) : (
                                    <Link
                                        href={`/anggota`}
                                        className="btn bg-slate-500 hover:bg-slate-700 text-white py-1 px-4 rounded"
                                    >
                                        KEMBALI
                                    </Link>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

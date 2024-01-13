//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

function Dashboard() {
    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Layout>
                <div className="flex justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            <div className="text-xl mb-2">
                                Selamat Datang <strong>{auth.user.name}</strong>
                            </div>
                            <p className="text-gray-700 text-base">
                                SG Library adalah Portal Anggota Perpustakaan
                                dari Sofyan Group
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Dashboard;

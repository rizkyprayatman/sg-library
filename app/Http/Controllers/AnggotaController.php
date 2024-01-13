<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    public function __invoke()
    {
        //get all anggota
        $anggotas = Anggota::latest()->get();

        return inertia('Anggota/Index', [
            'anggotas' => $anggotas
        ]);
    }

    /**
     * create
     *
     * @return void
     */
    public function create()
    {
        return inertia('Anggota/Create');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email|unique:anggota,email',
            'no_hp' => 'required|string|max:15',
            'alamat' => 'required|string',
        ]);

        Anggota::create($request->all());

        return redirect()->route('anggota.index')->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * show
     *
     * @param  mixed $anggota
     * @return void
     */
    public function show($id, Request $request)
    {
        $anggota = Anggota::findOrFail($id);

        $edit = $request->query('edit') || false;

        return inertia('Anggota/Edit', [
            'anggota' => $anggota,
            'edit' => $edit
        ]);
    }

    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $anggota
     * @return void
     */

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email|unique:anggota,email,' . $id,
            'no_hp' => 'required|string|max:15',
            'alamat' => 'required|string',
        ]);

        $anggota = Anggota::findOrFail($id);
        $anggota->update($request->all());

        return redirect()->route('anggota.index')->with('success', 'Data Berhasil Diupdate!');
    }

    public function deleteById($id)
    {
        $anggota = Anggota::findOrFail($id);

        return inertia('Anggota/Delete', [
            'anggota' => $anggota
        ]);
    }

    /**
     * destroy
     *
     * @param  mixed $anggota
     * @return void
     */
    public function destroy($id)
    {
        $anggota = Anggota::findOrFail($id);
        $anggota->delete();
        // $checkDeleted = Anggota::find($id);
        // dd($checkDeleted);

        return redirect()->route('anggota.index')->with('success', 'Data Berhasil Dihapus!');
    }
}

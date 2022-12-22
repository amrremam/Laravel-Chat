<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use app\Models\Message;
class MessageController extends Controller
{

    public function index()
    {
        return view('Messages.index');

    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}

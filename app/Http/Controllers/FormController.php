<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        return Form::orderBy('created_at', 'desc')->get();
    }

    public function form($id)
    {
        return Form::find($id);
    }

    public function store(Request $request)
    {
        $form = new Form();

        $form->data = $request->data;

        $form->save();
    }
}

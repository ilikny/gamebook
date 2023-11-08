<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Chapter;
use App\Models\Choice;
use App\Models\Illustration;
use Illuminate\Http\Request;

class GetChapter extends Controller
{
  public function show($id)
  {

    $get_chapter = Chapter::findOrFail($id);

    return $get_chapter;
  }

  public function getChoice($id)
  {
    $get_choice = Choice::where('chapter_id', $id)->get();

    return $get_choice;
  }

  public function getImage($id)
  {
    $get_image = Illustration::where('chapter_id', $id)->get();

    return $get_image;
  }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
  use HasFactory;

  public function choices()
  {
    return $this->hasMany(Choice::class);
  }
}

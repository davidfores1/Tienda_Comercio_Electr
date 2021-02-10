<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = ['id_producto','cantidad','fecha'];

 //Relacion uno a muchos(Inversa)  
public function producto(){
    return $this->belongsTo('App\Models\producto');
}
}

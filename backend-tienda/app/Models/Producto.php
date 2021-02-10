<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    //use HasFactory;
    protected $fillable = ['codigoProducto','nombreProducto','cantidad','proveedor'];



    //Relacion uno a muchos
public function pedidos(){
    return $this->belongsTo(Pedido::class);
}
}



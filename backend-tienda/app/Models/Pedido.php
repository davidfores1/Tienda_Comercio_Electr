<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = ['numeroPedido','id_producto','cantidad','fecha'];

 //Relacion uno a muchos(Inversa)  
public function producto(){
    return $this->hasMany(Producto::class);
}

public static function search($query = ''){

    if(!$query){
         $resultado = Pedido::join("productos", "productos.id", "=", "pedidos.id_producto")
        ->select("pedidos.numeroPedido","pedidos.id_producto", "productos.nombreProducto","productos.cantidad as cant","pedidos.cantidad","pedidos.fecha","productos.proveedor")
        ->orderBy('pedidos.fecha', 'asc')
        ->get();
        return $resultado;
    }

    $resultado = Pedido::join("productos", "productos.id", "=", "pedidos.id_producto")
        ->select("pedidos.numeroPedido","pedidos.id_producto", "productos.nombreProducto","pedidos.cantidad","productos.cantidad as cant","pedidos.fecha","productos.proveedor")
        ->where('numeroPedido','like',"%$query%")
        ->orWhere('fecha','like',"%$query%")
        ->orderBy('pedidos.fecha', 'asc')
        ->get();
        return $resultado;
}


}

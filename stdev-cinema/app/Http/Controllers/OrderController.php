<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Requests\OrderDeleteRequest;
use App\Models\Order;
use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        return OrderResource::collection(
            Order::orderBy('created_at')->get()
        );
    }

    public function store(StoreOrderRequest $request)
    {
        if($request->validated()) {
            $data = $request->validated();
            $seans = DB::table('orders')
            ->where('seans_id', $data['seans_id'])
            ->where('seat', $data['seat'])
            ->get();
            if(count($seans)==0){
                $order = Order::create($data);
                return new OrderResource($order);   
            }else{
                return 'It is Booked';
            }
        }
    }


    public function seats(Request $request, $id)
    {
        $seans = DB::table('orders')
        ->where('seans_id', $id)
        ->get();
        return new OrderResource($seans);
    }


    public function update(UpdateOrderRequest $request,Order $order, $id)
    {
       if( $request->validated()){
            $data = $request->validated();
            $this->updateOrder($data,$id);
       }
        return response()->json(['message' => 'Order updated successfully']);
    }



    public function destroy(OrderDeleteRequest $request,$id)
    {
        $movie = Order::where('id', $id)->first();
        $movie->delete();
        return response('', 204);
    }


    private function updateOrder($data, $id)
    {
        $movie = Order::where('id', $id)->first();

        if($movie) {
            $movie->seans_id = $data['seans_id'];
            $movie->seat = $data['seat'];
            $movie->save();
        }  
        return 'updated';
    }
}

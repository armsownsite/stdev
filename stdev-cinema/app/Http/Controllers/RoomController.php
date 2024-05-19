<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoomRequest;
use App\Http\Requests\UpdateRoomRequest;
use App\Http\Requests\RoomDeleteRequest;
use App\Models\Room;
use App\Http\Resources\RoomResource;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class RoomController extends Controller
{
    public function index(Request $request)
    {
        return RoomResource::collection(
            Room::orderBy('created_at','desc')->get()
        );
    }

    public function store(StoreRoomRequest $request)
    {
        if( $request->validated()){
            $data = $request->validated();
            $room = Room::create($data);
            return new RoomResource($room);
        }    
    }

    
    public function byidController(Request $request, $id)
    {
        $room = Room::where('id', $id)->first();
        return new RoomResource($room);
    }

    public function update(UpdateRoomRequest $request,Room $room, $id)
    {
         
       if( $request->validated()){
            $data = $request->validated();
            $this->updateRoom($data,$id);
       }
        return response()->json(['message' => 'Room updated successfully']);
    }



    public function destroy(RoomDeleteRequest $request,$id)
    {
        $movie = Room::where('id', $id)->first();
        $movie->delete();
        return response('', 204);
    }


    private function updateRoom($data, $id)
    {
        $movie = Room::where('id', $id)->first();
        if($movie) {
            $movie->image = $data['image'];
            $movie->title = $data['title'];
            $movie->slug = $data['slug'];
            $movie->status = $data['status'];
            $movie->description = $data['description'];
            $movie->save();
        }   
        return 'updated';
    }
}

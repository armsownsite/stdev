<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSeansRequest;
use App\Http\Requests\UpdateSeansRequest;
use App\Http\Requests\SeansDeleteRequest;
use App\Models\Seans;
use App\Models\Movie;
use App\Models\Room;
use App\Http\Resources\SeansResource;
use App\Http\Resources\MovieResource;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class SeansController extends Controller
{
    public function index(Request $request)
    {
        return SeansResource::collection(
            Seans::orderBy('created_at')->get()
        );
    }

    public function store(StoreSeansRequest $request)
    {
        if( $request->validated()){
            $data = $request->validated();
            $seans = Seans::create($data);
            return new SeansResource($seans);
        }
    }
    
    public function allSeansMovie(Request $request)
    {
        $now = Carbon::now('UTC');
        $seans = DB::table('seans')
        ->join('movies', 'seans.movies_id', '=', 'movies.id')
        ->join('rooms', 'seans.rooms_id', '=', 'rooms.id')
        ->where('seans.start_time', '>', $now)
        ->select('seans.*', 'movies.*', 'rooms.*','movies.image as mimage','movies.title as mtitle','seans.id as sid')
        ->get();
        return $seans;
    }

    public function oneSeansMovie(Request $request, $id)
    {
        $now = Carbon::now('UTC');
        $seans = DB::table('seans')
        ->join('movies', 'seans.movies_id', '=', 'movies.id')
        ->join('rooms', 'seans.rooms_id', '=', 'rooms.id')
        ->where('seans.start_time', '>', $now)
        ->where('seans.start_time', '>', $now)
        ->where('seans.id', '=', $id)
        ->select('seans.*', 'movies.*', 'rooms.*','movies.image as mimage','movies.title as mtitle')
        ->get();
        return $seans;
    }


    public function seansMovie(Request $request, $id,$mid)
    {
        $now = Carbon::now('UTC');
        $seans = DB::table('seans')
        ->where('id', $id)
        ->where('seans.start_time', '>', $now)
        ->where('seans.start_time', '>', $now)
        ->groupBy('movies.id')
        ->get();
        return new MovieResource($seans);
    }

    public function update(UpdateSeansRequest $request,Seans $seans, $id)
    {
       if( $request->validated()){
            $data = $request->validated();
            $this->updateSeans($data,$id);
       }
        return response()->json(['message' => 'Seans updated successfully']);
    }

    public function destroy(SeansDeleteRequest $request,$id)
    {
        $movie = Seans::where('id', $id)->first();
        $movie->delete();
        return response('', 204);
    }


    private function updateSeans($data, $id)
    {
        $movie = Seans::where('id', $id)->first();
        if($movie) {
            $movie->movies_id = $data['movies_id'];
            $movie->rooms_id = $data['rooms_id'];
            $movie->seans_time = $data['seans_time'];
            $movie->start_time = $data['start_time'];
            $movie->save();
        }
        return 'updated';
    }
}

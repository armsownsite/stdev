<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers;

use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use App\Http\Requests\MovieDeleteRequest;
use App\Models\Movie;
use App\Models\Seans;
use App\Http\Resources\MovieResource;
use App\Http\Resources\SeansMovieResource;



use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class MovieController extends Controller
{
    public function index(Request $request)
    {
        return MovieResource::collection(
            Movie::orderBy('created_at','desc')->get()
        );
    }

    public function store(StoreMovieRequest $request)
    {
        if( $request->validated()){
            $data = $request->validated();
            $movie = Movie::create($data);
            return new MovieResource($movie);
        }   
    }

    public function byidController(Request $request, $id)
    {

        $movie = Movie::where('id', $id)->first();
        return new MovieResource($movie);
    }



    public function seansMovie(Request $request, $id)
    {

        $now = Carbon::now('UTC');
        $seans = DB::table('seans')
        ->select('seans.id as id','movies.image as image', 'movies.id as movie_id','movies.title as title','seans.start_time as start_time') // Selecting columns and aliasing 'seans.id' as 'id'
        ->where('rooms_id', $id)
        ->leftJoin('movies', 'seans.movies_id', '=', 'movies.id')
        ->where('seans.start_time', '>', $now)
        ->get();
        return $seans;

    }

    public function update(UpdateMovieRequest $request,Movie $movie, $id)
    {
       
       if( $request->validated()){
            $data = $request->validated();
            $this->updateMovie($data,$id);
       }
        return response()->json(['message' => 'Movie updated successfully']);
    }



    public function destroy(MovieDeleteRequest $request,$id)
    {
        $movie = Movie::where('id', $id)->first();

        $movie->delete();


        return response('', 204);
    }


    private function updateMovie($data, $id)
    {
      
        $movie = Movie::where('id', $id)->first();

        if($movie) {
            $movie->image = $data['image'];
            $movie->title = $data['title'];
            $movie->slug = $data['slug'];
            $movie->description = $data['description'];

            $movie->save();
        }

        
        return 'updated';
    }
}

const Movies = (props) => {
    return (
        <div>
            <h2 className='text-black font-bold text-3xl ml-10 my-8'>{props.title}</h2>
            
            <div className='grid grid-cols-5 gap-x-2 gap-y-8'>
                {props.movies.map((move) => {
                    return (
                    <div className=''>
                        <div className='flex justify-center'>
                            <img className='rounded-lg shadow-2xl transition duration-200 ease-in-out hover:opacity-50' src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${move.poster_path}`}/>
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-semibold my-3'>{move.title}</p>
                        </div>
                        <p className='truncate text-center my-3'>{move.overview}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Movies;
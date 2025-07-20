
interface MoviecardProps{
    Title:string;
    Year:number;
    Rating:number;
    PosterURL:string;
}

const MovieCard:React.FC <MoviecardProps> = ({ Title,
    Year,
    Rating,
    PosterURL}) => {
  
  const handleclick = () =>{
    console.log(`${Title} ADD`)
  }
  return (
    <div>
        <img src={PosterURL} alt="dave img" />
        <h2>{Title}</h2>
        <p>{Year} ({Rating})</p>
        <button onClick={handleclick}>click me</button>
    </div>
  )
}

export default MovieCard
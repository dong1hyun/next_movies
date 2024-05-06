import axios from "axios"
import Movie from "../../components/movie"
import styles from "../../styles/home.module.css"
import { API_URL } from "../constant"

export const metadata = {
    title: "Home",
}

const getMovies = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map(movie =>{
                return <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                />}
            )}
        </div>
    )
}
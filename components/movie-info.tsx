import axios from "axios";
import { API_URL } from "../app/constant"
import styles from "../styles/movie-info.module.css"

export async function getMovie(id: string) {
    // await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
            <div className={styles.info}>
                <h2 className={styles.title}>{movie.title}</h2>
                <h2>{movie.vote_average.toFixed(1)}</h2>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>homepage</a>
            </div>
        </div>)
}
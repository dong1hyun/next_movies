import axios from "axios"
import { API_URL } from "../app/constant"
import styles from "../styles/movie-similar.module.css"

const getSimilar = async ({ id }: { id: string }) => {
    const response = await axios.get(`${API_URL}/${id}/similar`);
    return response.data;
}

export default async function SimilarMovie({ id }: { id: string }) {
    const similarMovie = await getSimilar({ id });
    return <div className={styles.container}>
        {similarMovie.map(movie => {
            return (
                <div>
                    <h2>{movie.title}</h2>
                    <img src={movie.backdrop_path} />
                </div>
            )
        })}
    </div>
}
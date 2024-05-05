import axios from "axios";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

async function getVideos(id:string) {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    // throw new Error("something broke")
    const response = await axios.get(`${API_URL}/${id}/videos`);
    return response.data;
} 

export default async function MovieVideos({id}:{id: string}) {
    const videos = await getVideos(id);
    return <div className={styles.container}>
        {videos.map((video) => <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name}/>)}
    </div>
} 
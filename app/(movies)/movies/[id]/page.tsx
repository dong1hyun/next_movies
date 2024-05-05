import MovieVideos from "../../../../components/movie-videos"
import MovieInfo, { getMovie } from "../../../../components/movie-info"
import { Suspense } from "react"

interface IParams {
    params: {id: string}
}

export async function generateMetadata({ params: { id } }: IParams) { //동적인 title이 필요한 페이지를 위함
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}

export default async function MovieDetail({ params: { id } }: IParams) {
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
} // suspense가 component를 await 시켜주고 기다리는 동안 fallback 메시지를 내보냄
  // 그리고 컴포넌트가 준비되면 그 UI를 사용자에게 전달함
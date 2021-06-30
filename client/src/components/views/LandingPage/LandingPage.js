import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../../Config';
import MainImage from './Sections/MainImage';

function LandingPage(props) {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {

                console.log(response)

                setMovies([...response.results])
                setMainMovieImage(response.results[0])

            })
    }, [])



    return (
        <div style={{ width: '100%', margin: '0' }}>

            {/* Main Image */}
            {MainMovieImage &&
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />}

            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>Movies By Latest</h2>
                <hr />

                {/* Movie Grid Cards */}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button>Load More</button>
            </div>

        </div>
    )
}

export default withRouter(LandingPage);

import React, { useState, useEffect } from 'react'; import EverythingCard from './EverythingCard';
import Loader from './Loader';

function ForYou() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    function handlePrev() {
        setPage(page - 1);
    }

    function handleNext() {
        setPage(page + 1);
    }

    let pageN = 1;
    let pageSize = 12;
    const q = "sports and health and politics";
    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(
            q
        )}&page=${pageN}&pageSize=${pageSize}&apiKey=d0e9a19b785b494a99befb38e54c32d0`, {
            method: 'GET',

        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(myJson => {
                console.log('API Response:', myJson);
                if (myJson.status === 'ok') { // Check for successful response
                    setTotalResults(myJson.totalResults);
                    setData(myJson.articles);
                } else {
                    setError(myJson.message || 'An error occurred');
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError('Failed to fetch news. Please try again later.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [page]);

    return (
        <>
            {error && <div className="text-red-500 mb-4 text-center mx-auto my-auto">{error}</div>}

            <div className='my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 '>
                {!isLoading ? data.map((element, index) => (
                    <EverythingCard
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        publishedAt={element.publishedAt}
                        url={element.url}
                        author={element.author}
                        source={element.source.name}
                        key={index}
                    />
                )) : <Loader />}
            </div>
            {!isLoading && data.length > 0 && (
                <div className="pagination flex justify-center gap-14 my-10 items-center">
                    <button disabled={page <= 1} className='pagination-btn text-center' onClick={handlePrev}>&larr; Prev</button>
                    <p className='font-semibold opacity-80'>{page} of {Math.ceil(totalResults / pageSize)}</p>
                    <button className='pagination-btn text-center' disabled={page >= Math.ceil(totalResults / pageSize)} onClick={handleNext}>Next &rarr;</button>
                </div>
            )}
        </>
    );
}

export default ForYou;

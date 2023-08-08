import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowPost = () => {
    const navigate = useNavigate();
    const [listedAdvertisements, setListedAdvertisements] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/posts');
                const data = await response.json();
                const advertisements = data.data.posts;
                setListedAdvertisements(advertisements);
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        };
        getPosts();
    }, []);


    // const showSingleListing = (listingId) => {
    //     navigate(`/post/${listingId}`);
    // };

    // const showSingleListing = async (listingUrl) => {
    //     try {
    //         const response = await fetch(listingUrl);
    //         console.log(response)
    //         const body = await response.json();

    //         const listingDetails = body.data;

    //         navigate(`/listing/${listingDetails._id}`);
    //         // navigate(`/shoes/${listingDetails.id}`);

    //     } catch (error) {
    //         console.error("Error fetching single listing:", error);
    //     }
    // };

    const showSingleListing = async (listingUrl) => {
        console.log(listingUrl)
        try {
            const response = await fetch(listingUrl);

            if (!response.ok) {
                throw new Error('Failed to fetch listing');
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Invalid response format');
            }

            const body = await response.json();
            const listingDetails = body.data;

            navigate(`/listing/${listi._id}`);
        } catch (error) {
            console.error("Error fetching single listing:", error);
        }
    };

    return (
        <div>
            <h1>Show Post</h1>
            <ul>
                {listedAdvertisements.map((singleListing) => (
                    <>
                        {console.log(singleListing)}
                        < li key={singleListing._id} >
                            < h2 > {singleListing.title}</h2>

                            <p>{singleListing.description}</p>

                            <button onClick={() => showSingleListing(singleListing._id)}>Show Details</button>
                        </li >
                    </>
                ))
                }
            </ul >
        </div >
    );
};

export default ShowPost;
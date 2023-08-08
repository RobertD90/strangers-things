
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const ShowPost = () => {
//     const navigate = useNavigate();
//     const [listedAdvertisement, setListedAdvertisement] = useState([]);

//     useEffect(() => {
//         const getPosts = async () => {
//             try {
//                 const response = await fetch('https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/posts');
//                 const body = await response.json();
//                 const advertisement = body.data;
//                 setListedAdvertisement(advertisement);
//             } catch (error) {
//                 console.error('Error fetching posts:', error);
//             }
//         };
//         getPosts();
//     }, []);


//     const showSingleListing = async (listingUrl) => {
//         try {
//             const response = await fetch(listingUrl);
//             const body = await response.json();
//             console.log('Single Listing:', body);

//             navigate(`/ShowPost/${body}`); // Replace with the actual path
//         } catch (error) {
//             console.error('Error fetching single listing:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Show Post</h1>
//             <ul>
//                 {listedAdvertisements.map((singleListing) => (
//                     <li key={singleListing._id}>
//                         <h2>{singleListing.title}</h2>
//                         <p>{singleListing.description}</p>
//                         <button onClick={() => showSingleListing(singleListing._id)}>Show Details</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ShowPost;


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

    const showSingleListing = (listingId) => {
        navigate(`/post/${listingId}`);
    };

    return (
        <div>
            <h1>Show Post</h1>
            <ul>
                {listedAdvertisements.map((singleListing) => (
                    <li key={singleListing._id}>
                        <h2>{singleListing.title}</h2>
                        <p>{singleListing.description}</p>
                        <button onClick={() => showSingleListing(singleListing._id)}>Show Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowPost;

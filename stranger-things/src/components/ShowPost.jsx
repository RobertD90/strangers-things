import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowPost = () => {
    const navigate = useNavigate();
    // console.log(navigate)
    // console.log(useNavigate)
    const [listedAdvertisements, setListedAdvertisements] = useState([]);
    const [newAdd, setNewAdd] = useState({
        title: "",
        description: "",
        price: "",
        Location: ""
    });

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(
                    "https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/posts"
                );
                const data = await response.json();
                // console.log(data)
                const advertisements = data.data.posts;
                // console.log(advertisements)
                setListedAdvertisements(advertisements);
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        };
        getPosts();
    }, []);

    const showSingleListing = async (listingUrl) => {
        // console.log(listingUrl);
        try {
            const response = await fetch(listingUrl);
            // console.log(response)
            if (!response.ok) {
                throw new Error("Failed to fetch listing");
            }

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response format");
            }

            const body = await response.json();
            const listingDetails = body.data;

            navigate(`/listing/${listingDetails._id}`);
        } catch (error) {
            console.error("Error fetching single listing:", error);
        }
    };

    const handleNewAdd = async () => {
        try {
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newAdd),
                }
            );
            const data = await response.json();
            setListedAdvertisements([...listedAdvertisements, data.data.post]);
            setNewAdd({
                title: "",
                description: "",
                price: "",
                Location: ""
            });
        } catch (error) {
            console.log("Error uploading a new Add:", error);
        }
    };

    return (
        <div>
            <h1>Show Post</h1>
            <ul>
                {listedAdvertisements.map((singleListing) => (
                    <li key={singleListing._id}>
                        <h2>{singleListing.title}</h2>
                        <p>{singleListing.description}</p>
                        <button onClick={() => showSingleListing(singleListing._id)}>
                            Show Details
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Add New Advertisement</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newAdd.title}
                    onChange={(e) => setNewAdd({ ...newAdd, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newAdd.description}
                    onChange={(e) => setNewAdd({ ...newAdd, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newAdd.price}
                    onChange={(e) => setNewAdd({ ...newAdd, price: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={newAdd.Location}
                    onChange={(e) => setNewAdd({ ...newAdd, Location: e.target.value })}
                />

                <button onClick={handleNewAdd}>Add</button>
            </div>
        </div>
    );
};

export default ShowPost;

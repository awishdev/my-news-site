import React from "react";

function AuthorCard({ author }) {

    return (
        <div className="card">
            <h2>{author.name}</h2>
            <p>{author.bio}</p>
        </div>
    )
}

export default AuthorCard;
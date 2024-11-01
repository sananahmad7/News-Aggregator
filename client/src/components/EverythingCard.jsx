import React from "react";

function EverythingCard(props) {
    return (
        <div className="everything-card mt-10">

            <div className="everything-card flex flex-wrap p-5 gap-1 mb-1">
                <b className="title">{props.title || "Untitled"}</b>
                <div className="everything-card-img mx-auto">
                    <img className="everything-card-img" src={props.imgUrl || "default-image-url.jpg"} alt="img" />
                </div>
                <div className="description">
                    <p className="description-text leading-7">
                        {props.description ? props.description.substring(0, 200) : "No description available."}                    </p>
                </div>

                <div className="info">
                    <div className="source-info flex items-center gap-2">
                        <span className="font-semibold">Source:</span>
                        <a
                            href={props.url || "#"}
                            target="_blank"
                            className="link underline break-words"


                        >
                            {props.source ? props.source.substring(0, 70) : "Unknown Source"}
                        </a>
                    </div>
                    <div className="origin flex flex-col">
                        <p className="origin-item">
                            <span className="font-semibold">Author: </span>
                            {props.author || "Anonymous"}
                        </p>
                        <p className="origin-item">
                            <span className="font-semibold">Published At: </span>
                            {props.publishedAt ? new Date(props.publishedAt).toLocaleString() : "Not Available"}
                        </p>
                    </div>
                </div>

            </div>

            {/* Added the new card content with styles */}
            <div className="flex lg:flex-row">
                <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{ backgroundImage: `url(${props.imageUrlLeft})` }}
                    title={props.imageLeftTitle}
                ></div>
                <div className="border rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            {props.memberIcon && (
                                <svg
                                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    {props.memberIcon}
                                </svg>
                            )}
                            {props.memberText}
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">
                            {props.cardTitle}
                        </div>
                        <p className="text-gray-700 text-base">{props.cardDescription}</p>
                    </div>
                    <div className="flex items-center">
                        {props.authorImage && (
                            <img
                                className="w-10 h-10 rounded-full mr-4"
                                src={props.authorImage}
                                alt="Avatar"
                            />
                        )}
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">{props.authorName}</p>
                            <p className="text-gray-600">{props.publishedDate}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EverythingCard;

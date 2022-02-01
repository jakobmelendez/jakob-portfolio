import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div className="bg-blue-200 min-h-screen p-12">Loading...</div>;

    return (
        <main className="bg-blue-200 min-h-screen p-12">
            {/* <img /> */}
            <div className="p-5 lg:pt-10 container mx-auto">
                <section className="bg-blue-700 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-16 h-32 lg:w-48 lg:h-64 mr-8" alt={ author.name }/>
                    <div className="text-kg flex flex-col justify-center">
                        <h1 className="sans-serif text-6xl text-blue-200 mb-4">
                            Hey! I'm{" "}
                            <span className="text-white">{ author.name }</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={ author.bio } projectId="697dng0p" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
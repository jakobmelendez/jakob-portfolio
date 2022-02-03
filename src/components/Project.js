import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-blue-200 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center sans-serif">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Here is some work I have done</h2>
                <section className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    { projectData && projectData.map((project, index) => (
                    <article className="realtive rounded-lg shadow-exl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                            <a href={ project.link } alt={ project.title } target="_blank" rel="noopener noreferrer">
                                { project.title }
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                { new Date(project.date).toLocaleDateString() }
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                { project.place }
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                { project.projectType }
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{ project.description }</p>
                            <a href={ project.link } rel="noopener noreferrer" target="_blank" className="text-blue-700 font-bold hover:underline hover:text-red-400">
                                View The Project{" "}
                                {/* <span></span> */}
                            </a>
                        </div>
                    </article>
                    )) }
                </section>
            </section>
        </main>
    )
}
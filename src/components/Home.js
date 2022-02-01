import React from "react"
import image from "../tpa.jpeg"

export default function Home() {
    return (
        <main className="bg-blue-200 min-h-screen py-12">
            <img src={ image } alt="Tampa Bay Skyline at Night" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold sans-serif leading-none lg:leading-snug home-name">Hi! I'm Jakob.</h1>
            </section>
        </main>
    )
}
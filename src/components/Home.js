import React from "react"
import image from "../tpa.jpeg"

export default function Home() {
    return (
        <main className="bg-blue-200 min-h-screen py-12">
            <img src={ image } alt="Tampa Bay Skyline at Night" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold sans-serif leading-none lg:leading-snug home-name">Hi! I'm Jakob.</h1>
            </section>
            <div className="text-black sans-serif flex justify-center">
                Tab Icon by&nbsp;<a href="https://freeicons.io/profile/75801">Hilmy Abiyyu Asad</a> &nbsp;on&nbsp; <a href="https://freeicons.io"> freeicons.io </a>
            </div>
        </main>
    )
}
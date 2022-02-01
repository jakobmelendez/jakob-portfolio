import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                        activeClassName="text-black"
                        exact className="inline-flex items-center py-6 px-3 mr-4 hover:text-blue-800 text=4xl font-bold sans-serif tracking-widest"
                    >
                        Jakob Melendez
                    </NavLink>
                    <NavLink to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-blue-800"
                        activeClassName="bg-blue-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-blue-800"
                        activeClassName="bg-blue-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-blue-800"
                        activeClassName="bg-blue-700"
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/jakobmelendez/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
                    <SocialIcon url="https://github.com/jakobmelendez" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
                    <SocialIcon url="mailto:mjakob00@yahoo.com" network="email" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    )
}
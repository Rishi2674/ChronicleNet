import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    
    render() {
        return (
            <div>
                <nav className="border-gray-200 bg-slate-400">
                    <div className=" flex flex-wrap  justify-start mx-auto p-4">
                            <div className="text-2xl font-semibold whitespace-nowrap cursor-pointer mr-5">ChronicleNet</div>
                        {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search"> */}
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-400">
                                <li>
                                    <Link to="/" className="block py-2 px-3 text-gray-900 bg-slate-400 rounded hover:text-gray-100 cursor-pointer">Home</Link>
                                </li>
                                <li>
                                    <Link to="/business" className="block py-2 px-3 text-gray-900 rounded bg-slate-400 hover:text-gray-100 cursor-pointer">Business</Link>
                                </li>
                                <li>
                                    <Link to="/entertainment" className="block py-2 px-3 text-gray-900 rounded bg-slate-400 hover:text-gray-100 cursor-pointer">Entertainment</Link>
                                </li>
                                <li>
                                    <Link to="/health" className="block py-2 px-3 text-gray-900 rounded bg-slate-400 hover:text-gray-100 cursor-pointer">Health</Link>
                                </li>
                                <li>
                                    <Link to="/sports" className="block py-2 px-3 text-gray-900 rounded bg-slate-400 hover:text-gray-100 cursor-pointer">Sports</Link>
                                </li>
                                <li>
                                    <Link to="/technology" className="block py-2 px-3 text-gray-900 rounded bg-slate-400 hover:text-gray-100 cursor-pointer">Technology</Link>
                                </li>
                                <li>
                                    <Link to="/science" className="block py-2 px-3 text-gray-900 rounded bg-slate-400 hover:text-gray-100 cursor-pointer">Science</Link>
                                </li>


                               
                            </ul>
                        {/* </div> */}
                    </div>
                </nav>


            </div>
        )
    }
}

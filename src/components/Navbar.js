import React from "react";
import Link from "next/link"

function Navbar() {
    return (
        <ul>
            <li>
                <Link href="../">
                    Home
                </Link>
            </li>
            <li>
                <Link href="../about">
                    About
                </Link>
            </li>
        </ul>
    )
}

export default Navbar;
export default function Navbar() {
    return(
        <nav className="border p-2 bg-amber-200">
            <ul className="flex justify-center space-x-20">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}
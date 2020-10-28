import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h2><Link className="link" to={"/"}>GITFIND</Link></h2>
        </div>
    )
}
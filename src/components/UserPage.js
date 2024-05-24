import { Link } from "react-router-dom";

const UserPage = () => {
    return (
        <section>
            <h1>Users Page</h1>
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default UserPage

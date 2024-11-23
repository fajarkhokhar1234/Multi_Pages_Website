import { Link, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    const error = useRouteError()
    return (
        <section>
            <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:'center', height:"65vh"}}>
                <h1>Error!</h1>
                <p>page you are looking for could not found!</p>
                { error && <p>{error.data}</p>}
                <Link to="/">
                <button onClick={handleGoBack}>Go Back</button>
                </Link>
            </div>
        </section>
    )
}
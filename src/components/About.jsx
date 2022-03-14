const defaultUrl = "https://via.placeholder.com/215"

function About({ image = defaultUrl, about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;
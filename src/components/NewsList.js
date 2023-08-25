function NewsList({ news }) {
    return (
        <ul>
            {news.map((item, index) => (
                <>
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <h6>{item.description}</h6>
                        <p>Source: {item.source.name}</p>
                    </li>
                    <br />
                </>
            ))}
        </ul>
    );
}

export default NewsList;

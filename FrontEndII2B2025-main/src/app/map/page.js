export default function Map() {
    const pessoas = ['Paulo', 'Pedro', 'Ana', 'Laura', 'Jeferson', 'Jéssica'];
    return (
        <div>
            <h1>MAP</h1>
            {pessoas}
            <ul>
                {pessoas.map((p, id) => (
                    <li key={id}>{p}</li>
                ))
                }
            </ul>
        </div>
    )
}
import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainRepositorio({ idioma } : IdiomaProps) {
    return (
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_center">
                        <h1>{ idioma == "es" ? "Repositorio" : "Repository" }</h1>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainRepositorio
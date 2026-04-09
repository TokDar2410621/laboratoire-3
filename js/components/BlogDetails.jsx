function BlogDetails({ id }) {
    const [publication, setPublication] = React.useState(null);

    React.useEffect(function () {
        if (id) {
            getPublication(id).then(function (data) {
                setPublication(data);
            });
        }
    }, [id]);

    if (!publication) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            <div className="mb-4">
                <img
                    src="https://images.unsplash.com/photo-1761839257046-84e95464cc52?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De"
                    className="img-fluid w-100 border border-2"
                    alt="Image principale du blog"
                />
            </div>
            <div className="text-center mb-5">
                <h1 id="publication-titre" className="display-4 fw-bold">{publication.titre}</h1>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                    <p id="publication-contenu" className="lead">{publication.contenu}</p>
                </div>
            </div>
        </div>
    );
}

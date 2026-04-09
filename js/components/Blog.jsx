function Blog() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const [refreshKey, setRefreshKey] = React.useState(0);

    if (!id) {
        return <p>Publication introuvable.</p>;
    }

    function handleCommentAdded() {
        setRefreshKey(function (prev) { return prev + 1; });
    }

    return (
        <main className="container my-5">
            <BlogDetails id={id} />
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h3 className="mb-3">Commentaires</h3>
                    <AddComment publicationId={id} onCommentAdded={handleCommentAdded} />
                    <CommentList publicationId={id} refreshKey={refreshKey} />
                </div>
            </div>
        </main>
    );
}

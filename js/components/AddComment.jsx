function AddComment({ publicationId, onCommentAdded }) {
    const [contenu, setContenu] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!contenu.trim()) return;

        var commentaire = {
            publicationId: publicationId,
            datePublication: new Date().toISOString().split("T")[0],
            contenu: contenu
        };

        postCommentaire(commentaire).then(function () {
            setContenu("");
            if (onCommentAdded) {
                onCommentAdded();
            }
        });
    }

    return (
        <form className="mb-5 border p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Votre commentaire..."
                    value={contenu}
                    onChange={function (e) { setContenu(e.target.value); }}
                ></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary rounded-0 px-4">Submit</button>
            </div>
        </form>
    );
}

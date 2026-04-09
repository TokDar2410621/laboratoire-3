function AjoutPublication() {
    const [titre, setTitre] = React.useState("");
    const [auteur, setAuteur] = React.useState("");
    const [contenu, setContenu] = React.useState("");

    React.useEffect(function () {
        $("#confirmDialog").dialog({
            autoOpen: false,
            modal: true,
            title: "Confirmation",
            buttons: {
                "Confirmer": function () {
                    $(this).dialog("close");

                    var publication = {
                        titre: document.getElementById("titre").value,
                        auteur: document.getElementById("auteur").value,
                        datePublication: new Date().toISOString().split("T")[0],
                        contenu: document.getElementById("contenu").value
                    };

                    postPublication(publication).then(function () {
                        window.location.href = "index.html";
                    });
                },
                "Annuler": function () {
                    $(this).dialog("close");
                }
            }
        });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        $("#confirmDialog").dialog("open");
    }

    return (
        <main className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="display-5 fw-bold mb-4">Ajouter une publication</h1>
                    <form id="formAjout" className="border p-4" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="titre" className="form-label fw-bold">Titre</label>
                            <input type="text" className="form-control" id="titre" required
                                value={titre} onChange={function (e) { setTitre(e.target.value); }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="auteur" className="form-label fw-bold">Auteur</label>
                            <input type="text" className="form-control" id="auteur" required
                                value={auteur} onChange={function (e) { setAuteur(e.target.value); }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contenu" className="form-label fw-bold">Contenu</label>
                            <textarea className="form-control" id="contenu" rows="6" required
                                value={contenu} onChange={function (e) { setContenu(e.target.value); }}></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary rounded-0 px-4">Publier</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

function BlogCard({ id, titre, contenu }) {
    return (
        <div className="col-12 col-lg-4">
            <div className="card h-100 border-2 border-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1729188430230-182d9e9c1cb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt={titre}
                />
                <div className="card-header text-white rounded-0 py-2 px-3">
                    <h5 className="card-title m-0 fw-bold">{titre}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{contenu.substring(0, 150)}...</p>
                    <a href={"detailBlog.html?id=" + id} className="stretched-link"></a>
                </div>
            </div>
        </div>
    );
}

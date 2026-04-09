function Comment({ contenu }) {
    return (
        <div className="d-flex mb-4">
            <div className="flex-shrink-0">
                <i className="bi bi-person-square fs-1 text-dark"></i>
            </div>
            <div className="flex-grow-1 ms-3">
                <p className="mb-0 small">{contenu}</p>
            </div>
        </div>
    );
}

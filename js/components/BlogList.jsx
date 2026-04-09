function BlogList() {
    const [publications, setPublications] = React.useState([]);
    const [filtered, setFiltered] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [sortOption, setSortOption] = React.useState("");

    React.useEffect(function () {
        getPublications().then(function (data) {
            var sorted = data.sort(function (a, b) {
                return new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime();
            });
            setPublications(sorted);
            setFiltered(sorted);
        });
    }, []);

    React.useEffect(function () {
        var result = publications.slice();

        if (searchQuery) {
            result = result.filter(function (p) {
                return p.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.contenu.toLowerCase().includes(searchQuery.toLowerCase());
            });
        }

        if (sortOption === "1") {
            result.sort(function (a, b) {
                return new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime();
            });
        } else if (sortOption === "2") {
            result.sort(function (a, b) {
                return a.titre.localeCompare(b.titre);
            });
        }

        setFiltered(result);
    }, [searchQuery, sortOption, publications]);

    return (
        <main className="container my-5">
            <div className="row mb-5 align-items-center gy-3">
                <div className="col-12 col-md-8">
                    <div className="input-group">
                        <span className="input-group-text border-end-0"><i className="bi bi-search"></i></span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="recherche"
                            value={searchQuery}
                            onChange={function (e) { setSearchQuery(e.target.value); }}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-md-end align-items-center">
                    <label className="me-3 fw-bold">Trier par:</label>
                    <select
                        className="form-select w-auto"
                        value={sortOption}
                        onChange={function (e) { setSortOption(e.target.value); }}
                    >
                        <option value="">Select</option>
                        <option value="1">Date</option>
                        <option value="2">Titre</option>
                    </select>
                </div>
            </div>

            <div className="row g-4">
                {filtered.map(function (pub) {
                    return <BlogCard key={pub.id} id={pub.id} titre={pub.titre} contenu={pub.contenu} />;
                })}
            </div>
        </main>
    );
}

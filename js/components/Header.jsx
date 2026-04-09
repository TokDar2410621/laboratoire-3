function Header() {
    return (
        <header className="border-bottom border-2 py-2">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand p-0" href="index.html">
                        <img src="../img/logo.png" id="logo" alt="Logo CEPI" width="120" height="60" className="img-fluid" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 text-center fw-bold">
                            <li className="nav-item px-3"><a className="nav-link" href="#">Menu1</a></li>
                            <li className="nav-item px-3"><a className="nav-link" href="#">Menu2</a></li>
                            <li className="nav-item px-3"><a className="nav-link" href="#">Menu3</a></li>
                            <li className="nav-item px-3"><a className="nav-link" href="#">Menu4</a></li>
                        </ul>
                    </div>

                    <div className="d-none d-lg-block">
                        <i className="bi bi-person-circle fs-2"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

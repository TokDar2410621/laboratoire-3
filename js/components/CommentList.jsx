function CommentList({ publicationId, refreshKey }) {
    const [commentaires, setCommentaires] = React.useState([]);

    React.useEffect(function () {
        if (publicationId) {
            getCommentaires(publicationId).then(function (data) {
                setCommentaires(data);
            });
        }
    }, [publicationId, refreshKey]);

    return (
        <div className="comments-list">
            {commentaires.map(function (c) {
                return <Comment key={c.id} contenu={c.contenu} />;
            })}
        </div>
    );
}

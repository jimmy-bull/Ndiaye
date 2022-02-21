export default likeAction = (Id, Couleur) => {
    return {
        type: 'ADD_LIKE',
        payload: { id: Id, couleur: Couleur }
    }
}
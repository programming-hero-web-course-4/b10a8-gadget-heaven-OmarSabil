const setFavIcon = ({ url }) => {
    const favIcon = document.getElementById('fav_icon')
    if (favIcon) {
        favIcon.href = url;
    }
    else{
        const favIcon = document.createElement("link");
        favIcon.id = 'fav_icon';
        favIcon.rel = 'icon';
        favIcon.href = url;
        favIcon.type = 'image/x-icon';

        document.head.appendChild(favIcon);
    }

}
export default setFavIcon;
let changePicture = (url) => {
    console.log(typeof(url))
    let regExp = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i

    if(url.match(regExp)) {
        document.getElementById("picture-container").style.backgroundImage = `url(${url})`
    }
    else {
        alert("You must enter a valid image URL")
    }
}
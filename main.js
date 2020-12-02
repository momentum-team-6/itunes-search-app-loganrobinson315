const itunesApi = 'https://itunes-api-proxy.glitch.me/search?'
const audioPlayer = document.querySelector('#audio-player')
const form = document.querySelector('#search')




function getSongs(searchInput) {

    let searchUrl = `${itunesApi}term=${searchInput}`
    console.log(searchUrl)
    fetch(searchUrl)



        .then(res => res.json())
        .then(result => {
            for (let object of result.results) {
                
                renderTrack(object)
            }

        })
}

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const searchInput = document.querySelector('#inputArtist').value
    getSongs(searchInput)

})




function renderTrack(track) {


    const artistCard = document.createElement('div')
    artistCard.classList.add('card')
    cardSection.appendChild(artistCard)

    const artistImage = document.createElement('div')
    artistImage.classList.add('img')
    artistCard.appendChild(artistImage)

    const artistName = document.createElement('h2')
    artistName.classList.add('artist-name')
    artistCard.appendChild(artistName)

    const trackTitle = document.createElement('p')
    trackTitle.classList.add('track-title')
    artistCard.appendChild(trackTitle)

    const trackPreview = document.createElement('div')
    trackPreview.classList.add('track-preview')
    artistCard.appendChild(trackPreview)


    artistImage.innerHTML = `<img class='image' src=${track.artworkUrl100}></img>`
    trackTitle.innerHTML = track.trackName
    artistName.innerHTML = track.artistName
    trackPreview.innerHTML = `<audio
    controls
    src=${track.previewUrl}>
        Your browser does not support the
        <code>audio</code> element.
</audio>
</figure>`
}


// function deleteTracks(track) {

  
    





function clearTracks(cardSection) {
    console.log(cardSection)
    cardSection.innerHTML = ""
   
}

inputArtist.addEventListener('focus', function (event) {
    console.log('CLICKED')
    const cardSection = document.querySelector('#cardSection')
    clearTracks(cardSection)

})



axios
.get('https://fortnite-api.theapinetwork.com/store/get')
.then(function(response) {
    var items = response.data.data
    var divitems = document.getElementById('items')

    items.forEach(item => {
        var img = document.createElement('img')
        img.setAttribute('src', item.item.images.information)
        img.setAttribute('alt', item.item.name)

        divitems.appendChild(img)
    })
})
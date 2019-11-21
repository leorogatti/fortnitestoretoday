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

var updateTime= setInterval(function() {
    var date= new Date
    
    var hour= 23 - date.getUTCHours()
    var minute = 59 - date.getUTCMinutes()
    var seconds = 60 - date.getUTCSeconds()

    if (hour < 10) {
        hour = '0' + hour
    }
    
    if (minute < 10) {
        minute = '0' + minute
    }

    if (seconds < 10) {
        seconds = '0' + seconds  
    }

    var timetoUpdate = hour + ':' + minute + ':' + seconds

    if (timetoUpdate === '00:00:00'){
        clearInterval(updateTime)
        setInterval(function() {
            location.reload()
        }, 5000);

    }

    document.getElementById('TimeToUpdate').innerHTML = timetoUpdate
}, 1000);


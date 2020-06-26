function isPass (validate){
    return validate.includes(false)
}
function refineData(rawData){
    let data = rawData.data()
    data.id = rawData.id
    return data
}
function refineTime(detailTime){
    let timestamp = detailTime.toDate()
    let day = timestamp.getDate()
    let month = timestamp.getMonth()
    let year = timestamp.getFullYear()
    let minute = timestamp.getMinutes()
    let hour = timestamp.getHours()
    let time = `${day}/${month+1}/${year} || ${hour}:${minute}`
    return time
}
function changeRoom(e){
    let checkData = model.converstations[e.dataset.index]
    document.getElementById('topTitle').innerText = checkData.title
    document.getElementById('detail-time').innerText = refineTime(checkData.timestamp)
    let userDetail = document.getElementById('rooms-userDetail')
    console.log(checkData.member)
    for(let member of checkData.member){
        console.log(member)
    }
}
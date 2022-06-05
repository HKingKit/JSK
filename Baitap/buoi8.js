const covidList = document.getElementById('Covid-list')
console.log(covidList)

const callApi = async () => {
    let res = await fetch(`https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST`)
    res = await res.json()
    let Covid = '';
    for(let i=0 ; i<res.detail.length ; i++){
        console.log(res.detail[i])
        Covid += `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${res.detail[i].name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Tổng Số Ca: ${res.detail[i].cases}</li>
            <li class="list-group-item">Số Người Tử Vong : ${res.detail[i].death}</li>
            <li class="list-group-item">Số Ca Mắc Covid Ngày Hôm Nay : ${res.detail[i].casesToday}</li>
        </ul>
    </div>`
    console.log(Covid)
    }
    covidList.innerHTML = Covid;
}
callApi()
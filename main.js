let so = Number(prompt("Số của bạn là: "));


for (so = 4; so <= 20; so=so+1){
    if (so % 2 == 0) {
        console.log(`Số của bạn là: ${so}`);
    }
    else if (so > 20) {
        console.log(`Chỉ nhập từ 4-20`);
        }
}

for(i=0;i<5;i++) {
    for(j=0;j<=i;j++) {
        document.writeln("1")
		}
        document.writeln("<br/>")
}



function clock() {
    var gio = document.getElementById("hour");
    var phut = document.getElementById("minute");
    var giay = document.getElementById("second");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(clock, 1000);

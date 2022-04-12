setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform    = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    // document.getElementById('background').style.backgroundImage="url(https://source.unsplash.com/1600x900/?dark,simple-background,black)";
    document.getElementById('background').style.backgroundImage="url(https://source.unsplash.com/random/1600x900/)";
}, 1000);
//  background.style.backgroundImage=`url()`;
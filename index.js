console.log('connected');
 let hour = document.getElementById('h1')
 let minute = document.getElementById('h2')
 let second = document.getElementById('h3')

 setInterval(() => {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let hourHand = 30*h + m/2
    let minuteHand = 6*m
    let secondHand = 6*s
    hour.style.transform = `rotate(${hourHand}deg)`
    minute.style.transform = `rotate(${minuteHand}deg)`
    second.style.transform = `rotate(${secondHand}deg)`
    
 }, 1000);
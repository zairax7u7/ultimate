function lookday(){
    const dayofweek = document.getElementById('date_day')
    var namedays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    var newdate = new Date ()
    var getDay = newdate.getDay() -1
    dayofweek.textContent = `${namedays[getDay]}`
}
setInterval(lookday, 1)

function lookmonth (){
    const nameweek = document.getElementById('date_month')
    var months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
    var newmonth = new Date ()
    var getMonth = newmonth.getMonth()
    nameweek.textContent = `${months[getMonth]}`
}
setInterval(lookmonth, 1)

function looknumberday (){
    const numberday = document.getElementById('number_day')
    var fecha = new Date ();
    var numerodia = fecha.getDate();
    numberday.textContent = numerodia
}
setInterval(looknumberday,1)

function lookhour (){
    const hournow = document.getElementById('hour_now')
    var hora = new Date ();
    var hourHora = hora.getHours();
    var minutesMinutos = hora.getMinutes();
    if(minutesMinutos <= 9){
        hournow.textContent = `${hourHora}:0${minutesMinutos}`
    }else{
        hournow.textContent = `${hourHora}:${minutesMinutos}`
    }
}
setInterval(lookhour, 1)

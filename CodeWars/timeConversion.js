function timeConversion(s) {

    let time = s.slice(0, 8)
    let type = s.slice(-2)
    let hours = time.slice(0, 2)

    switch (type) {
        case  'PM':
            hours == '01' ? hours = '13' : hours
            hours == '02' ? hours = '14' : hours
            hours == '03' ? hours = '15' : hours
            hours == '04' ? hours = '16' : hours
            hours == '05' ? hours = '17' : hours
            hours == '06' ? hours = '18' : hours
            hours == '07' ? hours = '19' : hours
            hours == '08' ? hours = '20' : hours
            hours == '09' ? hours = '21' : hours
            hours == '10' ? hours = '22' : hours
            hours == '11' ? hours = '23' : hours
            hours == '00' ? hours = '12' : hours


            break;
       
        case  'AM':
            hours == '12' ? hours = '00': hours
            break;

        default:
            break;
    }



    console.log(hours + time.slice(2))
}

timeConversion('07:05:45PM')
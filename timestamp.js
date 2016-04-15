
function outPut(argTime) {
    
    var strTime = String(argTime);
    
    var monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
    
    var reg = new RegExp(/^([a-zA-Z]+)[ ](\d{2}), (\d{4})$/);
    var result = strTime.match(reg);

    var obj = {};
    obj.unix = null;
    obj.natural = null;
    
    if (isNaN(argTime) === false) {
        var tst = Number(argTime, 10);
        var dt = new Date(tst * 1000);
        
        obj.unix = tst;
        obj.natural = monthNames[dt.getMonth()] + " " + 
                      dt.getDate() + ", " + dt.getFullYear();
              
    } else if (result !== null) {

        if(monthNames.indexOf(result[1]) !== -1) {
            obj.unix = new Date(result[0]).getTime()/1000;
            obj.natural = result[1] + " " + result[2] + ", " + result[3];
        }
    }
    
    return JSON.stringify(obj);
    
}

module.exports.outPut = outPut;
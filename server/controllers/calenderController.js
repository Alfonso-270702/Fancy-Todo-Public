const axios = require('axios')
class CalenderController{
    static showAll(req,res,next){
        // console.log(req.params)
        const {country,year} = req.params
        // https://getfestivo.com/v2/holidays?api_key=51e5e9f3662960d5cb0355448856a8df&country=ID&year=2020
        axios({
            method: 'GET',
            url: `https://getfestivo.com/v2/holidays?api_key=${process.env.KEY}&country=${country}&year=${year}`

        })
        .then(response=>{
            let {data} = response
            res.status(200).json(data.holidays)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = CalenderController
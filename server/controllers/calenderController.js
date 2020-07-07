const axios = require('axios')
class CalenderController{
    static showAll(req,res,next){
        const {country,year} = req.params
        // https://holidayapi.com/v1/holidays?key=${key}&country=${country}&year=${year}
        axios({
            method: 'GET',
            url: `https://holidayapi.com/v1/holidays?key=${process.env.KEY}&country=${country}&year=${year}`

        })
        .then(response=>{
            let {data} = response
            res.status(200).json({
                holidays: data
            })
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = CalenderController
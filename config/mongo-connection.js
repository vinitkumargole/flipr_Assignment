const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=function(done){
    const url='mongodb+srv://vinitkumar20049:ppgL53MsS869YkLj@flipr.a2idthg.mongodb.net/'
    const dbname='flipr'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)

        done()
    })
}



module.exports.get=function(){
    return state.db;
}
const connection = require("./database");

const UserQuery = class{
    static SetUser =(data)=>{
        let sql = `INSERT INTO users(nom,email) VALUES('${data.nom}','${data.email}')`;
        connection.query(sql, function(err,res){
            if(err) {
                console.log('zsdfghgfdsdfgh',err)
                return err;
            }else {
                return {res:'res'};
            }
           
        })

    }
}
module.exports = UserQuery;
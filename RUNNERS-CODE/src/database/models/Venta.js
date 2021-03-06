module.exports = (sequelize, dataTypes) => {
    let alias = 'Ventas';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        release_date:{
           type: dataTypes.DATE
        },
        total:{
            type: dataTypes.DECIMAL(10,2)
        }
    };
    let config= {
        tableName:'Ventas',
        timestamps:false
    };

    const Venta =sequelize.define(alias,cols,config)
    Venta.associate = (models) => {
        // Medios_Pago
        Venta.belongsTo(models.Medios_Pago, {
        as: "medio_Pago",
        foreignKey: "medio_Pago_id",
        })
    };

    return Venta;
}

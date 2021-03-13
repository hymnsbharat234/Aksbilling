const { resolveInclude } = require("ejs")
const Admin = require('../models/admin');

module.exports.addProject = async(req, res) => {

    console.log(req.body)
    await Admin.create({
        addproject: {
            projectname: req.body.projectname,
            projectincharge: req.body.projectincharge,
            phone: req.body.phone,
            projectstarting: req.body.projectstarting,
            projectending: req.body.projectending,
            projectarea: req.body.projectarea
        }


    })
    return res.redirect('back')
}

module.exports.addStock = async(req, res) => {

    console.log(req.body)
    await Admin.create({
        addstock: {
            projectname: req.body.projectname,
            product: req.body.product,
            quantity: req.body.quantity,
            mrp: req.body.mrp,
            purchase: req.body.purchase
        }


    })
    return res.redirect('back')
}
module.exports.addEnteries = async(req, res) => {

    console.log(req.body)
    await Admin.create({
        addenteries: {
            additem: req.body.additem,
            itemprice: req.body.itemprice,
            itemunit: req.body.itemunit

        }


    })
    return res.redirect('back')
}
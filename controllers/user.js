const Admin = require('../models/admin');

const config = require('../config/twilio');
const client = require('twilio')(config.accountSID, config.authToken);

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

module.exports.sendOtp = async(req, res) => {
    if (req.body.phone.length > 10) {
        req.flash('error', 'Please do not use (+91 or 0) before your phone number.');
        return res.redirect('back');
    }

    let user = await Admin.findOne({ phone: req.body.phone });

    if (user) {
        req.flash('error', 'Account already linked with this mobile number');
        return res.redirect('back');
    } else {

        client
            .verify
            .services(config.serviceID)
            .verifications
            .create({
                to: `+91${req.body.phone}`,
                channel: 'sms'
            }).then((data) => {
                return res.render('verify_otp', {
                    title: 'Phone verification',
                    phone: req.body.phone
                });
            });

    }
}
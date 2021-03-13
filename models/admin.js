const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const AVATAR_PATH = path.join('/uploads/admin/avatars');
const newpath = path.join(__dirname, '..', AVATAR_PATH);
if (!fs.existsSync(newpath)) {
    fs.mkdirSync(newpath, { recursive: true });
}



const adminSchema = mongoose.Schema({

    avatar: {
        type: String
    },
    phone: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    addproject: [{
        projectname: {
            type: String
        },
        projectincharge: {
            type: String
        },
        phone: {
            type: String
        },
        projectstarting: {
            type: String

        },
        projectending: {
            type: String
        },
        projectvaluation: {
            type: String
        },
        contact: [{
            projectarea: {
                type: String

            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            pincode: {
                type: String
            },
        }],

    }],
    stocks: [{
        product: {
            type: String
        },
        quantity: {
            type: String
        },
        mrp: {
            type: String
        },
        displayprice: {
            type: String
        },
        purchase: {
            type: String
        },
        price: {
            type: String
        },
    }],
    addenteries: [{
        additem: {
            type: String

        },
        itemprice: {
            type: String

        },
        itemquantity: {
            type: String
        },
        unitcost: {
            type: String
        },
        serial: {
            type: String
        },
        information: {
            type: String
        },
        amount: {
            type: String
        },
    }],


})
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

//static function
adminSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');

adminSchema.statics.avatarPath = AVATAR_PATH;

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;
const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
        volunteer:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Volunteer', //Model Name
        },
        incharge:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Volunteer', //Model Name
        },
        name:{
            type:String,
        },
        company:{
            type:String,
        },
        contactNumber:{
            type:String,
        },
        email:{
            type:String,
        },
        status:{
            type:String, 
            enum:[
                'notCalled',
                'calledAccepted',
                'calledDeclined',
                'calledPostponed',
                'calledNotReachable',
                'emailedAccepted',
                'emailedAwaitingResponse',
                'emailedDeclined',
                'blacklisted'
                ],
            default: 'notCalled'
        },
        interviewMode:{
            type:String,
        },
        HRCount:{
            type:Number,
        },
        transport:{
            type:String
        },
        address:{
            type:String,
        },
        internship:{
            type:String,
        },
        department:{
            type:String
        },
        // dept:[{
        //     INT:Boolean,
        //     CSE:Boolean,
        //     ADS:Boolean,
        //     ECE:Boolean,
        //     EEE:Boolean,
        //     BIO:Boolean,
        //     CHE:Boolean,
        //     CVE:Boolean,
        //     AUT:Boolean,
        //     MEC:Boolean,
        //     MAR:Boolean,
        // }],
        comments:{
            type:String,
        },
    }
)
module.exports = mongoose.model('contact',contactSchema)

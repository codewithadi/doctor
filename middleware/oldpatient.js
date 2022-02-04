const Patient = require('../models/patientModel')

const oldpatient = (req, res, next) => {
    try {
        Patient.findOne({fileid:req.body.fileid,patientid:req.body.patientid}, function(error, patient)   {
            if(error)
                return res.status(500).json({msg: "This file number or patientid not exist"})
           req.patient=patient
          
            next();})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = oldpatient
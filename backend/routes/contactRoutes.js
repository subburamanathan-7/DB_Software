const express = require('express');
const router = express.Router();


const {listContacts, addContact, updateContact, deleteContact, globalList, getContact, transferContact, fileUpload} = require('../controllers/contactController')
const {authenticateVolunteer} = require('../middlewares/authMiddleware')

router.route('/api/database/').get(authenticateVolunteer,listContacts).post(authenticateVolunteer,addContact)
router.route('/api/database/:id').get(authenticateVolunteer,getContact).put(authenticateVolunteer,updateContact).delete(authenticateVolunteer,deleteContact)

router.route('/api/database/upload').post(authenticateVolunteer,fileUpload)
router.route('/api/database/list/globalHR').get(authenticateVolunteer,globalList)
router.route('/api/database/transfer/:id').put(authenticateVolunteer,transferContact)


module.exports = router;

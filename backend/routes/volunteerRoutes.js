const express = require('express');
const router = express.Router();

const {authenticateVolunteer} = require('../middlewares/authMiddleware')

const {registerVolunteer, loginVolunteer, getMe, getDirectors, getUsers} = require('../controllers/volunteerController');

router.route('/api/volunteer/register').post(authenticateVolunteer,registerVolunteer)
router.route('/api/volunteer/login').post(loginVolunteer)

router.route('/api/volunteer/profile').get(authenticateVolunteer,getMe)
router.route('/api/volunteer/directors').get(authenticateVolunteer,getDirectors)
router.route('/api/volunteer/users').get(authenticateVolunteer,getUsers)

module.exports = router;

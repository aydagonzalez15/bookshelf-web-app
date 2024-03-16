
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

//POST	/posts/:id/comments	Create a comment for a post (1:M)	Needs Payload
router.post('/books/:id/comments', commentsCtrl.create)



module.exports = router;
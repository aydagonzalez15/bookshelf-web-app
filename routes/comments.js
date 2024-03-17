
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

//POST	/posts/:id/comments	Create a comment for a post (1:M)	Needs Payload
router.post('/books/:id/comments', commentsCtrl.create)

router.delete('/comments/:id', commentsCtrl.delete)

//PUT	/comments/:id	Update specified comment	"Shallow" route / Needs payload
router.put('/comments/:id', commentsCtrl.update)

///to add EDIT Skill must use GET--> /skills/:id/edit
// router.get('/comments/:id/edit', commentsCtrl.edit)


// PUT	/comments/:id	Update specified comment	"Shallow" route / Needs payload

module.exports = router;
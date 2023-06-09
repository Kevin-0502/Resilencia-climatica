const { Router } = require('express');
const router = Router();
const messageController = require('../controllers/messageController');

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

router.get('/api/list', messageController.list);

router.get('/api/list/:id', messageController.show);

router.post('/api/list', messageController.add);

router.put('/api/list/:id', messageController.update);

router.delete('/api/list/:id', messageController.delete);


module.exports = router;
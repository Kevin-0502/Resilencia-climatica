const { Router } = require('express');
const router = Router();
const dataController = require('../controllers/dataController');

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

router.get('/api/list', dataController.list);

router.get('/api/list/:id', dataController.show);

router.post('/api/list', dataController.add);

router.put('/api/list/:id', dataController.update);

router.delete('/api/list/:id', dataController.delete);


module.exports = router;
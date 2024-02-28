import {Router} from 'express';
import * as blogController from './blog.controller.js';
const router = Router();

router.get('/', blogController.getBlog);
router.post('/',blogController.addBlog);
router.patch('/:id',blogController.update);
router.delete('/:id',blogController.destroy);
export default router;
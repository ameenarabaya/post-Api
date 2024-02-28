import { Router } from "express";
import * as userController from './users.controller.js';
const router = Router();
router.get('/',userController.getUser);
router.patch('/:id',userController.update)
router.delete('/:id',userController.destroy)
    
export default router;
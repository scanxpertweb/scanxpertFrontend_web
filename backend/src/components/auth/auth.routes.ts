import express, { Request, Response } from 'express';
import * as AuthController from './auth.controllers';

const router = express.Router();

router.post('/verify-token', (req: Request, res: Response) => {
    AuthController.verifyIdToken(req, res);
  });
  
  router.post('/register', (req: Request, res: Response) => {
    AuthController.registerUser(req, res);
  });
  router.post('/check-user', (req: Request, res: Response) => {
    AuthController.checkUserExists(req, res);
  });
export default router;

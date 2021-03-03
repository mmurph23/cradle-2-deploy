import { Request, Response, Router } from 'express';

const router = Router();



/******************************************************************************
 *                      Get All Users - "GET /api/health/"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hello World'});
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
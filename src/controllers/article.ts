import express, { Request, Response, NextFunction } from "express";
import { getTopNArticles, searchByKeywordArticles, searchByTitleArticles } from "../services/article";

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const max = req.query.max ? req.query.max + '' : 10 + "";
        const data = await getTopNArticles(max);
        res.status(200).send({
            data
        });

    } catch (error) {
        next(error);
    }


});

router.get('/search/title', async (req: Request, res: Response, next: NextFunction) => {

    try {
        const title = req.query.title + '';
        const data = await searchByTitleArticles(title);
        res.status(200).send({
            data
        });
    } catch (error) {
        next(error);
    }

});

router.get('/search/keyword', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const keyword = req.query.keyword + '';
        const data = await searchByKeywordArticles(keyword);
        res.status(200).send({
            data
        });
    } catch (error) {
        next(error);
    }

});

export default router;
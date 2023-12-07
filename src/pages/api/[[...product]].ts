// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from '@/lib/firebase/services';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    status: boolean;
    statusCode: number;
    data: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>

) {
    if (req.query.product[1]) {
        const product = await retrieveDataById("products", req.query.product[1]);
        res.status(200).json({ status: true, statusCode: 200, data: product });

    } else {
        const products = await retrieveData("products");
        res.status(200).json({ status: true, statusCode: 200, data: products });
    }
}

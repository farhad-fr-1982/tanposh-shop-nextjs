'use server'

import { PrismaClient } from "@prisma/client"
import { convertToPlainObject } from "../utils"
import { LATEST_PRODUCT_LIMIT } from "../constants"

const prisma = new PrismaClient()

export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCT_LIMIT,
        orderBy: { createdAt: 'desc' }
    })
    return convertToPlainObject(data)
}
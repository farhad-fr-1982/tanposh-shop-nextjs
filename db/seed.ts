import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

const prisma = new PrismaClient();

async function main() {
    // حذف همه محصولات موجود
    await prisma.product.deleteMany();
    
    // ایجاد محصولات جدید از sampleData
    await prisma.product.createMany({ 
        data: sampleData.products 
    });
    
    console.log('Database seeded successfully!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
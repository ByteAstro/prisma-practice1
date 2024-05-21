import { Prisma, PrismaClient } from '@prisma/client';

const prsima = new PrismaClient({
    log: ["query"],

});

export default Prisma;
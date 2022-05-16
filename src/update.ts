import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "d6f5ad47-849a-4079-a91e-7167fadbfe37",
        },
        data: {
            duration: 300,
        }
    });
}

main();
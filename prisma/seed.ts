import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const signUp = await prisma.signUp.create({
    //     data: {
    //         email:"jane@gmail.com",
    //         fullName:"Jane Doe",
    //         phone:"0709123874",
    //         password:"password"
        
    // }
    // })
}


    main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  // close Prisma Client at the end
  await prisma.$disconnect();
  

});
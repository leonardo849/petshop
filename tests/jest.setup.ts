import {prisma} from "./setup"






afterAll(async () => {
  await prisma.$disconnect()
})

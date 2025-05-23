/*
  Warnings:

  - You are about to drop the column `Password` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Worker` table. All the data in the column will be lost.
  - Added the required column `password` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "Password",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Worker" DROP COLUMN "Password",
ADD COLUMN     "password" TEXT NOT NULL;

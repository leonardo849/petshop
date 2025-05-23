/*
  Warnings:

  - Added the required column `Password` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "Password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "Password" TEXT NOT NULL;

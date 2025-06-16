/*
  Warnings:

  - You are about to drop the `ProductsOnSale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductsOnSale" DROP CONSTRAINT "ProductsOnSale_productID_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnSale" DROP CONSTRAINT "ProductsOnSale_saleID_fkey";

-- DropTable
DROP TABLE "ProductsOnSale";

-- DropTable
DROP TABLE "Sale";

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "customerID" TEXT NOT NULL,
    "workerID" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsOnPurchase" (
    "productID" TEXT NOT NULL,
    "purchaseID" TEXT NOT NULL,

    CONSTRAINT "ProductsOnPurchase_pkey" PRIMARY KEY ("productID","purchaseID")
);

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_workerID_fkey" FOREIGN KEY ("workerID") REFERENCES "Worker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnPurchase" ADD CONSTRAINT "ProductsOnPurchase_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnPurchase" ADD CONSTRAINT "ProductsOnPurchase_purchaseID_fkey" FOREIGN KEY ("purchaseID") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

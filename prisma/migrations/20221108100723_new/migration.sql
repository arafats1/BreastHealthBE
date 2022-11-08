/*
  Warnings:

  - Added the required column `signUpId` to the `FollowUp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FollowUp" ADD COLUMN     "signUpId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "FollowUp" ADD CONSTRAINT "FollowUp_signUpId_fkey" FOREIGN KEY ("signUpId") REFERENCES "SignUp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "FollowUp" (
    "id" SERIAL NOT NULL,
    "swellingOnLeftOrone" TEXT NOT NULL,
    "unUsualDischarge" TEXT NOT NULL,
    "hardSpotOnBreast" TEXT NOT NULL,
    "lastPeriodDate" TEXT NOT NULL,
    "daysPeriodLasted" INTEGER NOT NULL,

    CONSTRAINT "FollowUp_pkey" PRIMARY KEY ("id")
);

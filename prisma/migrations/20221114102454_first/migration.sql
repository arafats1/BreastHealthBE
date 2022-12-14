-- CreateTable
CREATE TABLE "SignUp" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SignUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questionnaire" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "ageRange" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "educationLevel" TEXT NOT NULL,
    "breastCondition" TEXT NOT NULL,
    "knowSomeoneWithBreastCondition" TEXT NOT NULL,
    "yourMotivation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "signUpId" INTEGER NOT NULL,

    CONSTRAINT "Questionnaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelfCheck" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "SelfCheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowUp" (
    "id" SERIAL NOT NULL,
    "swellingOnLeftOrone" TEXT NOT NULL,
    "unUsualDischarge" TEXT NOT NULL,
    "hardSpotOnBreast" TEXT NOT NULL,
    "lastPeriodDate" TEXT NOT NULL,
    "daysPeriodLasted" INTEGER NOT NULL,
    "signUpId" INTEGER NOT NULL,

    CONSTRAINT "FollowUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreastVideo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "BreastVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "link" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthTip" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "HealthTip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "userImage" TEXT,
    "review" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "wearingAbra" TEXT NOT NULL,
    "doMenGetCancer" TEXT NOT NULL,
    "antisperspirants" TEXT NOT NULL,
    "braWithUnderwire" TEXT NOT NULL,
    "breastCancerCauses" TEXT NOT NULL,
    "findingAlump" TEXT NOT NULL,
    "breastCancerSymptoms" TEXT NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SignUp_email_key" ON "SignUp"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SignUp_phone_key" ON "SignUp"("phone");

-- AddForeignKey
ALTER TABLE "Questionnaire" ADD CONSTRAINT "Questionnaire_signUpId_fkey" FOREIGN KEY ("signUpId") REFERENCES "SignUp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUp" ADD CONSTRAINT "FollowUp_signUpId_fkey" FOREIGN KEY ("signUpId") REFERENCES "SignUp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "SelfCheck" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "SelfCheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreastVideo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "BreastVideo_pkey" PRIMARY KEY ("id")
);

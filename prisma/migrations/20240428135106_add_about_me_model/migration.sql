-- CreateTable
CREATE TABLE "AboutMe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "AboutMe_pkey" PRIMARY KEY ("id")
);

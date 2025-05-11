-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('MASTER', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "LICENSE_STATUS" AS ENUM ('ACTIVE', 'INACTIVE', 'EXPIRED');

-- CreateEnum
CREATE TYPE "EQUIPAMENT_STATUS" AS ENUM ('ACTIVE', 'INACTIVE', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "FIELD_TYPES" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN', 'DATE');

-- CreateEnum
CREATE TYPE "REPORT_STATUS" AS ENUM ('FINALIZED', 'IN_PROGRESS');

-- CreateTable
CREATE TABLE "Equipament" (
    "id" BIGSERIAL NOT NULL,
    "pk2" TEXT NOT NULL,
    "pk3" TEXT NOT NULL,
    "pk4" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "EQUIPAMENT_STATUS" NOT NULL DEFAULT 'INACTIVE',
    "equipamentTypeId" BIGINT,
    "description" TEXT,
    "updaterId" INTEGER,

    CONSTRAINT "Equipament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipamentType" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" INTEGER,

    CONSTRAINT "EquipamentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" BIGSERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "fieldTypeId" BIGINT,
    "equipamentId" BIGINT,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FieldType" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FIELD_TYPES" NOT NULL,
    "optional" BOOLEAN NOT NULL DEFAULT false,
    "max" TEXT,
    "min" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" INTEGER,
    "equipamentTypeId" BIGINT,

    CONSTRAINT "FieldType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "License" (
    "id" BIGSERIAL NOT NULL,
    "licenseTypeId" BIGINT NOT NULL,
    "valid" "LICENSE_STATUS" NOT NULL DEFAULT 'INACTIVE',
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "equipamentId" BIGINT NOT NULL,
    "updaterId" INTEGER,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LicenseType" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unvalidOnMoviment" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" INTEGER,
    "equipamentTypeId" BIGINT,

    CONSTRAINT "LicenseType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movimentation" (
    "id" BIGSERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" INTEGER,
    "updaterId" INTEGER,

    CONSTRAINT "Movimentation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PDF" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "base64" TEXT NOT NULL,
    "licenseId" BIGINT NOT NULL,

    CONSTRAINT "PDF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "reportTypeId" BIGINT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportField" (
    "id" BIGSERIAL NOT NULL,
    "reportFieldTypeId" BIGINT,
    "value" TEXT NOT NULL,
    "reportId" BIGINT NOT NULL,

    CONSTRAINT "ReportField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportFieldType" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FIELD_TYPES" NOT NULL,
    "max" TEXT,
    "min" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" INTEGER,
    "reportTypeId" BIGINT,

    CONSTRAINT "ReportFieldType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportType" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" INTEGER,
    "equipamentTypeId" BIGINT,

    CONSTRAINT "ReportType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "ROLE" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Updater" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Updater_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Equipament_pk2_key" ON "Equipament"("pk2");

-- CreateIndex
CREATE UNIQUE INDEX "Equipament_pk3_key" ON "Equipament"("pk3");

-- CreateIndex
CREATE UNIQUE INDEX "Equipament_pk4_key" ON "Equipament"("pk4");

-- CreateIndex
CREATE UNIQUE INDEX "PDF_licenseId_key" ON "PDF"("licenseId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Updater_userId_key" ON "Updater"("userId");

-- AddForeignKey
ALTER TABLE "Equipament" ADD CONSTRAINT "Equipament_equipamentTypeId_fkey" FOREIGN KEY ("equipamentTypeId") REFERENCES "EquipamentType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipament" ADD CONSTRAINT "Equipament_updaterId_fkey" FOREIGN KEY ("updaterId") REFERENCES "Updater"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipamentType" ADD CONSTRAINT "EquipamentType_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_fieldTypeId_fkey" FOREIGN KEY ("fieldTypeId") REFERENCES "FieldType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_equipamentId_fkey" FOREIGN KEY ("equipamentId") REFERENCES "Equipament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldType" ADD CONSTRAINT "FieldType_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldType" ADD CONSTRAINT "FieldType_equipamentTypeId_fkey" FOREIGN KEY ("equipamentTypeId") REFERENCES "EquipamentType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_licenseTypeId_fkey" FOREIGN KEY ("licenseTypeId") REFERENCES "LicenseType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_equipamentId_fkey" FOREIGN KEY ("equipamentId") REFERENCES "Equipament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_updaterId_fkey" FOREIGN KEY ("updaterId") REFERENCES "Updater"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseType" ADD CONSTRAINT "LicenseType_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseType" ADD CONSTRAINT "LicenseType_equipamentTypeId_fkey" FOREIGN KEY ("equipamentTypeId") REFERENCES "EquipamentType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimentation" ADD CONSTRAINT "Movimentation_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimentation" ADD CONSTRAINT "Movimentation_updaterId_fkey" FOREIGN KEY ("updaterId") REFERENCES "Updater"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PDF" ADD CONSTRAINT "PDF_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportTypeId_fkey" FOREIGN KEY ("reportTypeId") REFERENCES "ReportType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportField" ADD CONSTRAINT "ReportField_reportFieldTypeId_fkey" FOREIGN KEY ("reportFieldTypeId") REFERENCES "ReportFieldType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportField" ADD CONSTRAINT "ReportField_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportFieldType" ADD CONSTRAINT "ReportFieldType_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportFieldType" ADD CONSTRAINT "ReportFieldType_reportTypeId_fkey" FOREIGN KEY ("reportTypeId") REFERENCES "ReportType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportType" ADD CONSTRAINT "ReportType_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportType" ADD CONSTRAINT "ReportType_equipamentTypeId_fkey" FOREIGN KEY ("equipamentTypeId") REFERENCES "EquipamentType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Updater" ADD CONSTRAINT "Updater_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

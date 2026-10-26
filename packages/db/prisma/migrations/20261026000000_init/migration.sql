-- CreateEnum
CREATE TYPE "ProviderKind" AS ENUM ('GOOGLE_DRIVE', 'MICROSOFT_GRAPH', 'LOCAL_IMPORT');
CREATE TYPE "WorkbookSyncStatus" AS ENUM ('SYNCED_INDEXED', 'NEEDS_ATTENTION_UNVERIFIED_SYNC', 'ERROR_ZERO_BYTE', 'DISCONNECTED');

CREATE TABLE "ConnectedAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "provider" "ProviderKind" NOT NULL,
    "accountAlias" TEXT NOT NULL,
    "maskedIdentity" TEXT NOT NULL,
    "tenantOrWorkspace" TEXT,
    "permissionScopes" TEXT[],
    "encryptedTokenVault" TEXT,
    "connectionStatus" TEXT NOT NULL,
    "lastSuccessfulCheck" TIMESTAMP(3),
    "indexingLimitation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "Workbook" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "provider" "ProviderKind" NOT NULL,
    "externalFileId" TEXT NOT NULL,
    "canonicalUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "ownershipCategory" TEXT NOT NULL,
    "workspaceCategory" TEXT NOT NULL,
    "folderPath" TEXT NOT NULL,
    "parentId" TEXT,
    "fileSize" INTEGER NOT NULL DEFAULT 0,
    "createdAtSource" TIMESTAMP(3),
    "modifiedAtSource" TIMESTAMP(3),
    "viewedByMeAt" TIMESTAMP(3),
    "firstIndexedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSyncedAt" TIMESTAMP(3) NOT NULL,
    "createdInOct2026" BOOLEAN NOT NULL DEFAULT false,
    "modifiedInOct2026" BOOLEAN NOT NULL DEFAULT false,
    "viewedInOct2026" BOOLEAN NOT NULL DEFAULT false,
    "activeInOct2026" BOOLEAN NOT NULL DEFAULT false,
    "activityReason" TEXT NOT NULL,
    "accessRole" TEXT NOT NULL,
    "syncMode" TEXT NOT NULL,
    "syncStatus" "WorkbookSyncStatus" NOT NULL DEFAULT 'SYNCED_INDEXED',
    "headRevisionEtag" TEXT,
    "starred" BOOLEAN NOT NULL DEFAULT false,
    "accountId" TEXT NOT NULL REFERENCES "ConnectedAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Workbook_provider_externalFileId_key" ON "Workbook"("provider", "externalFileId");

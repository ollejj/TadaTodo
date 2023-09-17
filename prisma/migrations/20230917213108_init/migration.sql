-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "dateAdded" TEXT NOT NULL,
    "dateEnd" TEXT NOT NULL,
    "isChecked" BOOLEAN DEFAULT false
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "dateAdded" TEXT NOT NULL,
    "dateEnd" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Todo" ("dateAdded", "dateEnd", "id", "isChecked", "label") SELECT "dateAdded", "dateEnd", "id", coalesce("isChecked", false) AS "isChecked", "label" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

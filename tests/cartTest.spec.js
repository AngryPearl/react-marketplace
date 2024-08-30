import { test, expect } from "@playwright/test";

test("test dodawania produktu do koszyka", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.goto("http://localhost:5173/kobieta");
  await page.getByRole("link", { name: "Odzież" }).click();
  await page.getByRole("link", { name: "Obuwie arrow up/down" }).click();
  await page.getByRole("link", { name: "Szpilki 49zł" }).first().click();
  await page.getByRole("button", { name: "Dodaj Do Koszyka" }).click();
  await page.getByRole("link", { name: "3" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Test producent Szpilki49złCena: 49złUsuń$/ })
      .nth(1)
  ).toBeVisible();
});

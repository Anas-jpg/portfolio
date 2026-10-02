import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("all pages render accessible headings and fit desktop and mobile", async ({ page }) => {
  test.setTimeout(90000);
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/", "/about/", "/projects/", "/writing/", "/contact/", "/projects/corememories-ai/"]) {
      await page.goto(route);
      await expect(page.locator("main h1")).toHaveCount(1);
      await expect(page.locator("main h1")).toBeVisible();
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(audit.violations, `${route} at ${width}px`).toEqual([]);
    }
  }
});

test("project filters expose the selected state and navigate to real project details", async ({ page }) => {
  await page.goto("/projects/");
  await expect(page.locator(".project-card")).toHaveCount(5);
  await expect(page.locator(".project-card h3").nth(0)).toHaveText("CoreMemories AI");
  await expect(page.locator(".project-card h3").nth(1)).toHaveText("ELD Trip Planner");
  await page.getByRole("button", { name: "AI engineering", exact: true }).click();
  await expect(page.getByRole("button", { name: "AI engineering", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".project-card")).toHaveCount(3);
  await page.getByRole("link", { name: /CoreMemories AI/ }).click();
  await expect(page).toHaveURL(/projects\/corememories-ai\//);
  await expect(page.getByRole("link", { name: "Open live project", exact: true }).first()).toHaveAttribute("href", "https://corememories.ai");
});

test("mobile navigation traps focus, closes with Escape, and follows page links", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/about\//);
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("contact validates fields and handles mocked delivery without sending email", async ({ page }) => {
  await page.goto("/contact/");
  const name = page.getByRole("textbox", { name: "Your name" });
  await page.getByRole("button", { name: /Send message|Create email draft/ }).click();
  expect(await name.evaluate(element => (element as HTMLInputElement).validity.valueMissing)).toBe(true);
  await name.fill("Portfolio QA");
  await page.getByRole("textbox", { name: "Email address" }).fill("qa@example.com");
  await page.getByRole("textbox", { name: "What would you like to discuss?" }).fill("Test inquiry");
  await page.getByRole("textbox", { name: "Your message" }).fill("This request is intercepted by the automated test.");
  const send = page.getByRole("button", { name: "Send message", exact: true });
  if (await send.count()) {
    await page.route("https://api.emailjs.com/**", route => route.fulfill({ status: 500, body: "Test failure" }));
    await send.click();
    await expect(page.locator(".contact-form").getByRole("alert")).toContainText("couldn't be sent");
    await expect(name).toHaveValue("Portfolio QA");
    await page.unroute("https://api.emailjs.com/**");
    await page.route("https://api.emailjs.com/**", route => route.fulfill({ status: 200, body: "OK" }));
    await send.click();
    await expect(page.getByRole("status")).toContainText("has been sent");
    await expect(name).toHaveValue("");
  } else {
    await expect(page.getByText("This form prepares a draft in your email app.", { exact: false })).toBeVisible();
  }
});

test("resume is served and reduced motion keeps the portrait visible", async ({ page, request }) => {
  const response = await request.get("/Muhammad_Anas_resume.pdf");
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero-art")).toBeVisible();
  expect(await page.locator(".hero-art").evaluate(element => getComputedStyle(element).animationName)).toBe("none");
});

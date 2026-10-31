const fs = require("node:fs");
const ts = require("typescript");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const source = fs.readFileSync(
  "src/app/components/Home/academy-content.ts",
  "utf8",
);
const output = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const context = { exports: {}, encodeURIComponent };
vm.runInNewContext(output, context);
const { courses, centres, demoUrl, verifiedResults } = context.exports;
assert.equal(new Set(courses.map((c) => c.id)).size, courses.length);
for (const centre of centres) {
  assert.match(centre.phone, /^91\d{10}$/);
  for (const course of courses) {
    const url = new URL(demoUrl(centre.id, course.name));
    assert.equal(url.hostname, "wa.me");
    assert.equal(url.pathname, "/" + centre.phone);
    assert.ok(url.searchParams.get("text").includes(course.name));
    assert.ok(url.searchParams.get("text").includes(centre.name));
  }
}
assert.equal(demoUrl("missing", "NEET"), null);
for (const result of verifiedResults) {
  assert.ok(result.evidenceReference);
  assert.equal(result.consentApproved, true);
}
console.log(
  "Homepage data checks passed: course IDs, centre phones, WhatsApp requests and result evidence.",
);

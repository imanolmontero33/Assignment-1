const { createAddColorPayload, parseSearchColorsResponse } = require('./colorUtils');

test('Create payload and process simulated backend response', () => {
  // Step 1: frontend creates payload
  const payload = createAddColorPayload("Red", 10);

  expect(payload).toContain('"color":"Red"');
  expect(payload).toContain('"userId":10');

  // Step 2: simulate backend response (like searchcolors.php)
  const fakeResponse = JSON.stringify({
    results: ["Red", "Blue", "Green"],
    error: ""
  });

  const parsed = parseSearchColorsResponse(fakeResponse);

  expect(parsed.results).toContain("Red");
  expect(parsed.error).toBe("");
});
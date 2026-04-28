const { createAddColorPayload, parseSearchColorsResponse } = require('./colorUtils');

test('Create valid JSON payload for adding a color', () => {
  const payload = createAddColorPayload("Blue", 5);

  expect(payload).toBe(JSON.stringify({
    color: "Blue",
    userId: 5
  }));
});

test('Create payload with empty color', () => {
  const payload = createAddColorPayload("", 5);

  expect(payload).toBe(JSON.stringify({
    color: "",
    userId: 5
  }));
});

test('Parse valid search colors response', () => {
  const response = '{"results":["Red","Green","Blue"],"error":""}';

  const parsed = parseSearchColorsResponse(response);

  expect(parsed.results).toEqual(["Red", "Green", "Blue"]);
  expect(parsed.error).toBe("");
});

test('Parse response with error', () => {
  const response = '{"results":[],"error":"No Records Found"}';

  const parsed = parseSearchColorsResponse(response);

  expect(parsed.results).toEqual([]);
  expect(parsed.error).toBe("No Records Found");
});
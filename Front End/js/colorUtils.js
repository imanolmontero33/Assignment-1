function createAddColorPayload(color, userId) {
  return JSON.stringify({
    color: color,
    userId: userId
  });
}

function parseSearchColorsResponse(responseText) {
  return JSON.parse(responseText);
}

module.exports = {
  createAddColorPayload,
  parseSearchColorsResponse
};
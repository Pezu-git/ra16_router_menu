function genID() {
  return `${Date.now()}${Math.floor(Math.random() * 999999999999) + 1}`;
}

module.exports = genID;
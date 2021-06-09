module.exports = {
  sanitizeString(s) {
    return s == null ? "" : s.trim().toLowerCase();
  },
  sanitizeBool(b) {
    return b == null ? false : b;
  },
  isEmail(s) {
    return /\S+@\S+\.\S+/.test(s);
  },
  isPhone(s) {
    return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(s);
  },
  obfuscateEmail(email) {
    return email.replace(email.substring(0, email.indexOf("@")), "*****");
  },
  corsHeaders() {
    return {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
    };
  },
};

// Test environment setup: ensure required env vars exist for tests
process.env.JWT_SECRET = process.env.JWT_SECRET || "test_jwt_secret";

// Add any other test-time defaults here if needed

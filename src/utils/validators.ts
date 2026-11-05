
// Each validator returns an error message, or undefined when the value is valid.
// ASSUMPTION: the email check is a simple "something@something.something" pattern,
// not full RFC validation.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;


function validateRequired(value: string, emptyMessage: string) : string | undefined {
  if (value.trim() === '') return emptyMessage;
  return undefined;
}

function validateEmail(value: string) : string | undefined {
  const email = value.trim();
  if(email === '') return 'Enter your email';
  if(!EMAIL_PATTERN.test(email)) return ' Add the full email, like example@example.com';
  return undefined;
}

function validatePassword(value: string): string | undefined {
  if(value === '') return 'Enter your password';
  return undefined;
}

function validateDate(value: string, emptyMessage: string) : string | undefined {
  const date = value.trim();
  if (date === '') return emptyMessage;
  if (!DATE_PATTERN.test(date)) return 'Use the format YYYY-MM-DD, like 2026-11-01';
  return undefined;
}

function validateDateRange(startDate: string, endDate: string): string | undefined {
  // ISO dates compare correctly as plain strings.
  if (startDate !== '' && endDate !== '' && endDate < startDate) {
    return 'The end date cannot be before the start date';
  }
  return undefined;
}

export const Validators = {
  validateRequired,
  validateEmail,
  validatePassword,
  validateDate,
  validateDateRange
};
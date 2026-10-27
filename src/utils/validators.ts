
// Each validator returns an error message, or undefined when the value is valid.
// ASSUMPTION: the email check is a simple "something@something.something" pattern,
// not full RFC validation.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


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

export const Validators = {
  validateEmail,
  validatePassword
};
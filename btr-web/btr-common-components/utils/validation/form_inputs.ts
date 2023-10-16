const emailLengths = (email: string): boolean => {
  if (!email || email.length > 253) return false // eslint-disable-line curly
  const [localPart, domainPart, shouldBeUndefined] = email.split('@')
  if (shouldBeUndefined !== undefined) return false // eslint-disable-line curly
  if (!localPart || localPart.length > 63) return false // eslint-disable-line curly
  if (!domainPart || domainPart.length > 252) return false // eslint-disable-line curly
  return true
}

/**
 * Tests if the email matches rfc 5322
 * @param email string representation of email address that you want to verify against rfc 5322 regex
 */
export const validateEmailRfc5322Regex = (email: string): boolean => {
  return emailLengths(email) &&
    // eslint-disable-next-line no-useless-escape
    /^("(?:[!#-\[\]-~]|\\[\t -~])*"|[!#-'*+\-/-9=?A-Z\^-~](?:\.?[!#-'*+\-/-9=?A-Z\^-~])*)@([!#-'*+\-/-9=?A-Z\^-~](?:\.?[!#-'*+\-/-9=?A-Z\^-~])*|\[[!-Z\^-~]*\])$/.test(email) // NOSONAR
}

/**
 * Tests if the email matches rfc 6532
 * @param email string representation of email address that you want to verify against rfc 6532 regex
 */
export const validateEmailRfc6532Regex = (email: string): boolean => {
  return emailLengths(email) &&
    // eslint-disable-next-line no-useless-escape
    /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u.test(email) // NOSONAR
}

/**
 * Validates the characters of a name string to ensure that the name only consists of Unicode letters and whitespace
 * @param {string} name - string representation of the name input
 */
export const validateNameCharacters = (name: string): boolean => {
  return /^[\p{L}\p{Zs}]+$/u.test(name);
};

/**
 * Normalizes a name string.
 * If the name is provided, it removes leading, trailing, and extra spaces within the name.
 * If the name is undefined, it returns an empty string.
* @param {string | undefined} name - the name input to normalize.
*/
export const normalizeName = (name?: string): string => {
  if (name === undefined) {
    return '';
  }
  return name.trim().replace(/\s+/g, ' ');
};
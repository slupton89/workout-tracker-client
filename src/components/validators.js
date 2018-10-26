export const required = value => (value ? undefined : 'Field is required');

export const nonEmpty = value => (value.trim() !== '' ? undefined : 'Field must not be empty');

export const correctLength = value => (value.length >= 5 ? undefined : 'Must be 5 or more characters');

export const charIsNum = value => (typeof value !== 'number' ? undefined : 'Must be a number');
export const required = value => (value ? undefined : 'Field is required');

export const nonEmpty = value => (value.trim() !== '' ? undefined : 'Field must not be empty');

export const correctLength = value => (value.length === 5 ? undefined : 'Must be exactly 5 characters');

export const charIsNum = value => (typeof value !== 'number' ? undefined : 'Must be a number');

export const isEmail = value => (value.includes('@') && value.includes('.com') !== true ? undefined : 'Must be a valid email' );
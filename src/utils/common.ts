export const fixPhoneNumber = (tel: string) =>
  tel.replace(/[^\d+]+/g, '').replace(/(.)\++/g, '$1');

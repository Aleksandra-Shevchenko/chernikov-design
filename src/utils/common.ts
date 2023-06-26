// eslint-disable-next-line @typescript-eslint/no-var-requires
const { XMLParser } = require('fast-xml-parser');

export const xmlToJson = (XMLdata: any) => {
  const parser = new XMLParser();
  const jObj = parser.parse(XMLdata);
  return jObj;
};

export const fixPhoneNumber = (tel: string) =>
  tel.replace(/[^\d+]+/g, '').replace(/(.)\++/g, '$1');

import cheerio from 'cheerio';

const parseAttrs = (attrs) => attrs.reduce((result, current) => `${result} ${current.name}="${current.value}"`, '').trim();

export const parseSymbolXML = (svgContent, filename) => {
  const svg = cheerio.load(svgContent);

  const symbolAttrs = parseAttrs([
    { name: 'id', value: filename.split('.')[0] }, // removes extension file
    { name: 'viewBox', value: svg('svg').prop('viewBox') },
    { name: 'xmlns', value: "http://www.w3.org/2000/svg" },
  ]);

  const content = svg('svg').html();

  const svgParsed = `<symbol ${symbolAttrs}>${content}</symbol>`;

  return svgParsed;
};

export const parseSvgXML = (content) => {
  const xmlAttrs = parseAttrs([
    { name: 'version', value: "1.0" },
    { name: 'encoding', value: "UTF-8" },
  ]);

  const svgAttrs = parseAttrs([
    { name: 'xmlns', value: "http://www.w3.org/2000/svg" },
    { name: 'xmlns:xlink', value: "http://www.w3.org/1999/xlink" },
  ]);

  return `<?xml ${xmlAttrs}?>\n<svg ${svgAttrs}>\n${content}\n</svg>`;
};

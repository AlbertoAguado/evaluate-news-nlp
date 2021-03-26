import {urlChecker} from "../src/client/js/urlChecker.js";

test('url without http', () => {
    expect(urlChecker("www.bbc.com/news/world.co.uk")).toBe(false);
  });

test('url with http://', () => {
    expect(urlChecker("http://www.bbc.com/news/world")).toBe(true);
  });

test('url with random number at the beginning', () => {
    expect(urlChecker("313135465https://www.bbc.com/news/world")).toBe(false);
  });

test('url with https://', () => {
    expect(urlChecker("https://www.bbc.com/news/world")).toBe(true);
  });

import { checkUrl } from "../client/js/urlChecker"


test('url1 is valid', () => {
  const url1 = 'https://edition.cnn.com/2020/07/12/politics/fauci-trump-coronavirus/index.html'
  expect(checkUrl(url1)).toBe(true)
})

test('url2 is valid', () => {
  const url2 = 'https://onet.pl'
  expect(checkUrl(url2)).toBe(true)
})

test('url3 is not valid', () => {
  const url3 = 'fdsfdsfdsfaf'
  expect(checkUrl(url3)).toBe(false)
})

test('url4 is not valid', () => {
  const url4 = 'email@email.com'
  expect(checkUrl(url4)).toBe(false)
})

test('url5 is valid', () => {
  const url5 = 'http://www.bbc.com/news/business-53416206'
  expect(checkUrl(url5)).toBe(true)
})
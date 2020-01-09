export default function (location) {
  const paths = location.pathname.split('/').filter(i => i);
  const urls = paths.map((_, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`;
    return url;
  });
  return urls;
}

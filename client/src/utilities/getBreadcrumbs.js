import startCase from 'lodash/startCase';
import allowedPaths from 'utilities/allowedPaths.json';
import getLocationPaths from 'utilities/getLocationPaths';

export default location => {
  const paths = getLocationPaths(location);
  const allowed = paths.filter(url => allowedPaths.includes(url));
  allowed.unshift('/home');
  const breadcrumbs = allowed.map((url) => {
    const path = url.split('/').filter(i => i);
    const idx = path.length - 1;
    const title = startCase(path[idx]);
    const to = path === 'home' ? '/' : url;
    return { path, title, to };
  });
  return breadcrumbs;
};

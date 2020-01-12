import { startCase } from 'lodash';
import allowedPaths from 'utilities/allowedPaths';

export default function (paths) {
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
}

import allowedPaths from 'utilities/allowedPaths';
import getLocationPaths from 'utilities/getLocationPaths';

export default location => {
  const paths = getLocationPaths(location);
  const currentPath = paths.length ? paths[paths.length - 1] : '/';
  const pathMatch = allowedPaths.includes(currentPath);
  const selectedKeys = pathMatch ? currentPath : '';
  return selectedKeys;
};

import allowedPaths from './allowedPaths';
import getLocationPaths from './getLocationPaths';

const getSelectedKeys = location => {
  const paths = getLocationPaths(location);
  const currentPath = paths.length ? paths[paths.length - 1] : '/';
  const pathMatch = allowedPaths.includes(currentPath);
  const selectedKeys = pathMatch ? currentPath : '';
  return selectedKeys;
};

export default getSelectedKeys;

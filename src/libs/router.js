export function go (url, $router, replace) {
  if (/^javas/.test(url) || !url) return;
  let useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url));
  if (useRouter) {
    if (!replace) {
      $router.push(url);
    } else {
      $router.replace(url);
    }
  } else {
    if (!replace) {
      window.location.href = url;
    } else {
      window.location.replace(url);
    }
  }
}

export function getUrl (url, $router) {
  // Make sure the href is right in hash mode
  if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
    return `#!${url}`;
  }
  return url && typeof url !== 'object' ? url : 'javascript:void(0);';
}
const GITHUB_URL = 'https://api.github.com';

export const searchUsers = async (text) => {
  const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`);
  const { items } = await response.json();
  return items;
};

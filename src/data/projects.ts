import data from './parsed_excel.json';

const githubRepos = data['Github Repos'] || [];

// Sort repos by priority
export const topRepos = githubRepos
  .filter(r => r['Repo / Project'])
  .sort((a, b) => (a.Priority || 99) - (b.Priority || 99))
  .slice(0, 10);

export const projectCount = topRepos.length;

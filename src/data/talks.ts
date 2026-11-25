import data from './parsed_excel.json';

export const conferences = data['Conferences (Speaker)'] ?? [];
export const publications = data['Publications (Blog,Videos)'] ?? [];

export const talksAndMediaCount = conferences.length + publications.length;

import {
  categoryTabs,
  diverseLearningPaths,
  categoriesSectionHeader,
} from '../data/categories';

export const getCategoryTabs = () => categoryTabs;

export const getDiverseLearningPaths = () => diverseLearningPaths;

export const getCategoriesSectionHeader = () => categoriesSectionHeader;

export const getCategoryById = (id) =>
  categoryTabs.find((tab) => tab.id === id);

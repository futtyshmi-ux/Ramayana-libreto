export interface Scene {
  id: number;
  title: string;
  subtitle: string;
  category: 'origins' | 'exile' | 'search' | 'war' | 'triumph';
  categoryLabel: string;
  description: string;
  fullStory: string;
  quote?: string;
  characters: string[];
  location: string;
  image: string;
  actNumber: number;
}

export type ViewMode = 'grid' | 'carousel' | 'timeline';
export type CategoryFilter = 'all' | 'origins' | 'exile' | 'search' | 'war' | 'triumph';

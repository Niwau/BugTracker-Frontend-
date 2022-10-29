export interface Bug {
  author: {
    name: string
  }
  title: string,
  status: 'Solved' | 'High' | 'Medium' | 'Low',
  description: string
}
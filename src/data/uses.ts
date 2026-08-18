export interface UsesItem {
  label: string;
  name: string;
  link?: string;
}

export interface UsesCategory {
  category: string;
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: 'Hardware',
    items: [
      { label: 'Computer', name: 'Acer Nitro 5 (Ryzen 5, NVIDIA GTX, 16GB RAM)' },
      { label: 'Display', name: 'LG UltraGear 24"' },
      { label: 'Keyboard', name: 'Logitech MX Keys S' },
      { label: 'Mouse', name: 'Redragon Cobra M711W' },
      { label: 'Audio', name: 'Sony WH-1000XM5' },
    ],
  },
  {
    category: 'Software & Tools',
    items: [
      { label: 'Design & Prototyping', name: 'Figma' },
      { label: 'Whiteboarding', name: 'FigJam, Miro & Mural' },
      { label: 'UX Research', name: 'Maze, Dovetail & UserTesting' },
      { label: 'Management', name: 'Microsoft Planner, Loop, Notion & Jira' },
      { label: 'Browser', name: 'Google Chrome (Mac/PC) & Safari (Mobile)' },
      { label: 'Code Editor', name: 'VS Code & Cursor' },
      { label: 'Generative AI', name: 'Gemini, ChatGPT, Claude & Midjourney' },
    ],
  },
];
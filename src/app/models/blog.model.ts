export interface Blog {
  id: number;
  title: string;
  image: string;
  paragraph: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  tags: string[];
  publishDate: string;
}

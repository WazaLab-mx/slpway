import { selectHomeBlogPosts } from './home-blog';

it('fills the home selection without promoting the retired FENAPO 2026 guides', () => {
  const posts = [{slug:'que-comer-en-la-fenapo-2026'}, {slug:'xantolo'}, {slug:'san-luis-rey-tranvia'}];
  expect(selectHomeBlogPosts(posts, 2)).toEqual(posts.slice(1));
});

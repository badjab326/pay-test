import { buildConfig } from 'payload/config';
import TodoLists from './collections/TodoLists';
import Users from './collections/Users';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    TodoLists,
    Categories,
    Posts,
    Tags,
    Users,
  ],
});

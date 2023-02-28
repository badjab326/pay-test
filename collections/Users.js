const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'userInfo',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'company',
          type: 'text',
        },
        {
          name: 'verified',
          type: 'checkbox',
          defaultValue: false,
        }
      ]
    },
  ],
};

export default Users;
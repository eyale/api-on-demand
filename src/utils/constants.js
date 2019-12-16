export const tokenHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const requestHeaders = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

export const getBearerHeaders = token => ({
  Authorization: `Bearer ${token}`,
});

export const tokenParams = {
  grant_type: 'password',
  scope: 'api-on-demand-api',
  client_id: 'api-on-demand-api',
  client_secret: 'api-on-demand-secret',
};

export const loginPlaceholders = {
  username: 'email@mail.com',
  password: '***********',
};

export const loginFields = {
  username: '',
  password: '',
};

export const passwordValidationMessage =
  'Password should contain 8 to 16 characters including a letter, number, and one of the following special characters @$!%*?&';

export const passwordRegexp =
  '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,16}$';

export const searchUserParams = {
  isDescending: true,
  skip: 0,
  take: 15,
};

export const tableColoms = {
  userStatus: {
    id: 1,
    name: 'User Status',
    sort: true,
    orderBy: 'IsActive',
  },
  firstName: {
    id: 2,
    name: 'First Name',
    sort: true,
    orderBy: 'FirstName',
  },
  lastName: {
    id: 3,
    name: 'Last Name',
    sort: true,
    orderBy: 'LastName',
  },
  emailAddress: {
    id: 4,
    name: 'Email Address',
    sort: true,
    orderBy: 'Email',
  },
  phoneNumber: {
    id: 5,
    name: 'Phone Number',
    sort: true,
    orderBy: 'Phone',
  },
  dotNumber: {
    id: 6,
    name: 'DOT Number',
    sort: true,
    orderBy: 'DotNumber',
  },
  mcNumber: {
    id: 7,
    name: 'MC Number',
    sort: true,
    orderBy: 'McNumber',
  },
  userRole: {
    id: 8,
    name: 'User Role',
    sort: true,
    orderBy: 'UserRoleId',
  },
  dateCreated: {
    id: 9,
    name: 'Date Created',
    sort: true,
    orderBy: 'CreatedDate',
  },
  manageAccount: {
    id: 10,
    name: 'Manage Account',
    sort: true,
  },
};

export const userRole = {
  SuperDriver: {
    id: 1,
    description: 'Super Driver',
  },
  PowerDriver: {
    id: 2,
    description: 'Power Driver',
  },
  Driver: {
    id: 3,
    description: 'Driver',
  },
};

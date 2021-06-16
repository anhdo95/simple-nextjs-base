import '@testing-library/jest-dom/extend-expect';

jest.mock('@store/user', () => ({
  getUserProfile() {
    return {
      type: 'user/getUserProfile'
    };
  }
}));

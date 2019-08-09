
export default {
  server: {
    host: 'ec2-13-125-10-31.ap-northeast-2.compute.amazonaws.com',
    port: '3000',
    hostname: 'http://ec2-13-125-10-31.ap-northeast-2.compute.amazonaws.com:3000',
    path: {
      login: '/member/login',
      logout: '/member/logout',
      join: '/member/join',
      account: '/member',
      list: '/contract'
    }
  },
  account: {
    identity: '',
    balance: '',
    total: ''
  }
};

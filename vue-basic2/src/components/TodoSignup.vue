<template>
    <div class="container">
      <form @submit.prevent="submitForm">
              <div>
                  <label for="email">아이디</label>
                  <input type="text" id="email" v-model="email" />
              </div>
              <div>
                  <label for="password">비밀번호</label>
                  <input type="password" id="password" v-model="password" />
              </div>
              <div>
                  <label for="passwordConfirm">비밀번호 확인</label>
                  <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
              </div>
          <button type="submit">회원가입</button>
      </form>
    </div>
  </template>
  
  <script>
export default {
  name: 'Member_ID',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    submitForm() {
      // 비밀번호 확인
      if (this.password !== this.passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      // 서버로 데이터 전송
      this.axios.post('/api/signup', {
        email: this.email,
        password: this.password,
        // 기타 필요한 데이터는 여기에 추가
      })
      .then((res) => {
        if (res.data.success) { // 서버에서 success 필드를 보내면서 성공 여부를 판단할 수 있습니다.
          alert('회원가입 성공!!');
          this.$router.push('/login');
        } else {
          alert('회원가입 실패하였습니다. 다시 입력해주세요.');
        }
      })
      .catch((error) => {
        console.error('회원가입 요청 중 오류 발생:', error);
        alert('회원가입 중 오류가 발생했습니다.');
      });
    },
  },
};
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 20;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  
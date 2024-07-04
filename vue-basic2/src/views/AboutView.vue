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
		Member_ID() {
			console.log('dd');
			this.$router.push('/about'); // AboutView.vue로 이동
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

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
			<button type="submit" class="login-btn">로그인</button>
			<button @click="goToSignup" class="register-btn">회원가입</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Member_ID',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		submitForm() {
			// 아이디와 비밀번호가 모두 입력되었는지 확인
			if (!this.email || !this.password) {
				alert('아이디와 비밀번호를 모두 입력하세요.');
				return;
			}

			// 로그인 또는 회원가입 로직 처리
			console.log(this.email, this.password);
			// const url = 'https://jsonplaceholder.typicode.com/users';
			const data = {
				username: this.email,
				password: this.password,
			};
			axios.post(`/api/login`, {
				email: this.email,
				passwd: this.password
			})
				.then((response) => {
					this.$router.push("/list")
					// 로그인 성공 시
					console.log(response);
					alert('로그인에 성공하였습니다.');
					// 여기서 추가적인 로직을 수행할 수 있습니다 (예: 로그인 후의 페이지 이동 등)
				})
				.catch((error) => {
					console.log(error);
					alert('로그인에 실패하였습니다.');
				});
		},
		goToSignup() {
			// 회원가입 버튼 클릭 시 TodoSignup 컴포넌트로 이동
			this.$router.push({ name: 'TodoSignup' });
		},
	},
};
</script>

<style scoped>
label {
	margin-top: 10px;
	margin-right: 10px;
}

/* 버튼 간격 조정 */
button {
	margin-top: 10px; /* 버튼들의 상단 간격 */
	margin-right: 10px; /* 버튼 간의 우측 간격 */
}
input[type="password"] {
	margin-bottom: 10px; /* 비밀번호 입력 필드와 버튼 사이의 간격 */
}
</style>

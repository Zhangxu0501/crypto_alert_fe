<template>
    <div class="container">
        <div class="form-container">
            <h2>登录</h2>
            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <label for="email">邮箱:</label>
                    <input type="email" id="email" v-model="email" required />
                </div>
                <div class="input-group">
                    <label for="password">密码:</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <button type="submit">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            async handleLogin() {
                try {
                    const response = await axios.post('/user/login', {
                        email: this.email,
                        password: this.password,
                    });

                    if (response.status === 200) {
                        // 登录成功的逻辑
                        // 例如保存 token, 跳转到首页等
                        this.$router.push('/home'); // 跳转到主页或其他页面
                    }
                } catch (error) {
                    console.error('登录失败:', error.message);
                }
            },
        },
    };
</script>

<style>
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
    }

    .form-container {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    .input-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        font-weight: bold;
        color: #555;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>

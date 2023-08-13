<template>
    <div class="container">
        <div class="form-container" v-if="!verificationRequired">
            <h2>注册</h2>
            <form @submit.prevent="handleRegister">
                <div class="input-group">
                    <label for="email">邮箱:</label>
                    <input type="email" id="email" v-model="email" required />
                </div>
                <div class="input-group">
                    <label for="password">密码:</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <button type="submit">发送验证码</button>
            </form>
        </div>

        <div class="form-container" v-if="verificationRequired">
            <h2>验证邮箱</h2>
            <form @submit.prevent="verifyCode">
                <div class="input-group">
                    <label for="random_otp">验证码:</label>
                    <input type="text" id="random_otp" v-model="random_otp" required />
                </div>
                <button type="submit">验证</button>
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
                random_otp: '',
                verificationRequired: false,
            };
        },
        methods: {
            async handleRegister() {
                try {
                    const response = await axios.post('/user/register', {
                        email: this.email,
                        password: this.password,
                    });

                    if (response.status === 200) {
                        this.verificationRequired = true; // 显示验证码验证组件
                    }
                } catch (error) {
                    console.error('发送验证码失败:', error.message);
                }
            },
            async verifyCode() {
                try {
                    const response = await axios.post('/user/confirm_register', {
                        email: this.email,
                        random_otp: this.random_otp,
                    });

                    if (response.status === 200) {
                        // 验证成功逻辑，例如跳转
                        this.$router.push('/user_login');
                    }
                } catch (error) {
                    console.error('验证失败:', error.message);
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
        margin-bottom: 20px;
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
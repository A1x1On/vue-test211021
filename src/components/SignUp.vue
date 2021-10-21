<template>
  <div class="sign-up">

    <div class="sign-up__title title">Регистрация</div>
    <div class="sign-up__hint">
      Уже есть аккаунт? <a href="javascript:void(0);" class="color-info">Войти</a>
    </div>

    <div class="input-control">
      <div class="input-control__label">Имя</div>
      <input class="input-control__input" placeholder="Введите Ваше имя" v-model="authCriteria.name"/>
    </div>

    <div class="input-control">
      <div class="input-control__label">Email</div>
      <input class="input-control__input" placeholder="Введите ваш email" v-model="authCriteria.email" ref="emailRef"/>
      <div class="input-control__text-valid" :style= "[trueEmail ? {display: 'none'} : {display: 'block'}]">Введено не корректное значение</div>
    </div>

    <div class="input-control">
      <div class="input-control__label">Номер телефона</div>
      <input class="input-control__input" placeholder="Введите номер телефона" v-model="authCriteria.phone"/>
    </div>

    <div class="select-control">
      <div class="select-control__label">Язык</div>
      <Select placeHolder="Язык" :dataSource="data" @selectValue="selectValue"/>
    </div>

    <div class="sign-up__agreement">
      <Checkbox :init="isChecked" @checkboxValue="checkboxValue"/>
      <div class="sign-up__agreement_text">
        Принимаю <span class="color-info">условия</span> использования
      </div>
    </div>

    <button class="button" :disabled="btnDisabled" @click="submit()">Зарегистрироваться</button>

  </div>


</template>

<script>

  import Select from '@/components/Select.vue'
  import Checkbox from '@/components/Checkbox.vue'

  export default {
    name: 'SignUp',
    components: {
      Select,
      Checkbox
    },
    data: function(){
      return {
        data         : [
          {value: "Русский"   , text: "Русский"   },
          {value: "Английский", text: "Английский"},
          {value: "Китайский" , text: "Китайский" },
          {value: "Испанский" , text: "Испанский" }
        ],
        isChecked    : false,
        trueEmail    : false,
        btnDisabled  : true,
        authCriteria :  {
          name     : "",
          email    : "",
          phone    : "",
          language : ""
        }
      }
    },
    watch: {
      'authCriteria.name'(newValue, oldValue) {
        const ch = newValue[newValue.length - 1];
        if (/[\W\d]/.test(ch) && '- йцукенгшщзхъфывапролджэячсмитьбю'.indexOf(ch.toLowerCase()) === -1) {
          this.authCriteria.name = oldValue;
        }
      },
      'authCriteria.email'(newValue) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.trueEmail = re.test(newValue)
      },
      'authCriteria.phone'(newValue) {
        let ch = newValue[newValue.length - 1];
        if ('0123456789-+()'.indexOf(ch) === -1 || newValue.length > 11) {
          this.authCriteria.phone = newValue.slice(0, newValue.length - 1);
        }
      }
    },
    updated() {
      if (this.isChecked && this.authCriteria.name !== '' && this.authCriteria.email !== '' && this.authCriteria.phone !== '' && this.authCriteria.language !== '') {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
    methods: {
      selectValue: function(item){
        this.authCriteria.language = item.value
      },
      checkboxValue: function(val){
        this.isChecked = val
      },
      submit : function() {
        console.log('---------REGISTRATION PARAMS---------', this.authCriteria);
      },

    }
  }
</script>

<style scoped lang="scss" >

  @import '@/assets/styles/variables.scss';

  .sign-up {
    min-width: 360px;
    width: 100%;
    height: 789px;
    padding: 40px 30px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;

    .sign-up__title {
      margin-bottom: 10px;
    }

    .sign-up__hint {
      margin-bottom: 58px;
    }

    .sign-up__agreement{
      width: 100%;
      margin-top: 30px;
      margin-bottom: 85px;

      .sign-up__agreement_text{
        top: 2px;
        position: relative;
        margin-left: 5px;
        float: left;
      }
    }
  }

</style>

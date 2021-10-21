<template>
  <router-view/>
</template>

<style lang="scss">

  @import '@/assets/styles/variables.scss';

  html {
    height: 100%;
  }

  body {
    margin: 0px;
    line-height: $lh;
    height: 100%;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  #app {

    font-family: $ff;
    font-style: normal;
    font-weight: normal;
    font-size: $fs;
    line-height: $lh;
    color: $color;
    height: 100%;
  }


  .title {
    font-weight: bold;
    font-size: 34px;
    line-height: 44px;
  }

  .input-control {
    height: 120px;

    .input-control__label {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 10px;
      line-height: 21px;
      color: $color-sub;
    }

    .input-control__input {
      width: 100%;
      height: 52px;
      padding: 16px;
      background: #FFFFFF;
      border: 1px solid $color-border;
      box-sizing: border-box;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
      border-radius: $br;

      &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: $color-lightBlue;
      }

      &:focus,
      &:active {
        outline: none;
        border: 2px solid #0880AE !important;
        padding: 15px !important;
      }
    }

    .input-control__text-valid {
      margin-top: 10px;
      font-size: $fs-s;
      line-height: 18px;
      color: $color-danger;
      display: none;
    }
  }

  .button {
    border: none;
    color: #FFF;
    cursor: pointer;
    background: $color-info;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: $br;
    width: 100%;
    height: 56px;

    &:hover {
      box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
    }

    &:active {
      border: 2px solid rgba(44, 39, 56, 0.86);
      box-sizing: border-box;
      box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 0px 4px 8px rgba(44, 39, 56, 0.08);
    }

    &:disabled{
      background: #DBE2EA;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    }
  }

  .color-info{
    color: $color-info;
  }

</style>

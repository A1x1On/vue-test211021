<template>

      <div class="select" @click.stop="toggleSelect()" ref="selectRef">
        <div class="select__drop-value">{{text}}</div>
        <div class="select__drop-down" ref="dropRef">
          <div class="select__drop-down_option" v-for="(item) in data" :key="item.value" @click="select(item)">{{item.text}}</div>
        </div>
      </div>

</template>

<script>

  import $ from "jquery";

  export default {
    name: 'SignUp',
    props: {
      placeHolder: String,
      dataSource: Array
    },
    data: function(){
      return {
        text : this.placeHolder,
        data : this.dataSource
      }
    },
    mounted: function () {
      this.initMounted();
    },
    methods: {

      initMounted : function() {
        $(document).bind('click', () => {
          $(this.$refs.selectRef).removeClass("select-active");
          $(this.$refs.selectRef).children(".select__drop-down").hide();
        })
      },

      toggleSelect : function() {
        let select = this.$refs.selectRef;
        select.classList.value.split(" ").forEach((c) => {
          if (c === "select-active") {
            $(select).removeClass("select-active");
          } else {
            $(select).addClass("select-active");
          }
        });

        $(select).children(".select__drop-down").toggle();
      },

      select: function(item) {
        this.$emit('selectValue', item);
        this.text = item.text
      }
    }

  }
</script>

<style scoped lang="scss" >

  @import '@/assets/styles/variables.scss';

  .select-active {
    border: 2px solid #0880AE !important;
    padding: 15px 50px 15px 15px !important;
  }

  .select {
    width: 100%;
    height: 52px;
    cursor: pointer;
    background-image: url("../assets/i/chevron.png");
    background-repeat: no-repeat;
    background-position: right 10px center;
    @include input();
    padding: 16px 50px 16px 16px;
    position: relative;

    .select__drop-down {
      width: 100%;
      position: absolute;
      z-index: 1;
      height: 200px;
      overflow: auto;
      bottom: -210px;
      left: -1px;
      display: none;
      @include input();
      box-sizing: content-box;

      .select__drop-down_option {
        width: 100%;
        height: 44px;
        cursor: pointer;
        border-bottom: 1px solid $color-border;
        padding: 12px 15px;
        box-sizing: border-box;
        color: $color-sub;

        &:first-of-type {
          margin-top: 12px;
        }

        &:last-of-type {
          border-bottom: none;
          margin-bottom: 12px;
        }

        &:hover {
          background-color: $color-hover;

        }
      }
    }
  }

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
      .sign-up__hint_info {
        color: $color-info
      }
    }
  }

</style>

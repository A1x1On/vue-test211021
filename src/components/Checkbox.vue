<template>
      <div class="checkbox" @click="check()" ref="checkboxRef"></div>
</template>

<script>

  import $ from "jquery";

  export default {
    name: 'SignUp',
    props: {
      isChecked: Boolean,
    },
    data: function(){
      return {
        checked : this.isChecked
      }
    },
    mounted: function () {
      this.initMounted();
    },
    methods: {
      initMounted : function() {
        this.checked = this.isChecked;

        if (this.checked) {
          $(this.$refs.checkboxRef).addClass("checkbox-active");
        }
      },

      check : function() {
        this.checked = !this.checked;
        this.$emit('checkboxValue', this.checked);

        if (!this.checked) {
          $(this.$refs.checkboxRef).removeClass("checkbox-active");
        } else {
          $(this.$refs.checkboxRef).addClass("checkbox-active");
        }
      },
    }

  }

</script>

<style scoped lang="scss" >

  @import '@/assets/styles/variables.scss';

  .checkbox {
    background: #FFFFFF;
    float: left;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid $color-border;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 4px;
    width: 24px;
    height: 24px;
  }

  .checkbox-active {
    background: url("../assets/i/check.png");
    background-size: 100%;
    border: 2px solid #0880AE;
  }

</style>

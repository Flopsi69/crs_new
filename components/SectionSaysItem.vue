<script lang="ts" setup></script>

<template>
  <div class="item plate bg--purple-light">
    <div class="info flex">
      <div class="avatar"></div>

      <div class="text">
        Conversionrate store’s expertise and experience helped us improve the
        signup phase with more accurate communication and customization of the
        experience, resulting in 8.3% growth in new user revenue across all
        countries. We also saw an 18%...

        <div class="text__more color-purple"><span>Read more</span></div>
      </div>
    </div>

    <div class="footer flex-between">
      <div class="author">
        <div class="author__name">Alina Volchek</div>
        <div class="author__position">CMO, Depositphotos.com (USA)</div>
      </div>

      <div class="company-logo">photo</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding: 30px;
}

.info {
  gap: 20px;
}

.avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: rgba($purple, .1);
  flex-shrink: 0;
}

.text {
  color: $font-secondary;
  font-size: 17px;
  font-weight: 400;
  line-height: 30px;
  &__more {
    font-size: 18px;
    font-weight: 700;
    span {
      text-decoration-line: underline;
      text-underline-offset: 3px;
      cursor: pointer;
      transition: .3s;
    }
  }
}

.footer {
  margin-top: 30px;
  gap: 20px;
}

.author {
  &__name {
    font-size: 18px;
    font-weight: 700;
  }

  &__position {
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
  }
}
</style>

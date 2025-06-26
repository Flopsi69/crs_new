<script lang="ts" setup></script>

<template>
  <BaseSection class="founders">
    <div class="founders__row flex-between">
      <div class="founders__persons flex-center">
        <div class="person flex-center">
          <img
            class="person__img"
            src="/images/author-ihor.png"
            alt="Ihor Sokolov"
          />

          <div class="person__info">
            <div class="person__name subtitle-1">Ihor Sokolov</div>
            <a
              href="https://www.linkedin.com/in/ihor-sokolov/"
              target="_blank"
              class="person__linkedin subtitle -3"
              >LinkedIn</a
            >
          </div>
        </div>

        <div class="person flex-center">
          <img
            class="person__img"
            src="/images/author-glib.png"
            alt="Glib Hodor"
          />

          <div class="person__info">
            <div class="person__name subtitle-1">Glib Hodorovskyi</div>
            <a
              href="https://www.linkedin.com/in/glib-hodorovskyi/"
              target="_blank"
              class="person__linkedin subtitle -3"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
      <div class="founders__descr subtitle-2">
        Conversion Rate Store was founded in 2017 by two entrepreneurs — Ihor
        and Glib with a clear goal — to build a world-class consulting company.
        Today, CRS is one of the world’s most recognized and award-winning
        conversion optimization agencies, trusted by market leaders like
        Microsoft, Comodo, MacPaw, and SamCart.
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.founders {
  background-color: #35237C;
  color: #fff;
  padding: 32px 0;
  &__row {
    gap: 60px;
  }
  &__descr {
    font-weight: 400;
    line-height: 1.4;
    max-width: 570px;
    width: 100%;
  }
  &__persons {
    gap: 32px;
  }
}

.person {
  gap: 24px;
  &__img {
    width: 64px;
    width: 64px;
    flex-shrink: 0;
  }
  &__name {

  }
  &__linkedin {
    margin-top: 4px;
    color: #F1C345;
    transition: .3s;
    &:hover {
      opacity: .8;
    }
  }
}
</style>

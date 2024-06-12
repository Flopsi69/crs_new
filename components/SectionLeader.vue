<script lang="ts" setup></script>

<template>
  <BaseSection class="leader">
    <BasePlate
      mob-full
      class="flex-between"
    >
      <div class="title-3">
        Recognized as a Global Leader in
        <span class="color-purple">Conversion Rate Optimization</span> (CRO)
        and&nbsp;<span class="color-purple">User Experience Optimization</span>
        (UXO)
      </div>

      <div
        class="bage-mob text-center"
        data-aos="fade-up"
      >
        <img
          src="img/leader-clutchBadge0.svg"
          alt=""
        />
      </div>

      <div class="bages flex justify-end">
        <div
          class="bage"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="700"
        >
          <img
            src="img/leader-clutchBadge1.svg"
            alt=""
          />
        </div>
        <div
          class="bage"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <img
            src="img/leader-clutchBadge3.png"
            alt=""
          />
        </div>
        <div
          class="bage"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <img
            src="img/leader-clutchBadge2.svg"
            alt=""
          />
        </div>
      </div>
    </BasePlate>
  </BaseSection>
</template>

<style lang="scss" scoped>
.plate {
  padding: 40px;
  display: flex;
  gap: 25px;
  @media(max-width: $sm) {
    padding: 32px 20px;
    flex-flow: column;
    gap: 24px;
  }
}

.title-3 {
  max-width: 540px;
  width: 100%;
  @media(max-width: $md) {
    font-size: 24px;
    line-height: 32px;
  }
  @media(max-width: $sm) {
    max-width: 100%;
  }
}

.bages {
  width: 100%;
  @media(max-width: $sm) {
    justify-content: center;
    margin-right: -5%;
    padding: 12px 10px 0;
    border-top: 2px solid #FFF;
  }
}

.bage {
  display: flex;
  justify-content: flex-end;
  max-width: 180px;
  flex: 1;
  @media(max-width: $sm) {
    // max-width: 160px;
    &:first-child {
      display: none;
    }
  }

  img {
    max-width: initial;
    width: 110%;
  }

  &-mob {
    display: none;
    padding: 20px 20px 0;
    max-width: 400px;
    width: 100%;
    margin-bottom: -4px;
    img {
      width: 100%;
    }
    @media(max-width: $sm) {
      display: block;
    }
  }
}
</style>

<template>
  <div class="content-item a-message">
    <span>
      <slot name="default" />
    </span>
  </div>
</template>

<style lang="scss">
.a-message {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 16px;

  @media only screen and (min-width: 540px) {
    font-size: 24px;
  }
}
</style>

<script lang="ts" setup>
const notes = reactive([
  {
    dark: true,
    light: false,
    background: 'light',
    items: ['item 1', 'item 2', 'item 3']
  },
  {
    dark: false,
    light: false,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
    items: ['item 1', 'item 2', 'item 3']
  },
  {
    dark: true,
    light: false,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: false,
    light: true,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: false,
    light: false,
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: false,
    light: false,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'alert', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: true,
    light: false,
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'small', // big | small
  }
]);
</script>

<template>
  <div class="container">
    <testNote
      v-for="(note, index) in notes"
      :key="index"
      v-bind="note"
    ></testNote>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 20px;
  margin: 20px auto;
}
</style>

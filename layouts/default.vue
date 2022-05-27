<template>
  <client-only>
    <q-layout view="hHh Lpr fFf">
      <q-header elevated class="glossy">
        <q-toolbar>
          <q-btn
            class="lt-sm"
            flat
            dense
            round
            aria-label="Menu"
            icon="menu"
            @click="leftDrawerOpen = !leftDrawerOpen" />
        </q-toolbar>
      </q-header>
    </q-layout>
  </client-only>
</template>

<script setup lang="ts">
const leftDrawerOpen = ref(false);
</script>

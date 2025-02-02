<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn variant="tonal" color="secondary" @click="changeLanguage('en')">🇺🇸</v-btn>
        <v-btn variant="tonal" color="secondary" @click="changeLanguage('ru')">🇷🇺</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLanguage = (lang: string) => {
  locale.value = lang; // Update the locale dynamically
  localStorage.setItem('locale', lang); // Persist the selected locale
};
</script>

<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          cover
          src="@/assets/logo.png"
          alt="Logo"
          class="mx-auto"
          max-width="200"
        ></v-img>
        <h2 class="v-typography text-subtitle-1 my-5">{{ $t('home-welcome') }}</h2>
        <h1 class="v-typography text-h1 my-5 text-primary font-weight-bold">{{ $t('app-name') }}</h1>
        <h3 class="v-typography text-subtitle-1 my-5 font-weight-bold">{{ $t('home-description') }}</h3>
        <v-btn
          variant="tonal"
          color="primary"
          @click="navigateToLogin"
          class="mt-5 font-weight-bold"
        >{{ $t('btn-signin') }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
  router.push('/signin');
};
</script>

<template>
    <v-card>
      <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
        <v-tab :value="1">Name</v-tab>
        <v-tab :value="2">Location</v-tab>
        <v-tab :value="3">Contact</v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="tab">
        <v-tabs-window-item :value="1">
          <v-container fluid>
            <h3>Enosis Solutions</h3>
          </v-container>
        </v-tabs-window-item>

        <v-tabs-window-item :value="2">
          <v-container fluid>
            <h3>Gulshan-1, Dhaka</h3>
          </v-container>
        </v-tabs-window-item>

        <v-tabs-window-item :value="3">
          <v-container fluid>
            <h3>contactus@enosisbd.com</h3>
          </v-container>
        </v-tabs-window-item>
        
      </v-tabs-window>
    </v-card>
  </template>
  
  <script>
    export default {
      data: () => ({
        tab: null,
      }),
    }
  </script>
  
  <!-- <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
    <v-container fluid>
      <v-row>
        <v-col v-for="i in 6" :key="i" cols="12" md="4">
          <v-img
            :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
            :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
            height="205"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-tabs-window-item> -->
  
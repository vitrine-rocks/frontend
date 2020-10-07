<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on: menuOpened }">
      <v-app-bar-nav-icon @click="toggleMenu" v-on="menuOpened" />
    </template>
    <v-list>
      <div 
        v-for="item in items"
        :key="item.title"
      >
        <v-list-group
          v-if="item.children.length"
          v-model="item.active"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.children"
            :key="subItem.title"
          >
            <v-list-item>
              <v-list-tile-title class="pl-4">{{ subItem.title }}</v-list-tile-title>
            </v-list-item>
          </v-list-tile>
        </v-list-group>
        <v-list-item v-else>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<script language="ts" src="./index.ts">
</script>
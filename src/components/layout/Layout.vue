<template>
    <v-app class="pa-6"> 
        <SidebarLink />
        <v-main class="content" style="height: 100hv;">
            <router-view />
         </v-main>
    </v-app>
</template>

<script>
 
    import SidebarLink from '@/components/SidebarLink.vue' 
    export default {
        name: 'Layout',
        components: {SidebarLink },
    };
</script>
 
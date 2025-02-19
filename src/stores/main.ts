import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
    const navList = [
        {
            name: '首页',
            path: '/home'
        },
        {
            path: '/about',
            name: '关于我'
        },
        {
            path: '/blog',
            name: '博客'
        },
        {
            path: '/snippet',
            name: "代码片段"
        },
        {
            path: '/courseTool',
            name: 'CourseTool'
        },
    ];
    return {
        navList
    };
});

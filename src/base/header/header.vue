<template>
    <div class="header-nav">
        <div class="nav-title">
            <!-- <img class="nav-logo" src="@/assets/images/logo.png" alt="logo" /> -->
            MY UI
        </div>
        <div class="nav-content">
            <div class="nav-route">
                <div
                    v-for="i in navLeftList"
                    :key="i.label"
                    class="nav-item"
                    :class="{ 'nav-link': i.link !== '#', active: i.route === activeType }"
                    @click="changeNav(i.route)"
                >
                    {{ i.label }}
                </div>
            </div>
            <div class="nav-end">
                <div
                    v-for="i in navRightList"
                    :key="i.label"
                    class="nav-item"
                    :class="{ 'nav-link': i.link !== '#' }"
                    @click="changeNav(i.link, 'link')"
                >
                    {{ i.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        activeType: {
            type: String,
            default: 'home'
        }
    },
    data() {
        return {
            navLeftList: [
                {
                    label: '首页',
                    route: 'home'
                },
                {
                    label: '文档',
                    route: 'doc'
                },
                {
                    label: '组件',
                    route: 'module'
                }
            ],
            navRightList: [
                {
                    label: '中文',
                    link: '#'
                },
                {
                    label: 'github',
                    link: 'https://github.com/Linliangtao/MY-UI'
                },
                {
                    label: 'version',
                    link: '#'
                }
            ]
        };
    },
    methods: {
        changeNav(route, type = 'route') {
            if (type === 'route') {
                this.$router.push({ name: route });
            } else {
                if (route !== '#') {
                    window.open(route);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.header-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 63px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    z-index: 10;
    font-size: 16px;
    background: $color-white;

    .nav-item {
        padding: 0 22px;
        cursor: pointer;
    }
    .nav-link:hover {
        color: $color-theme;
    }

    & .active {
        color: $color-theme;
    }

    .nav-title {
        width: 15%;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        margin-left: 32px;
        color: $color-default;
        cursor: pointer;

        .nav-logo {
            width: 54px;
            height: 45px;
            margin-right: 12px;
        }
    }
    .nav-content {
        @include set-flex($justify: space-between);
        width: 85%;
    }
}

.header-nav,
.nav-route,
.nav-end {
    @include set-flex($align: center);
    font-size: 14px;
}
</style>

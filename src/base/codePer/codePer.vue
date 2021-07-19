<template>
    <div class="fold-code">
        <div class="demo-wrapper">
            <slot></slot>
        </div>
        <div class="per-wrapper">
            <div class="per-content" :style="{ height: height + 'px' }">
                <div class="per-desc"></div>
                <pre ref="codePer" class="language-html" v-html="html"></pre>
            </div>
            <div class="demo-block-control" @click="toggle">
                <svg class="down" aria-hidden="true">
                    <use :xlink:href="height === 0 ? '#icon-iup' : '#icon-idown-copy'"></use>
                </svg>
                <transition name="fade">
                    <span class="show-world">{{ height !== 0 ? '隐藏代码' : '显示代码' }}</span>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CodePer',
    props: {},
    data() {
        return {
            html: '',
            height: 0,
            computedHeight: 100
        };
    },
    methods: {
        toggle() {
            if (this.height === 0) {
                this.height = this.computedHeight;
            } else {
                this.height = 0;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
pre {
    margin: 0;
    background-color: #fafafa;
    font-size: 15px;
    padding: 18px 24px;
}

.demo-wrapper {
    padding: 24px;
}

.fold-code {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;

    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);

        .down {
            transform: translateX(-35px);
        }
    }
}

.per-wrapper {
    .per-content {
        background-color: #fafafa;
        border-top: 1px solid #eaeefb;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;
    }

    .demo-block-control {
        border-top: 1px solid #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;
        text-align: center;
        left: 0;

        &:hover {
            color: $color-theme;
            background-color: #f9fafc;
        }

        .down {
            width: 16px;
            height: 44px;
            fill: currentcolor;
            transition: all 0.3s;
        }

        .show-world {
            position: absolute;
            font-size: 14px;
            line-height: 44px;
            transition: all 0.3s;
            transform: translateX(-30px);

            &.fade-enter {
                opacity: 0;
                transform: translateX(10px);
            }

            &.fade-enter-to {
                opacity: 1;
                transform: translateX(-30px);
            }

            &.fade-leave {
                opacity: 1;
                transform: translateX(-30px);
            }

            &.fade-leave-to {
                opacity: 0;
                transform: translateX(0px);
            }
        }
    }
}
</style>

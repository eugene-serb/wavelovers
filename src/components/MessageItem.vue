<template>
    <div class="message">
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'MessageItem',
        components: {},
    };
</script>

<style>
    .message {
        width: 100%;
        margin-bottom: 16px;
        padding: 32px;
        border-radius: var(--number-border-radius);
        background: var(--color-content-item-background);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-size: 16px;
    }

    @media only screen and (min-width: 540px) {
        .message {
            font-size: 24px;
        }
    }
</style>

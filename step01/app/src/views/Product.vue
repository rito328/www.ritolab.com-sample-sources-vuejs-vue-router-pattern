<!-- views/Product.vue -->
<template>
    <div class="product">
        <h1>Product</h1>
        <div class="nav">
            <router-link to="/product/A">ProductA</router-link> |
            <router-link to="/product/B">ProductB</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<template>
    <div class="setting">
        <h1>Setting</h1>
        <main>
            <div id="left">
                <nav>
                    <ul>
                        <router-link tag="li" to="/setting/A">Setting A</router-link>
                        <router-link tag="li" to="/setting/B">Setting B</router-link>
                    </ul>
                </nav>
            </div>
            <div id="right">
                <router-view></router-view>
                <router-view name="sub"></router-view>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 200px;
        background-color: #fcfcfc;
        #left {
            width: 180px;
            nav {
                li {
                    padding: 5px 5px;
                    margin-bottom: 10px;
                    list-style: none;
                    border: 1px solid #a3aebc;
                    color: #a3aebc;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
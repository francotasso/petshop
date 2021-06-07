<template>
    <nav class="navigation navbar navbar-default" :class="sticky ? 'sticky-header' : 'original'">
        <div class="container">
            <div class="navbar-header">
                <!-- <b-button v-b-toggle="`sidebar-right${!sticky ? '1' : '2'}`" class="open-btn" @click="$emit('overlay', true)">
                    <svg viewBox="0 0 150 100" width="30" height="30">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </b-button>
                <b-sidebar :id="`sidebar-right${!sticky ? '1' : '2'}`" right shadow @hidden="$emit('overlay', false)">
                    <ul class="nav navbar-nav text-secondary">
                        <li class="menu-item-has-children">
                            <div class="toggle-category" v-b-toggle="'collapseMenu1'">
                                Home
                            </div>
                            <b-collapse id="collapseMenu1">
                                <ul class="sub-menu">
                                    <li>
                                        <router-link to="#">
                                            Home style 1
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            Home style 2
                                        </router-link>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <div class="toggle-category" v-b-toggle="'collapseMenu11'" @click.prevent>
                                            Third level
                                        </div>
                                        <b-collapse id="collapseMenu11">
                                            <ul class="sub-menu">
                                                <li>
                                                    <router-link to="#">Level 3</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">Level 3</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">Level 3</router-link>
                                                </li>
                                            </ul>
                                        </b-collapse>
                                    </li>
                                </ul>
                            </b-collapse>
                        </li>
                        <li class="menu-item-has-children">
                            <div class="toggle-category" @click.prevent v-b-toggle="'collapseMenu2'">
                                Pages
                            </div>
                            <b-collapse id="collapseMenu2">
                                <ul class="sub-menu">
                                    <li>
                                        <router-link to="/about">
                                            About
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            Testimonials
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            404
                                        </router-link>
                                    </li>
                                </ul>
                            </b-collapse>
                        </li>
                        <li class="menu-item-has-children">
                            <div class="toggle-category" @click.prevent v-b-toggle="'collapseMenu3'">
                                Services
                            </div>
                            <b-collapse id="collapseMenu3">
                                <ul class="sub-menu">
                                    <li>
                                        <router-link to="#">
                                            Services
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            Service single
                                        </router-link>
                                    </li>
                                </ul>
                            </b-collapse>
                        </li>
                        <li class="menu-item-has-children">
                            <div class="toggle-category" @click.prevent v-b-toggle="'collapseMenu4'">
                                Projects
                            </div>
                            <b-collapse id="collapseMenu4">
                                <ul class="sub-menu">
                                    <li>
                                        <router-link to="#">
                                            Projects
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            Project single
                                        </router-link>
                                    </li>
                                </ul>
                            </b-collapse>
                        </li>
                        <li class="menu-item-has-children">
                            <div class="toggle-category" @click.prevent v-b-toggle="'collapseMenu5'">
                                Blog
                            </div>
                            <b-collapse id="collapseMenu5">
                                <ul class="sub-menu">
                                    <li>
                                        <router-link to="#">
                                            Blog
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            Blog grid
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            Blog single
                                        </router-link>
                                    </li>
                                </ul>
                            </b-collapse>
                        </li>
                        <li>
                            <router-link to="#">
                                Contact
                            </router-link>
                        </li>
                    </ul>
                </b-sidebar> -->
                <router-link to="/" class="navbar-brand">
                    <b-img src="../../pets-logo.png" width="75" fluid alt="Logo" style="margin-top: -25px;"></b-img>
                </router-link>
            </div>
            <div id="navbar" class="d-lg-block d-none">
                <!-- <ul class="nav navbar-nav text-secondary">
                    <li class="menu-item-has-children">
                        <router-link to="/">
                            Home
                        </router-link>
                        <ul class="sub-menu">
                            <li>
                                <router-link to="#">
                                    Home style 1
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    Home style 2
                                </router-link>
                            </li>
                            <li class="menu-item-has-children">
                                <router-link to="#">
                                    Third level
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                                    </svg>
                                    <ul class="sub-menu">
                                        <li>
                                            <router-link to="#">Level 3</router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">Level 3</router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">Level 3</router-link>
                                        </li>
                                    </ul>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <router-link to="#">
                            Pages
                        </router-link>
                        <ul class="sub-menu">
                            <li>
                                <router-link to="/about">
                                    About
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    Testimonials
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    404
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <router-link to="#">
                            Services
                        </router-link>
                        <ul class="sub-menu">
                            <li>
                                <router-link to="#">
                                    Services
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    Service single
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <router-link to="#">
                            Projects
                        </router-link>
                        <ul class="sub-menu">
                            <li>
                                <router-link to="#">
                                    Projects
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    Project single
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <router-link to="#">
                            Blog
                        </router-link>
                        <ul class="sub-menu">
                            <li>
                                <router-link to="#">
                                    Blog
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    Blog grid
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    Blog single
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="#">
                            Contact
                        </router-link>
                    </li>
                </ul> -->
            </div>
            <div class="quote-btn">
                <!-- <router-link class="theme-btn" to="#">
                    Get Started
                </router-link> -->
                <h1>+PETS</h1>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        sticky: {
            required: false,
            default: false,
            type: Boolean
        }
    },
    mounted() {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (scrollTop < lastScrollTop && scrollTop > 900) {
                const sticky = document.querySelector('.sticky-header');
                sticky.classList.add('sticky-on');
            } else {
                const sticky = document.querySelector('.sticky-header');
                sticky.classList.remove('sticky-on');
            }
            lastScrollTop = scrollTop;
        })
    }
}
</script>
<div class="site-header">
    <div class="container">
        <nav>
            <ul id="large-nav">
                <li>
                    <a href="/">
                        主页
                        <span class="sm-text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/about">
                        关于
                        <span class="sm-text">About</span>
                    </a>
                </li>
                <li>
                    <a href="/join_us">
                        加入我们
                        <span class="sm-text">Join us</span>
                    </a>
                </li>
                <li>
                    <a href="/blog">
                        博客
                        <span class="sm-text">Blog</span>
                    </a>
                </li>
            </ul>
            <ul id="small-nav">
                <li>
                    <a href="/">
                        主页
                        <span class="sm-text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/about">
                        关于
                        <span class="sm-text">About</span>
                    </a>
                </li>
                <li>
                    <div class="dropdown">
                        ...
                        <div class="dropdown-content">

                            <a href="/join_us">
                                加入我们
                            </a>

                            <a href="/blog">
                                博客
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>

<style>
.site-header {
    display: flex;
    width: 100%;
    height: 3rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-bottom: solid 1px black;
    /*border-image: linear-gradient(to right, #0000ff, #030712) 1;*/

    margin: 0;
    padding-bottom: .1rem;

}

.site-header .container {
    padding-left: 2rem;
    padding-right: 2rem;
}

.site-header .container ul {
    /*justify-content: center;
    background-color: blue;*/
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.site-header .container ul li {
    float: left;
    margin: 1rem;
}

.site-header .container ul li a {
    display: block;
    width: 7.2rem;
    padding: .5rem 1.2rem .5rem 1.2rem;
    text-align: center;
    color: black;
    /*border: solid .1px;*/
}

.site-header .container ul li a:hover {
    background-color: #0000ff;
    color: white;
}

/* For the mobile device */

.sm-text {
    font-size: .8rem;
}

#small-nav {
    display: none;
}

@media screen and (max-width: 1024px) {
    .site-header .container ul li {
        margin: .5rem;
    }
    .site-header .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

@media screen and (max-width: 768px) {
    .site-header .container ul li {
        margin: .2rem;
    }

    .site-header .container ul li a {
        width: 5rem;
        padding: .5rem .5rem .5rem .5rem;
    }

    .sm-text {
        display: none;
    }

    .site-header .container {
        padding-left: 0;
        padding-right: 0;
    }
}

@media screen and (max-width: 480px) {
    #large-nav {
        display: none;
    }
    #small-nav {
        display: block;
    }
    .dropdown {
        position: relative;
        display: block;
        width: 5rem;
        padding: .5rem .5rem .5rem .5rem;
        text-align: center;
        color: black;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 7rem;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        right: 0;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content a {
        width: 100% !important;
        padding: .5rem 0 .5rem 0 !important;
    }
}
</style>
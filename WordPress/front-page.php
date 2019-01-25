<?php get_header() ?>
    <div class="front-page">

        <div class="hero-video" style="background: url(<?php echo get_template_directory_uri() ?>/assets/hero.mp4)">
            <video autoplay loop muted>
                <source src="<?php echo get_template_directory_uri() ?>/assets/hero.mp4">
            </video>

            <div class="hero-overlay">
                <span class="subtitle">
                        <a href="#">Logistics Solution</a>
                    <span class="sep">•</span>
                        Sjöfrakt
                    <span class="sep">•</span>
                        Flygfrakt
                    <span class="sep">•</span>
                        Rail
                </span>
                <span class="title">When business goes<span class="highlight">beyond borders.</span>

                <div class="cta-wrapper">
                    <!-- "Vad gör C Land?"-btn -->
                    <a href="#" class="cland-arrow">
                        <span class="arrow-inner"></span>
                        <span class="label">Vad gör C Land?</span>
                    </a>

                    <!-- "För kunder"-btn -->
                    <div class="cc-button-wrapper" id="cc-button-wrapper"> <!-- (CC: Current Customer) -->
                        <div class="cland-arrow grey-theme" id="cc-options-caller">
                            <span class="arrow-inner"></span>
                            <span class="cross-inner"></span>
                            <span class="label">För kunder</span>
                        </div>

                        <div class="cc-options-wrapper">
                            <a class="item">Order Management</a>
                            <a class="item">C.O.S Login</a>
                            <a class="item">Price Request</a>
                            <a class="item">C Shipment Status</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scroll-indicator"><!-- --></div>
        </div>

        <div class="about-row">
            <div class="text-section">
                <span class="title"><?php pll_e("Vi är C Land Logistics") ?></span>
                <span class="text"><?php the_content() ?></span>
            </div>

            <div class="image-section">

            </div>
        </div>

    </div>

    <script>
        // Script for "För kunder"-button
        (function() {
            var wrapper = document.getElementById("cc-button-wrapper");
            var caller = document.getElementById("cc-options-caller");
            caller.addEventListener("click", function() {
                wrapper.classList.add("active");
            });
        })();
    </script>
<?php get_footer() ?>
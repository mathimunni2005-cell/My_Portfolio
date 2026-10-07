const canvas = document.getElementById("particleCanvas");

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


/* Create particles */

for (let i = 0; i < 100; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 3 + 1,

        speedX: (Math.random() - 0.5) * 0.8,

        speedY: (Math.random() - 0.5) * 0.8

    });

}


/* Animation */

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /* Draw particles */

    particles.forEach((particle) => {

        particle.x += particle.speedX;

        particle.y += particle.speedY;


        /* Keep particles inside screen */

        if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
        }


        /* Particle */

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#60a5fa";

        ctx.shadowBlur = 10;

        ctx.shadowColor = "#2563eb";

        ctx.fill();

    });


    /* Connect particles */

    for (let i = 0; i < particles.length; i++) {

        for (let j = i + 1; j < particles.length; j++) {

            let dx =
                particles[i].x -
                particles[j].x;

            let dy =
                particles[i].y -
                particles[j].y;

            let distance =
                Math.sqrt(dx * dx + dy * dy);


            if (distance < 120) {

                ctx.beginPath();

                ctx.moveTo(
                    particles[i].x,
                    particles[i].y
                );

                ctx.lineTo(
                    particles[j].x,
                    particles[j].y
                );

                ctx.strokeStyle =
                    "rgba(96, 165, 250, 0.15)";

                ctx.lineWidth = 1;

                ctx.stroke();

            }

        }

    }


    requestAnimationFrame(animate);

}

animate();
/* =========================================
   GLOBAL ANIMATED BACKGROUND
   ABOUT → CONTACT
========================================= */

const globalCanvas = document.getElementById("globalCanvas");

if (globalCanvas) {

    const globalCtx = globalCanvas.getContext("2d");

    let globalParticles = [];

    function resizeGlobalCanvas() {

        globalCanvas.width = window.innerWidth;
        globalCanvas.height = window.innerHeight;

    }

    resizeGlobalCanvas();

    window.addEventListener("resize", resizeGlobalCanvas);


    /* Create particles */

    for (let i = 0; i < 110; i++) {

        globalParticles.push({

            x: Math.random() * globalCanvas.width,

            y: Math.random() * globalCanvas.height,

            size: Math.random() * 2.5 + 0.5,

            speedX: (Math.random() - 0.5) * 0.5,

            speedY: (Math.random() - 0.5) * 0.5

        });

    }


    function animateGlobal() {

        globalCtx.clearRect(
            0,
            0,
            globalCanvas.width,
            globalCanvas.height
        );


        /* Moving particles */

        globalParticles.forEach(particle => {

            particle.x += particle.speedX;
            particle.y += particle.speedY;


            if (
                particle.x < 0 ||
                particle.x > globalCanvas.width
            ) {
                particle.speedX *= -1;
            }


            if (
                particle.y < 0 ||
                particle.y > globalCanvas.height
            ) {
                particle.speedY *= -1;
            }


            globalCtx.beginPath();

            globalCtx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            globalCtx.fillStyle = "#60a5fa";

            globalCtx.shadowBlur = 12;

            globalCtx.shadowColor = "#2563eb";

            globalCtx.fill();

        });


        /* Connecting AI network */

        for (let i = 0; i < globalParticles.length; i++) {

            for (
                let j = i + 1;
                j < globalParticles.length;
                j++
            ) {

                const dx =
                    globalParticles[i].x -
                    globalParticles[j].x;

                const dy =
                    globalParticles[i].y -
                    globalParticles[j].y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);


                if (distance < 120) {

                    globalCtx.beginPath();

                    globalCtx.moveTo(
                        globalParticles[i].x,
                        globalParticles[i].y
                    );

                    globalCtx.lineTo(
                        globalParticles[j].x,
                        globalParticles[j].y
                    );

                    globalCtx.strokeStyle =
                        "rgba(96,165,250,0.14)";

                    globalCtx.lineWidth = 1;

                    globalCtx.stroke();

                }

            }

        }


        requestAnimationFrame(animateGlobal);

    }


    animateGlobal();

}
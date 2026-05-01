// Mobile menu toggle functionality (kept original behavior)
      let menuIcon = document.querySelector('#menu-icon');
      let navbar = document.querySelector('.navbar');

      if (menuIcon) {
        menuIcon.onclick = () => {
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
        };
      }

      // Close menu when clicking on a nav link (optional but good UX)
      document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
          if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            if (menuIcon) menuIcon.classList.remove('bx-x');
          }
        });
      });

      //message send
      const sendMessage = ()=>{
        let msg = document.querySelector('.msg').value;
        console.log(msg);

        const mobileno = 916355437576;

        let url = "https://wa.me/" + mobileno + "?text=" + encodeURIComponent(msg);

        window.open(url, "_blank");
      }
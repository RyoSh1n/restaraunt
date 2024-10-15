const menuSelect = document.getElementById('menu');
        const totalPriceElement = document.getElementById('total-price');

        const prices = {
            sushi: 12000,
            ramen: 3500,
            tom_yam: 3200,
            salad: 2500,
            mochi: 1800
        };

        menuSelect.addEventListener('change', function() {
            let total = 0;
            const selectedOptions = Array.from(menuSelect.selectedOptions);
            
            selectedOptions.forEach(option => {
                total += prices[option.value];
            });

            totalPriceElement.textContent = total;
        });

        const form = document.getElementById('order-form');
        const modal = document.getElementById('orderModal');
        const closeModal = document.querySelector('.close');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
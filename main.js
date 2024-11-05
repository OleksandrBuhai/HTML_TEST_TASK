document.addEventListener('DOMContentLoaded', () => {
    const imgData = [
        { id: 1, src: 'assets/images/colorSelectIMage/image1.png', soldOut: true },
        { id: 2, src: 'assets/images/colorSelectIMage/image2.png', soldOut: true },
        {
            id: 3,
            src: 'assets/images/colorSelectIMage/image3.png',
            soldOut: false,
            colorName: "Metropolis/Jasper Green",
            mainImage: {
                large: 'assets/images/mainImage/asicsBlack/imageFront.png',
                thumbnail: 'assets/images/mainImage/asicsBlack/image1.png'
            },
            productName: "ASICS GEL-KAYANO 14",
            price: "158.00",
            thumbnails: [
                {
                    large: 'assets/images/mainImage/asicsBlack/imageFront.png',
                    thumbnail: 'assets/images/mainImage/asicsBlack/smallImage/image1.png'
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsBlack/smallImage/image2.png',
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsBlack/smallImage/image4.png'
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsBlack/smallImage/image4.png',
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsBlack/smallImage/image5.png',
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsBlack/smallImage/image6.png',
                }
            ],
            details: `
            <strong>Original inspired tooling</strong><br><br>
            2000s design language 
             <br><br>
            <strong>GEL technology cushioning provides excellent shock absorption</strong>  <br><br>
            TRUSSTIC support system 
             <br><br>
            <strong>The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology</strong>
        `,
            description: `
            The GEL-KAYANO 14 sneaker resurfaces with its late 2000s aesthetic as a nod to our storied GEL-KAYANO series. 
            Reinterpreting the shoe's performance capabilities with updated materials and componentry, this version became the first iteration in the sneaker's lineage to be designed by someone other than Toshikazu Kayano. Inspired by the original tooling from 2008, this shoe also features GEL technology underfoot for advanced impact absorption.
            <br><br>
            <strong>Style #:</strong> 1203A537.102
        `,

            shipping: "The ASICS GEL-KAYANO 14 is available at various online and physical retailers. Prices typically range from $140 to $160 depending on size, colorway, and availability. Popular platforms like ASICS Official Store, Amazon, Foot Locker, and Zappos offer these sneakers with options for free shipping or discounts on certain models. Be sure to check for seasonal sales or limited-time offers when shopping, as prices can vary. Zappos and Amazon often feature customer reviews and size guides to assist with the purchasing process."

        },
        { id: 4, src: 'assets/images/colorSelectIMage/image4.png', soldOut: true },
        {
            id: 5,
            src: 'assets/images/colorSelectIMage/image5.png',
            soldOut: false,
            colorName: "White/Tai Chi Yellow",
            mainImage: {
                large: 'assets/images/mainImage/asicsYellow/imageFront.png',
                thumbnail: 'assets/images/mainImage/asicsYellow/imageThumb.png'
            },
            productName: "ASICS GEL-KAYANO 14",
            price: "155.00",
            thumbnails: [
                {
                    large: 'assets/images/mainImage/asicsYellow/imageFront.png',
                    thumbnail: 'assets/images/mainImage/asicsYellow/smallImage/image1.png'
                },
                {
                    large: 'assets/images/mainImage/asicsBlack/imageBottom.png',
                    thumbnail: 'assets/images/mainImage/asicsYellow/smallImage/image2.png',
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsYellow/smallImage/image3.png',
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsYellow/smallImage/image4.png',
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsYellow/smallImage/image5.png'
                },
                {
                    thumbnail: 'assets/images/mainImage/asicsYellow/smallImage/image6.png',
                }
            ],
            details: `
            <strong>Original inspired tooling</strong><br><br>
            2000s design language 
             <br><br>
            <strong>GEL technology cushioning provides excellent shock absorption</strong>  <br><br>
            TRUSSTIC support system 
             <br><br>
            <strong>The sockliner is produced with the solution dyeing process that reduces water usage by approximately 33% and carbon emissions by approximately 45% compared to the conventional dyeing technology</strong>
        `,
            description: `
            The GEL-KAYANO 14 sneaker resurfaces with its late 2000s aesthetic as a nod to our storied GEL-KAYANO series. 
            Reinterpreting the shoe's performance capabilities with updated materials and componentry, this version became the first iteration in the sneaker's lineage to be designed by someone other than Toshikazu Kayano. Inspired by the original tooling from 2008, this shoe also features GEL technology underfoot for advanced impact absorption.
            <br><br>
            <strong>Style #:</strong> 1203A537.102
        `,

            shipping: "The ASICS GEL-KAYANO 14 is available at various online and physical retailers. Prices typically range from $140 to $160 depending on size, colorway, and availability. Popular platforms like ASICS Official Store, Amazon, Foot Locker, and Zappos offer these sneakers with options for free shipping or discounts on certain models. Be sure to check for seasonal sales or limited-time offers when shopping, as prices can vary. Zappos and Amazon often feature customer reviews and size guides to assist with the purchasing process."

        },
    ];

    const colorOptionsContainer = document.querySelector('.color-options-container');
    const mainImageElement = document.getElementById('mainImage');
    const productNameElement = document.querySelector('.card-details h2');
    const priceElement = document.querySelector('.selected-price');
    const colorNameElement = document.querySelector('.selected-color');
    const thumbnailContainer = document.querySelector('.card-images-thumbnail');
    const tabButtons = document.querySelectorAll('.tabs .tab-button');
    const productTabsContent = document.querySelector('.product-tabs-content');
    let selectedColorId = 3;

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    function showTooltip() {

    };

    function hideTooltip() {

    };

    function updateProductDetails(imageData) {
        mainImageElement.src = imageData.mainImage.large;
        productNameElement.textContent = imageData.productName;
        priceElement.textContent = `$ ${imageData.price}`;
        colorNameElement.textContent = imageData.colorName;
        selectedColorId = imageData.id;
        updateThumbnails(imageData);
    };

    function updateThumbnails(imageData) {
        thumbnailContainer.innerHTML = '';
        imageData.thumbnails.forEach((thumb) => {
            const thumbDiv = document.createElement('div');
            thumbDiv.className = 'thumbnail';
            const thumbImg = document.createElement('img');
            thumbImg.src = thumb.thumbnail;
            thumbImg.className = 'thumbnail-image';
            thumbDiv.appendChild(thumbImg);
            thumbDiv.addEventListener('click', () => {
                const allThumbnails = document.querySelectorAll('.thumbnail');
                allThumbnails.forEach((el) => el.classList.remove('selected'));
                thumbDiv.classList.add('selected');
                if (thumb.large) {
                    mainImageElement.src = thumb.large;
                } else {
                    thumbDiv.classList.add('unclickable');
                    thumbDiv.style.cursor = 'not-allowed';
                }
            });

            thumbnailContainer.appendChild(thumbDiv);
        });
    }



    function addColorOption(imageData) {
        const imgElement = document.createElement('img');
        imgElement.src = imageData.src;
        imgElement.className = 'color-option';
        if (imageData.soldOut) {
            imgElement.classList.add('sold-out');
            imgElement.addEventListener('mouseenter', (e) => showTooltip(e, 'Sold Out'));
            imgElement.addEventListener('mousemove', (e) => showTooltip(e, 'Sold Out'));
            imgElement.addEventListener('mouseleave', hideTooltip);
        } else {
            imgElement.addEventListener('click', () => {
                document.querySelectorAll('.color-option').forEach(img => img.classList.remove('selected'));
                imgElement.classList.add('selected');
                updateProductDetails(imageData);
                updateTabContent(imageData.id);
            });
        };
        colorOptionsContainer.appendChild(imgElement);
    };

    imgData.forEach((imageData) => {
        addColorOption(imageData);
        if (imageData.id === 3) {
            updateProductDetails(imageData);
            updateTabContent(imageData.id);
            colorOptionsContainer.lastChild.classList.add('selected');
        }
    });

    function updateTabContent() {
        productTabsContent.innerHTML = '';
        const selectedProduct = imgData.find(item => item.id === selectedColorId);
        if (selectedProduct) {
            let content = selectedProduct.description;
            const activeTabButton = Array.from(tabButtons).find(button => button.classList.contains('active')) || tabButtons[0];
            if (!activeTabButton.classList.contains('active')) {
                activeTabButton.classList.add('active');
            }
            switch (activeTabButton.textContent) {
                case 'Description':
                    content = selectedProduct.description;
                    break;
                case 'Details':
                    content = selectedProduct.details;
                    break;
                case 'Shipping':
                    content = selectedProduct.shipping;
                    break;
            }
            const contentElement = document.createElement('div');
            contentElement.innerHTML = content;
            productTabsContent.appendChild(contentElement);
        };
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            updateTabContent(selectedColorId);
        });
    });
});
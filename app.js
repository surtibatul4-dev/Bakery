/**
 * Creme & Crumbs — Interactive Application Logic
 * Mobile Drawer, Product Filtering, Quick View Modal, Live Order Bag & WhatsApp Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Product Catalog Data ---
  const products = [
    {
      id: 'cake-1',
      title: 'Signature Vanilla Berry Celebration Cake',
      category: 'cakes',
      price: 850,
      unit: '500g',
      rating: '4.9 (128)',
      badge: 'Chef Choice',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/cake.jpg',
      shortDesc: 'Artisan tiered celebration sponge infused with Madagascar vanilla, velvety buttercream, and fresh orchard berries.',
      fullDesc: 'Our signature centerpiece cake features three layers of moist vanilla sponge baked with pure butter, layered with homemade raspberry compote and silky Swiss meringue buttercream. Finished with hand-placed fresh blackberries, raspberries, and edible 24k gold leaf.',
      ingredients: 'Madagascar vanilla beans, unsalted European butter, fresh raspberries, blackberries, organic unrefined sugar, farm flour',
      dietary: '100% Vegetarian / Eggless available upon request',
      prepTime: 'Made fresh to order (4 hours advance)'
    },
    {
      id: 'cupcake-1',
      title: 'Artisan Swirl Gourmet Cupcakes',
      category: 'cupcakes',
      price: 120,
      unit: 'per piece',
      rating: '4.9 (94)',
      badge: 'Bestseller',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/cupcakes.jpg',
      shortDesc: 'Fluffy sponge cupcakes topped with Belgian chocolate curls, whipped buttercream rosettes, and berry sprinkles.',
      fullDesc: 'A delightful selection of gourmet cupcakes featuring red velvet with tangy cream cheese frosting, dark chocolate fudge with cocoa curls, and classic vanilla bean with fresh berry puree.',
      ingredients: 'Callebaut cocoa, cream cheese, churned cream, organic vanilla, unbleached flour',
      dietary: '100% Vegetarian / Pure Veg',
      prepTime: 'Baked fresh every morning'
    },
    {
      id: 'cookie-1',
      title: 'Artisanal Golden Butter Cookies',
      category: 'cookies',
      price: 240,
      unit: 'box of 8',
      rating: '4.8 (82)',
      badge: 'Traditional',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/cookies.jpg',
      shortDesc: 'Crisp on the outside, tender inside traditional butter cookies dusted with crystalline sugar pearls.',
      fullDesc: 'Slow-baked according to an heirloom recipe with 100% pure churned butter and sweet cream. Crisp edges with a melt-in-the-mouth center that pairs impeccably with artisan coffee or chai.',
      ingredients: '82% fat sweet cream butter, cane sugar, pure vanilla extract, sea salt',
      dietary: 'Eggless / Pure Vegetarian',
      prepTime: 'Freshly baked daily'
    },
    {
      id: 'cookie-2',
      title: 'Molten Dark Chocolate Chunk Cookies',
      category: 'cookies',
      price: 180,
      unit: 'pair (2 pcs)',
      rating: '5.0 (145)',
      badge: 'Customer Fav',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/chocolate-cookies.jpg',
      shortDesc: 'Warm, decadent cookies packed with pools of molten Belgian dark chocolate and flaky Maldon sea salt.',
      fullDesc: 'The ultimate chocolate indulgence. Rich double-chocolate cookie dough baked till chewy, stuffed with 70% dark Belgian chocolate chunks that melt when broken apart, balanced with flaky sea salt.',
      ingredients: '70% Belgian dark chocolate, Dutch process cocoa, sea salt flakes, churned butter',
      dietary: 'Eggless / Pure Vegetarian',
      prepTime: 'Fresh batches baked every 3 hours'
    },
    {
      id: 'croissant-1',
      title: 'Parisian 72-Layer Butter Croissant',
      category: 'viennoiserie',
      price: 140,
      unit: 'per piece',
      rating: '4.9 (110)',
      badge: 'French Classic',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/croissant.jpg',
      shortDesc: 'Authentic flaky French croissants with airy honeycomb crumb and rich golden caramelized crust.',
      fullDesc: 'Hand-laminated over 36 hours with pure French-style butter, rolled into 72 delicate layers, and baked to golden perfection. Crisp and shattering on the outside with an ethereal soft interior.',
      ingredients: 'High-protein wheat flour, cultured European butter, filtered spring water, yeast, sea salt',
      dietary: 'Pure Vegetarian (No Gelatin)',
      prepTime: 'Available fresh from 8:00 AM'
    },
    {
      id: 'choc-balls-1',
      title: 'Artisan Chocolate Truffle Balls',
      category: 'chocolates',
      price: 380,
      unit: 'box of 6',
      rating: '4.9 (78)',
      badge: 'Luxury',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/chocolate-balls.jpg',
      shortDesc: 'Handcrafted chocolate ganache truffles coated in gold dust, cocoa, shredded coconut & roasted hazelnuts.',
      fullDesc: 'Exquisite bite-sized truffles filled with velvety dark chocolate ganache infused with hazelnut praline. Rolled by hand in dark Dutch cocoa, toasted coconut flakes, crushed Iranian pistachios, and gold dust.',
      ingredients: 'Belgian dark ganache, fresh dairy cream, hazelnut paste, cocoa powder, 24k gold dust',
      dietary: '100% Vegetarian',
      prepTime: 'Handmade in temperature-controlled room'
    },
    {
      id: 'cheesecake-1',
      title: 'Classic New York Strawberry Cheesecake',
      category: 'cakes',
      price: 280,
      unit: 'generous slice',
      rating: '4.9 (116)',
      badge: 'Rich & Creamy',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/cheesecake.jpg',
      shortDesc: 'Velvety smooth baked cream cheese on a crunchy buttery graham crust topped with strawberry coulis.',
      fullDesc: 'Slow-baked in a water bath to achieve a cloud-like velvety texture. Made with authentic Philadelphia cream cheese over a toasted spiced crust and finished with tart strawberry compote.',
      ingredients: 'Philadelphia cream cheese, sour cream, fresh strawberries, graham crust, Madagascar vanilla',
      dietary: 'Eggless preparation available',
      prepTime: 'Chilled for 12 hours for ideal slice texture'
    },
    {
      id: 'tiramisu-1',
      title: 'Authentic Italian Espresso Tiramisu',
      category: 'chocolates',
      price: 260,
      unit: 'individual cup',
      rating: '5.0 (132)',
      badge: 'Chef Special',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/tiramisu.jpg',
      shortDesc: 'Espresso-soaked Savoiardi ladyfinger biscuits layered with rich mascarpone zabaglione and cocoa.',
      fullDesc: 'Imported Italian savoiardi sponge fingers drenched in freshly brewed dark espresso, layered with whipped mascarpone cream and dusted generously with bittersweet Dutch cocoa powder.',
      ingredients: 'Italian mascarpone, Arabica dark roast espresso, Savoiardi biscuits, Valrhona cocoa powder',
      dietary: 'Eggless / Pure Vegetarian recipe',
      prepTime: 'Freshly prepared and chilled daily'
    },
    {
      id: 'macarons-1',
      title: 'French Pastel Macarons Assortment',
      category: 'chocolates',
      price: 360,
      unit: 'box of 6',
      rating: '4.8 (89)',
      badge: 'Patisserie',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/macarons.jpg',
      shortDesc: 'Delicate crisp almond meringue shells with smooth ganache fillings in pistachio, caramel & berry.',
      fullDesc: 'Signature Parisian delicacy crafted from finely ground California almonds and whipped meringue. Filled with dark chocolate ganache, salted caramel, Sicilian pistachio, and raspberry coulis.',
      ingredients: 'Almond flour, sugar, white and dark chocolate ganache, pistachio paste, fruit purees',
      dietary: 'Eggless / Vegetarian friendly',
      prepTime: 'Handmade fresh daily'
    },
    {
      id: 'pastry-1',
      title: 'Artisan Pastries & Glazed Brioche Buns',
      category: 'viennoiserie',
      price: 160,
      unit: 'per piece',
      rating: '4.9 (98)',
      badge: 'Fresh Today',
      badgeClass: 'badge-special',
      isVeg: true,
      image: 'images/pastries.jpg',
      shortDesc: 'Warm fragrant cinnamon danish rolls and golden glazed brioche buns with honey and roasted pecans.',
      fullDesc: 'Baked fresh every morning with tender brioche dough swirled with Ceylon cinnamon, dark brown sugar, and toasted pecans, drizzled with a light vanilla bean cream glaze.',
      ingredients: 'Cultured butter, Ceylon cinnamon, honey glaze, roasted pecans, enriched brioche flour',
      dietary: '100% Vegetarian',
      prepTime: 'Straight from the morning bake at 8:00 AM'
    }
  ];

  // --- 2. State Management ---
  let cart = [];
  let currentCategory = 'all';
  let searchQuery = '';

  // DOM Elements
  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartTotalAmount = document.getElementById('cartTotalAmount');
  const cartBadge = document.getElementById('cartBadge');
  const checkoutWhatsAppBtn = document.getElementById('checkoutWhatsAppBtn');

  // Mobile Nav Elements
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Quick View Modal Elements
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewClose = document.getElementById('quickViewClose');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalIngredients = document.getElementById('modalIngredients');
  const modalDietary = document.getElementById('modalDietary');
  const modalPrepTime = document.getElementById('modalPrepTime');
  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
  let selectedModalProduct = null;

  // Custom Order Form
  const customOrderForm = document.getElementById('customOrderForm');

  // --- 3. Render Product Cards ---
  function renderProducts() {
    if (!productsGrid) return;

    const filtered = products.filter(item => {
      const matchesCategory = (currentCategory === 'all' || item.category === currentCategory);
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🧁</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-espresso); margin-bottom: 8px;">No bakery items matched</h3>
          <p style="color: var(--color-text-muted);">Try adjusting your search or switching categories.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(item => `
      <article class="product-card" data-id="${item.id}">
        <div class="product-img-wrapper">
          <img class="product-img" src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="product-badge-strip">
            <span class="badge-tag ${item.badgeClass}">${item.badge}</span>
            ${item.isVeg ? '<span class="badge-tag badge-veg">Pure Veg</span>' : ''}
          </div>
          <button class="product-quick-view-btn" data-id="${item.id}" aria-label="Quick View ${item.title}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Quick View
          </button>
        </div>
        <div class="product-content">
          <div class="product-category-row">
            <span class="product-category">${item.category}</span>
            <span class="product-rating">★ ${item.rating}</span>
          </div>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-desc">${item.shortDesc}</p>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="product-price">₹${item.price}</span>
              <span class="product-unit">${item.unit}</span>
            </div>
            <button class="btn-add-cart" data-id="${item.id}" aria-label="Add ${item.title} to bag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Add to Bag
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach event listeners to new cards
    productsGrid.querySelectorAll('.product-quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openQuickView(id);
      });
    });

    productsGrid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        addToCart(id);
      });
    });
  }

  // --- 4. Filtering & Search Handling ---
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // --- 5. Quick View Modal ---
  function openQuickView(id) {
    const item = products.find(p => p.id === id);
    if (!item) return;

    selectedModalProduct = item;
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalCategory.textContent = item.category.toUpperCase();
    modalTitle.textContent = item.title;
    modalPrice.textContent = `₹${item.price} (${item.unit})`;
    modalDesc.textContent = item.fullDesc;
    modalIngredients.textContent = item.ingredients;
    modalDietary.textContent = item.dietary;
    modalPrepTime.textContent = item.prepTime;

    quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
    selectedModalProduct = null;
  }

  if (quickViewClose) {
    quickViewClose.addEventListener('click', closeQuickView);
  }

  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) {
        closeQuickView();
      }
    });
  }

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
      if (selectedModalProduct) {
        addToCart(selectedModalProduct.id);
        closeQuickView();
      }
    });
  }

  // --- 6. Live Cart / Order Bag System ---
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        unit: product.unit,
        qty: 1
      });
    }

    updateCartUI();
    showToast(`Added "${product.title}" to your order bag!`);
  }

  function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.id !== id);
    }
    updateCartUI();
  }

  function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (cartBadge) {
      cartBadge.textContent = totalCount;
      cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    if (cartTotalAmount) {
      cartTotalAmount.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
    }

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <div class="cart-empty-icon">🧁</div>
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-espresso); margin-bottom: 6px;">Your bag is currently empty</h4>
          <p style="font-size: 0.85rem; color: var(--color-text-muted);">Explore our oven-fresh treats and add your favorites.</p>
        </div>
      `;
      if (checkoutWhatsAppBtn) {
        checkoutWhatsAppBtn.disabled = true;
        checkoutWhatsAppBtn.style.opacity = '0.5';
        checkoutWhatsAppBtn.style.pointerEvents = 'none';
      }
      return;
    }

    if (checkoutWhatsAppBtn) {
      checkoutWhatsAppBtn.disabled = false;
      checkoutWhatsAppBtn.style.opacity = '1';
      checkoutWhatsAppBtn.style.pointerEvents = 'auto';
    }

    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <img class="cart-item-thumb" src="${item.image}" alt="${item.title}">
        <div class="cart-item-info">
          <div>
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-price">₹${item.price} (${item.unit})</span>
          </div>
          <div class="cart-item-actions">
            <div class="qty-control-box">
              <button class="qty-btn" onclick="window.cakeApp.changeQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="window.cakeApp.changeQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove" onclick="window.cakeApp.removeFromCart('${item.id}')" aria-label="Remove item">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Drawer Toggle Handlers
  function openCartDrawer() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // WhatsApp Checkout Integration
  if (checkoutWhatsAppBtn) {
    checkoutWhatsAppBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      let message = `Hello Creme & Crumbs Himmatnagar! 🧁\n\nI would like to place an order for the following freshly baked items:\n\n`;

      cart.forEach((item, index) => {
        message += `${index + 1}. *${item.title}*\n   Quantity: ${item.qty} (${item.unit}) — ₹${item.price * item.qty}\n`;
      });

      message += `\n*Total Estimated Order:* ₹${totalPrice}\n`;
      message += `*Pickup/Delivery Location:* Haji Street, Moti Vorvad, Himmatnagar\n\nPlease let me know the preparation time and delivery confirmation. Thank you!`;

      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918347119789?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // --- 7. Mobile Navigation Drawer ---
  function openMobileNav() {
    mobileNavDrawer.classList.add('open');
    mobileNavOverlay.classList.add('open');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNavDrawer.classList.remove('open');
    mobileNavOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (mobileNavDrawer.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // --- 8. Custom Cake Booking Form ---
  if (customOrderForm) {
    customOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const occasion = document.getElementById('cakeOccasion').value;
      const flavor = document.getElementById('cakeFlavor').value;
      const weight = document.getElementById('cakeWeight').value;
      const date = document.getElementById('cakeDate').value;
      const messageOnCake = document.getElementById('cakeMessage').value.trim();
      const diet = document.getElementById('cakeDiet').value;

      let waText = `Hello Creme & Crumbs Himmatnagar! 🎂 I would like to request a Custom Cake Consultation:\n\n` +
                   `• *Customer Name:* ${name}\n` +
                   `• *Contact Phone:* ${phone}\n` +
                   `• *Event / Occasion:* ${occasion}\n` +
                   `• *Flavor:* ${flavor}\n` +
                   `• *Estimated Weight:* ${weight}\n` +
                   `• *Required Date:* ${date}\n` +
                   `• *Dietary:* ${diet}\n` +
                   (messageOnCake ? `• *Message on Cake:* "${messageOnCake}"\n` : '') +
                   `• *Delivery Location:* Haji Street, Moti Vorvad, Himmatnagar\n\n` +
                   `Please confirm availability and share design references. Thank you!`;

      const encoded = encodeURIComponent(waText);
      const url = `https://wa.me/918347119789?text=${encoded}`;
      window.open(url, '_blank');
      showToast(`Thank you ${name}! Opening WhatsApp to finalize your custom order.`);
      customOrderForm.reset();
    });
  }

  // --- 9. FAQ Accordion Handling ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others for clean accordion experience
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- 10. Interactive BakerBot Chatbot System ---
  const chatbotTriggerBtn = document.getElementById('chatbotTriggerBtn');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatMessagesArea = document.getElementById('chatMessagesArea');
  const chatTextInput = document.getElementById('chatTextInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatChipsArea = document.getElementById('chatChipsArea');

  function openChatbot() {
    if (chatbotWindow) {
      chatbotWindow.classList.add('open');
      const unread = document.getElementById('chatUnreadDot');
      if (unread) unread.style.display = 'none';
      if (chatTextInput) chatTextInput.focus();
    }
  }

  function closeChatbot() {
    if (chatbotWindow) {
      chatbotWindow.classList.remove('open');
    }
  }

  if (chatbotTriggerBtn) chatbotTriggerBtn.addEventListener('click', () => {
    if (chatbotWindow.classList.contains('open')) {
      closeChatbot();
    } else {
      openChatbot();
    }
  });

  if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChatbot);

  // Bot response database & smart intent matching
  function processBotResponse(userInput) {
    const query = userInput.toLowerCase();

    // 1. Order Arrival / Tracking / Status
    if (query.includes('arrive') || query.includes('track') || query.includes('status') || query.includes('when') || query.includes('delivery') || query.includes('time') || query.includes('late')) {
      return {
        text: `🛵 <strong>Delivery & Order Arrival in Himmatnagar:</strong><br><br>
        • <strong>Daily Fresh Bakes:</strong> Freshly packed and delivered across Himmatnagar within <strong>30 to 45 minutes</strong>.<br>
        • <strong>Custom Celebration Cakes:</strong> Delivered on your booked date & time slot.<br><br>
        📍 <strong>Current Order Status Simulation:</strong><br>
        🔥 <em>Stage 3/4: Freshly Baked & Boxed!</em><br>
        🛵 Out with our local rider for <strong>Haji Street / Himmatnagar</strong>. Estimated arrival: <strong>15–20 minutes</strong>.`,
        actions: [
          { label: '💬 Chat on WhatsApp', url: 'https://wa.me/918347119789?text=Hi%20Kudsiya!%20Where%20is%20my%20order%20status?' },
          { label: '📞 Call Store (+91 83471 19789)', url: 'tel:+918347119789' }
        ]
      };
    }

    // 2. Custom Cake Consultation
    if (query.includes('custom') || query.includes('cake') || query.includes('birthday') || query.includes('wedding') || query.includes('flavor') || query.includes('kg')) {
      return {
        text: `🎂 <strong>Custom Designer Celebration Cakes:</strong><br><br>
        We craft custom cakes from <strong>0.5kg up to 3kg+ multi-tier showstoppers</strong>.<br>
        • <strong>Popular Flavors:</strong> Belgian Truffle, Red Velvet Cream Cheese, Berry Blossom, Biscoff Crunch, and Mango.<br>
        • <strong>Notice:</strong> Please order at least 4 hours in advance for same-day custom designs.`,
        actions: [
          { label: '📝 Fill Pre-Order Form', scroll: '#custom-order' },
          { label: '💬 Custom Cake WhatsApp', url: 'https://wa.me/918347119789?text=Hello%20Creme%20%26%20Crumbs!%20I%20want%20a%20custom%20cake%20quote.' }
        ]
      };
    }

    // 3. Pure Veg / Eggless / Jain
    if (query.includes('veg') || query.includes('egg') || query.includes('eggless') || query.includes('jain') || query.includes('diet') || query.includes('halal')) {
      return {
        text: `🌿 <strong>100% Pure Vegetarian & Eggless Available:</strong><br><br>
        Yes! All our signature cakes, cupcakes, cookies, and chocolate truffles have <strong>certified eggless & pure vegetarian preparations</strong>. We use pure grade-A European butter, real cream, and Belgian cocoa with zero animal gelatin.`,
        actions: [
          { label: '🍰 Browse Eggless Delights', scroll: '#menu' }
        ]
      };
    }

    // 4. Address & Store Location
    if (query.includes('address') || query.includes('location') || query.includes('where') || query.includes('shop') || query.includes('moti vorvad') || query.includes('haji street') || query.includes('himmatnagar')) {
      return {
        text: `📍 <strong>Creme & Crumbs Bakery Address:</strong><br><br>
        <strong>Haji Street, Moti Vorvad, Himmatnagar, Gujarat 383001</strong>.<br>
        ⏰ <strong>Hours:</strong> Open every single day from <strong>8:00 AM to 10:30 PM</strong>.`,
        actions: [
          { label: '🗺️ Open Google Maps Directions', url: 'https://maps.google.com/?q=Haji+Street+Moti+Vorvad+Himmatnagar+Gujarat' },
          { label: '📞 Call Store Now', url: 'tel:+918347119789' }
        ]
      };
    }

    // 5. Contact Details / Kudsiya
    if (query.includes('contact') || query.includes('phone') || query.includes('call') || query.includes('email') || query.includes('kudsiya') || query.includes('number')) {
      return {
        text: `📞 <strong>Direct Bakery Contact:</strong><br><br>
        • <strong>Proprietor:</strong> Kudsiya Surti<br>
        • <strong>Phone / WhatsApp:</strong> +91 83471 19789<br>
        • <strong>Email:</strong> kudsiyasurti545@gmail.com<br>
        • <strong>Store Location:</strong> Haji Street, Moti Vorvad, Himmatnagar`,
        actions: [
          { label: '📞 Call +91 83471 19789', url: 'tel:+918347119789' },
          { label: '💬 WhatsApp Message', url: 'https://wa.me/918347119789' }
        ]
      };
    }

    // 6. Prices & Menu
    if (query.includes('price') || query.includes('menu') || query.includes('cost') || query.includes('rate') || query.includes('cookie') || query.includes('croissant')) {
      return {
        text: `🧁 <strong>Featured Bakery Prices:</strong><br><br>
        • Signature Berry Cake: ₹850 (500g)<br>
        • Gourmet Cupcakes: ₹120 / pc<br>
        • Golden Butter Cookies: ₹240 / box<br>
        • Molten Dark Chocolate Cookies: ₹180 / pair<br>
        • French Butter Croissant: ₹140 / pc<br>
        • Chocolate Truffle Balls: ₹380 / box<br>
        • New York Cheesecake: ₹280 / slice<br>
        • Italian Tiramisu: ₹260 / cup`,
        actions: [
          { label: '🛒 View Full Menu & Order', scroll: '#menu' }
        ]
      };
    }

    // Default friendly fallback
    return {
      text: `Hello! 🧁 Thanks for reaching out to <strong>Creme & Crumbs Himmatnagar</strong>. How can we make your day sweeter today? You can ask about:<br><br>
      • When will my order arrive? 🛵<br>
      • Custom celebration cake orders 🎂<br>
      • 100% Pure veg / eggless bakes 🌿<br>
      • Bakery location at Haji Street, Moti Vorvad 📍`,
      actions: [
        { label: '🚚 When will my order arrive?', chip: 'When will my order arrive?' },
        { label: '🎂 Custom Cake Details', chip: 'Custom cake designs and prices' },
        { label: '📞 Call Kudsiya', url: 'tel:+918347119789' }
      ]
    };
  }

  function appendChatMessage(sender, content, actions = []) {
    if (!chatMessagesArea) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = content;

    if (actions && actions.length > 0) {
      const actionsWrapper = document.createElement('div');
      actionsWrapper.className = 'chat-bubble-actions';
      actions.forEach(act => {
        const btn = document.createElement('button');
        btn.className = 'chat-action-btn';
        btn.textContent = act.label;
        if (act.url) {
          btn.onclick = () => window.open(act.url, '_blank');
        } else if (act.scroll) {
          btn.onclick = () => {
            closeChatbot();
            const target = document.querySelector(act.scroll);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          };
        } else if (act.chip) {
          btn.onclick = () => handleUserSend(act.chip);
        }
        actionsWrapper.appendChild(btn);
      });
      bubble.appendChild(actionsWrapper);
    }

    chatMessagesArea.appendChild(bubble);
    chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;
  }

  function handleUserSend(textOverride) {
    const text = textOverride || (chatTextInput ? chatTextInput.value.trim() : '');
    if (!text) return;

    appendChatMessage('user', text);
    if (chatTextInput) chatTextInput.value = '';

    // Show typing animation
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.id = 'activeTypingIndicator';
    typingIndicator.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    chatMessagesArea.appendChild(typingIndicator);
    chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;

    // Simulate smart thinking delay
    setTimeout(() => {
      const activeIndicator = document.getElementById('activeTypingIndicator');
      if (activeIndicator) activeIndicator.remove();

      const response = processBotResponse(text);
      appendChatMessage('bot', response.text, response.actions);
    }, 650);
  }

  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', () => handleUserSend());
  }

  if (chatTextInput) {
    chatTextInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserSend();
      }
    });
  }

  // Quick prompt chips click listener
  if (chatChipsArea) {
    chatChipsArea.querySelectorAll('.chat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        handleUserSend(chip.textContent.trim());
      });
    });
  }

  // --- 11. Toast Notification Utility ---
  function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DE9B52" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Expose global methods for inline handlers
  window.cakeApp = {
    addToCart,
    changeQty,
    removeFromCart,
    openCartDrawer,
    closeCartDrawer,
    openQuickView,
    openChatbot,
    closeChatbot
  };

  // Initial render
  renderProducts();
  updateCartUI();
});


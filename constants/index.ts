import { 
    AkShield,
    FlFoodApple,
    IcDeliveryTruck,
    HeOutlineDoctorFemale,
    HiHome,
    CaSearch,
    BsLayoutTextSidebarReverse,
    CaPhone,
    CdSignOut,
} from '@kalimahapps/vue-icons'

export const navbarLinks = [
    { icon: HiHome, title: 'Главная', url: '/' },
    { icon: CaSearch, title: 'Искать товаров', url: '/catalog' },
    // { icon: BsLayoutTextSidebarReverse, title: 'О нас', url: '/about' },
    { icon: CaPhone, title: 'Контакты', url: '/contacts' },
    { icon: CdSignOut, title: 'Логин', url: '/login' },
]

export const indexCards = [
    {
        title: 'Здоровое питание',
        description: 'Свежие ингредиенты и балансированные блюда для здорового роста вашего ребенка.',
        icon: FlFoodApple,
        s: '🥦' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Безопасность продуктов',
        description: 'Мы гарантируем, что все наши продукты проходят строгий контроль качества и безопасности.',
        icon: AkShield,
        s: '🔒', // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Удобная доставка',
        description: 'Доставка к вам домой или в любое удобное для вас место в указанное время.',
        icon: IcDeliveryTruck,
        s: '🚚' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Выбор педиатров',
        description: 'Наши блюда разработаны с участием профессиональных педиатров и диетологов.',
        icon: HeOutlineDoctorFemale,
        s: '👩‍⚕️' // Используйте здесь путь к изображению иконки или SVG-код
    },
]

export const productCategories = [
    {
        title: 'Молочные продукты',
        description: 'Натуральное молоко, йогурты, творог и другие молочные продукты для детей.',
        icon: '🥛' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Фрукты и овощи',
        description: 'Свежие, замороженные и консервированные фрукты и овощи для здорового питания детей.',
        icon: '🍎' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Мясные продукты',
        description: 'Качественное мясо, птица и рыба для детского питания.',
        icon: '🍖' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Крупы и бобовые',
        description: 'Зерновые, бобовые и другие источники углеводов для балансированного питания детей.',
        icon: '🌾' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Детское питание',
        description: 'Специальные детские продукты, такие как пюре, сухие завтраки и снеки.',
        icon: '🍼' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Напитки',
        description: 'Здоровые напитки для детей, такие как соки, чаи и вода.',
        icon: '🥤' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Сладости',
        description: 'Здоровые сладости для детей, такие как сухофрукты, мёд и тёмный шоколад.',
        icon: '🍭' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Гипоаллергенные продукты',
        description: 'Продукты для детей с пищевыми аллергиями и ограничениями.',
        icon: '⚠️' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Биопродукты',
        description: 'Экологически чистые продукты питания для детей.',
        icon: '🌿' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Витамины и минералы',
        description: 'Биологически активные добавки и витамины для детей.',
        icon: '💊' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Детское питание для путешествий',
        description: 'Удобные и питательные продукты для путешествий с ребёнком.',
        icon: '🎒' // Используйте здесь путь к изображению иконки или SVG-код
    },
    {
        title: 'Продукты для школьной завтраки',
        description: 'Здоровые и питательные продукты для школьной завтраки.',
        icon: '🍱' // Используйте здесь путь к изображению иконки или SVG-код
    },
]

export const products = [
    {
        id: 1,
        title: 'Натуральное молоко',
        description: 'Свежее пастеризованное молоко без добавок',
        rate: 4.8,
        price: 2.50,
        image: 'https://img.freepik.com/free-photo/classic-glass-bottle-milk_23-2150734420.jpg?t=st=1720859545~exp=1720863145~hmac=3bf6b8b042f4ae627ccd8714f02e768b2e58f4ca7b1bdcc549309283a43c013c&w=996'
    },
    {
        id: 2,
        title: 'Йогурт без сахара',
        description: 'Йогурт без сахара и добавок для детей',
        rate: 4.6,
        price: 1.20,
        image: 'https://img.freepik.com/free-photo/top-view-tasty-dairy-products_23-2148601796.jpg?t=st=1720859632~exp=1720863232~hmac=7de903145e188ef9bc8a629e9600aa0e238e0e4e10047b1805266679e8896a25&w=996'
    },
    {
        id: 3,
        title: 'Творог',
        description: 'Натуральный творог без добавок',
        rate: 4.7,
        price: 3.00,
        image: 'https://img.freepik.com/free-photo/delicious-close-up-dairy-product-with-spoon_23-2148239903.jpg?t=st=1720859656~exp=1720863256~hmac=62a3f90b305ddf4ad8b791fcaaad73bfe57216b261a425b08ea64c7cc491aafb&w=996'
    },
    {
        id: 4,
        title: 'Сыр',
        description: 'Натуральный сыр без добавок',
        rate: 4.9,
        price: 4.50,
        image: 'https://img.freepik.com/free-photo/close-up-variety-gourmet-cheese-ready-be-served_23-2148610593.jpg?t=st=1720859764~exp=1720863364~hmac=71382509292df382b28a64938fa69ba8efd13dd41e472307b0a4eb37be313f53&w=996'
    },
    {
        id: 5,
        title: 'Бананы',
        description: 'Свежие бананы высшего сорта',
        rate: 4.5,
        price: 1.50,
        image: 'https://img.freepik.com/free-photo/bananas-near-glass-with-fruits_23-2147717628.jpg?t=st=1720859814~exp=1720863414~hmac=b3ff1a317867a76d9293ffd6927e9dcaa07dc4b8d9e93e58eff2261ebd6e4ee4&w=740'
    },
    {
        id: 6,
        title: 'Яблоки',
        description: 'Свежие яблоки высшего сорта',
        rate: 4.7,
        price: 2.00,
        image: 'https://img.freepik.com/free-photo/side-close-up-view-apples-rope-appetizing-fruits-basket_140725-73989.jpg?t=st=1720859835~exp=1720863435~hmac=8063d18946b640e65e239d3d07c89a2c48d19649af000236ef02a4c7ff7357bb&w=996'
    },
    {
        id: 7,
        title: 'Морковь',
        description: 'Свежая морковь высшего сорта',
        rate: 4.6,
        price: 0.80,
        image: 'https://img.freepik.com/free-photo/top-view-carrots_23-2148622433.jpg?t=st=1720859874~exp=1720863474~hmac=0721afd85eaac834b967f5372a84647bbdd3678fe1a7304c84e2c8b9ca63af67&w=740'
    },
    {
        id: 8,
        title: 'Брокколи',
        description: 'Свежая брокколи высшего сорта',
        rate: 4.8,
        price: 2.20,
        image: 'https://img.freepik.com/free-photo/green-broccoli-isolated-concrete-background_114579-23753.jpg?t=st=1720859905~exp=1720863505~hmac=067dbe9983d38282e1f50f8b27e177a9091361e50bcbbece51eff169fba1fb70&w=996'
    },
    {
        id: 9,
        title: 'Куриное филе',
        description: 'Натуральное куриное филе без добавок',
        rate: 4.9,
        price: 5.00,
        image: 'https://img.freepik.com/free-photo/raw-chicken-fillet-with-garlic-pepper-rosemary-wooden-chopping-board_1150-37785.jpg?t=st=1720859521~exp=1720863121~hmac=6dec44774711d9957d0300a9572de2a595a1812e94861b79548159bccb04d8cf&w=996'
    },
    {
        id: 10,
        title: 'Говядина',
        description: 'Натуральная говядина без добавок',
        rate: 4.8,
        price: 7.50,
        image: 'https://img.freepik.com/free-photo/top-view-fresh-meat-slice-with-red-tomatoes-dark-blue-background-kitchen-animal-cow-food-butcher-meat-chicken-color_179666-45973.jpg?t=st=1720859994~exp=1720863594~hmac=f801bc69dab503ae6905ba9ce33b64a8c199f83185f4b9f67873bc2b3af413a4&w=996'
    },
    // Добавьте остальные продукты
]

export const indexFaqs = [
    {
        question: 'Как долго доставляется заказ?',
        answer: 'Срок доставки зависит от выбранного способа доставки и может составлять от 1 до 5 дней.'
    },
    {
        question: 'Как вернуть товар?',
        answer: 'Если товар не подходит, вы можете вернуть его в течение 14 дней со дня получения. Для возврата товара свяжитесь с нашей службой поддержки.'
    },
    {
        question: 'Какие способы оплаты доступны?',
        answer: 'Мы принимаем к оплате банковские карты, электронные кошельки и наличные при получении.'
    },
    {
        question: 'Как оформить заказ?',
        answer: 'Чтобы оформить заказ, добавьте товары в корзину, перейдите в корзину и следуйте инструкциям на экране.'
    },
    {
        question: 'Как узнать статус заказа?',
        answer: 'Чтобы узнать статус заказа, перейдите в раздел "Мои заказы" в вашем личном кабинете.'
    },
    {
        question: 'Как получить скидку?',
        answer: 'Чтобы получить скидку, воспользуйтесь промокодом при оформлении заказа. Промокоды можно найти на нашем сайте или получить по электронной почте.'
    },
    {
        question: 'Как связаться с вами?',
        answer: 'Чтобы связаться с нами, воспользуйтесь формой обратной связи на нашем сайте или напишите нам на электронную почту.'
    },
    {
        question: 'Как удалить товар из корзины?',
        answer: 'Чтобы удалить товар из корзины, нажмите на кнопку "Удалить" рядом с товаром в корзине.'
    },
    {
        question: 'Как изменить адрес доставки?',
        answer: 'Чтобы изменить адрес доставки, перейдите в раздел "Мои данные" в вашем личном кабинете и измените адрес доставки.'
    },
    {
        question: 'Как отследить заказ?',
        answer: 'Чтобы отследить заказ, перейдите в раздел "Мои заказы" в вашем личном кабинете и нажмите на кнопку "Отследить" рядом с заказом.'
    }
]
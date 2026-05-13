export const translations = {
  UA: {
    beer: "Пиво",
    spirits: "Міцне",
    add_to_cart: "Додати в кошик",
    slogan: "Вишукана колекція чеських напоїв",
    home: "Головна"
  },
  EN: {
    beer: "Beer",
    spirits: "Spirits",
    add_to_cart: "Add to cart",
    slogan: "Exquisite collection of Czech drinks",
    home: "Home"
  }
};

export const products = [
  // --- МІЦНІ НАПОЇ (SPIRITS) ---
  { 
    id: 1, 
    category: "spirits", 
    brand: "Becherovka", 
    name: "Becherovka Cordial 0.5L", 
    price: 510, 
    img: "/becher_cordial.png", 
    desc: "Преміальний лікер золотистого кольору. Поєднує екстракт липового цвіту та біле вино. Має солодкий, медовий смак." 
  },
  { 
    id: 2, 
    category: "spirits", 
    brand: "Becherovka", 
    name: "Becherovka Lemond 0.5L", 
    price: 460, 
    img: "/becher_lemond.png", 
    desc: "Легкий лікер з вираженим ароматом цитрусових. Ідеальний баланс лимона, апельсина та легких трав'яних ноток." 
  },
  { 
    id: 3, 
    category: "spirits", 
    brand: "Becherovka", 
    name: "Becherovka Orange 0.5L", 
    price: 490, 
    img: "/becher_orange.png", 
    desc: "Екзотичне поєднання класичних трав Becherovka та соковитого апельсина з легким відтінком цедри." 
  },
  { 
    id: 4, 
    category: "spirits", 
    brand: "Becherovka", 
    name: "Becherovka Original 0.5L", 
    price: 480, 
    img: "/becher_orig.png", 
    desc: "Легендарний трав'яний лікер. Секретна суміш 20 трав надає йому неповторний гірко-солодкий смак." 
  },
  { 
    id: 5, 
    category: "spirits", 
    brand: "Becherovka", 
    name: "Becherovka Unfiltered 0.5L", 
    price: 520, 
    img: "/becher_unfiltered.png", 
    desc: "Нефільтрована версія еліксиру. Має більш грубий, дикий та насичений трав'яний характер." 
  },
  { 
    id: 6, 
    category: "spirits", 
    brand: "R. JELÍNEK", 
    name: "Hruškovice 0.5L", 
    price: 700, 
    img: "/hrusko.png", 
    desc: "Чистий дистилят зі стиглих груш сорту Вільямс. Володіє інтенсивним фруктовим ароматом та довгим післясмаком." 
  },
  { 
    id: 7, 
    category: "spirits", 
    brand: "R. JELÍNEK", 
    name: "Slivovitz Gold 0.5L", 
    price: 720, 
    img: "/slivo_gold.png", 
    desc: "Сливовиця, витримана в дубових бочках. Напій набуває золотистого кольору та м'яких коньячних ноток." 
  },
  { 
    id: 8, 
    category: "spirits", 
    brand: "R. JELÍNEK", 
    name: "Slivovitz White 0.5L", 
    price: 680, 
    img: "/slivo_white.png", 
    desc: "Традиційний прозорий сливовий дистилят. Свіжий аромат кісточкових фруктів та міцний характер." 
  },
  { 
    id: 9, 
    category: "spirits", 
    brand: "Tuzemák", 
    name: "Božkov Tuzemák 05 0.5L", 
    price: 300, 
    img: "/tuzemak_05.png", 
    desc: "Класичний чеський 'ром' меншої міцності. М'який напій з вираженим ванільним ароматом." 
  },
  { 
    id: 10, 
    category: "spirits", 
    brand: "Tuzemák", 
    name: "Božkov Tuzemák Dark 0.5L", 
    price: 340, 
    img: "/tuzemak_dark.png", 
    desc: "Темний туземак з глибоким кольором та пряними нотками карамелі. Чудово підходить для коктейлів." 
  },
  { 
    id: 11, 
    category: "spirits", 
    brand: "Tuzemák", 
    name: "Božkov Tuzemák Original 0.5L", 
    price: 320, 
    img: "/tuzemak_orig.png", 
    desc: "Найпопулярніший напій у Чехії. Має солодкуватий присмак та характерний аромат ванілі та карамелі." 
  },

  // --- ПИВО (BEER) ---
  { 
    id: 12, 
    category: "beer", 
    brand: "Budweiser", 
    name: "Budweiser Budvar B:Original 0.5L", 
    price: 80, 
    img: "/budweiser.png", 
    desc: "Преміальний світлий лагер. Витримується 90 днів для досягнення ідеального балансу солоду та хмелю." 
  },
  { 
    id: 13, 
    category: "beer", 
    brand: "Kozel", 
    name: "Velkopopovický Kozel 10 0.5L", 
    price: 55, 
    img: "/kozel_10.png", 
    desc: "Класичне світле пиво. Легке, освіжаюче, з тонким ароматом хмелю та м'якою солодовою основою." 
  },
  { 
    id: 14, 
    category: "beer", 
    brand: "Kozel", 
    name: "Velkopopovický Kozel 11 0.5L", 
    price: 60, 
    img: "/kozel_11.png", 
    desc: "Пиво середньої міцності. Має повний смак та приємну хмелеву гірчинку, що добре втамовує спрагу." 
  },
  { 
    id: 15, 
    category: "beer", 
    brand: "Kozel", 
    name: "Velkopopovický Kozel 12 0.5L", 
    price: 68, 
    img: "/kozel_12.png", 
    desc: "Преміальний лагер. Насичений золотистий колір та щільна піна. Смак багатий, з виразним хмелевим акцентом." 
  },
  { 
    id: 16, 
    category: "beer", 
    brand: "Kozel", 
    name: "Velkopopovický Kozel Černý 0.5L", 
    price: 58, 
    img: "/kozel_dark.png", 
    desc: "Легендарне темне пиво. Спеціальна суміш темних солодів дарує аромат карамелі та солодкуватий присмак." 
  },
  { 
    id: 17, 
    category: "beer", 
    brand: "Kozel", 
    name: "Velkopopovický Kozel Mistrův 0.5L", 
    price: 72, 
    img: "/kozel_mistr.png", 
    desc: "Майстерна серія. Пиво з підвищеною щільністю та більш виразним характером для справжніх гурманів." 
  },
  { 
    id: 18, 
    category: "beer", 
    brand: "Pilsner Urquell", 
    name: "Pilsner Urquell 0.5L", 
    price: 75, 
    img: "/pilsner.png", 
    desc: "Перше в світі золоте пиво. Характерна сильна гірчинка жатецького хмелю та чистий солодовий смак." 
  },
  { 
    id: 19, 
    category: "beer", 
    brand: "Staropramen", 
    name: "Staropramen Ležák 12 0.5L", 
    price: 65, 
    img: "/staro_12.png", 
    desc: "Класичний празький лежак. Гармонійне поєднання солодової солодкості та хмелевої гіркоти." 
  },
  { 
    id: 20, 
    category: "beer", 
    brand: "Staropramen", 
    name: "Staropramen Нефільтроване 0.5L", 
    price: 70, 
    img: "/staro_nealko.png", 
    desc: "Оригінальний рецепт з додаванням пшеничного солоду та коріандру. Має приємний мутний колір та м'який смак." 
  },
  { 
    id: 21, 
    category: "beer", 
    brand: "Staropramen", 
    name: "Staropramen Smíchov 0.5L", 
    price: 62, 
    img: "/staro_smichov.png", 
    desc: "Традиційне світле пиво зі Сміхова. Легке, питке, ідеально підходить для щоденного споживання." 
  }
];
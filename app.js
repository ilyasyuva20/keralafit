/**
 * KERALA MEAL DATABASE
 * Contains local dishes with estimated calorie counts and ingredient quantities (per serving)
 */
const MEALS = {
    breakfast: [
        { name: "2 Puttu with Kadala Curry", cal: 450, veg: true, ingredients: { "Rice powder": 150, "Coconut": 50, "Chickpeas": 100, "Onion": 50 } },
        { name: "3 Idli with Sambar & Coconut Chutney", cal: 350, veg: true, ingredients: { "Rice": 100, "Urad dal": 50, "Lentils": 50, "Mixed Vegetables": 100, "Coconut": 50 } },
        { name: "2 Appam with Vegetable Stew", cal: 380, veg: true, ingredients: { "Rice powder": 150, "Coconut milk": 200, "Potato": 100, "Carrot": 50, "Green peas": 50 } },
        { name: "2 Appam with Egg Curry", cal: 420, veg: false, type: 'egg', ingredients: { "Rice powder": 150, "Coconut milk": 100, "Eggs": 2, "Onion": 50, "Tomato": 50 } },
        { name: "2 Dosa with Sambar & Chutney", cal: 400, veg: true, ingredients: { "Rice": 100, "Urad dal": 50, "Lentils": 50, "Mixed Vegetables": 100, "Coconut": 50 } },
        { name: "Upma with Bananas", cal: 400, veg: true, ingredients: { "Semolina": 150, "Onion": 50, "Ginger": 10, "Bananas": 2 } },
        { name: "1 Idiyappam with Egg Roast", cal: 350, veg: false, type: 'egg', ingredients: { "Rice powder": 100, "Eggs": 1, "Onion": 50, "Tomato": 30 } },
        { name: "Oats with Milk & Dates", cal: 320, veg: true, ingredients: { "Oats": 50, "Milk": 250, "Dates": 3 } }
    ],
    lunch: [
        { name: "Choru (1 cup), Avial, Thoran & Curd", cal: 550, veg: true, ingredients: { "Red rice": 150, "Mixed Vegetables": 200, "Coconut": 100, "Curd": 100 } },
        { name: "Choru (1 cup), Sambar, Thoran & Pappadam", cal: 500, veg: true, ingredients: { "Red rice": 150, "Lentils": 50, "Mixed Vegetables": 100, "Pappadam": 2 } },
        { name: "Choru (1 cup), Fish Curry, Thoran & Moru", cal: 600, veg: false, type: 'fish', ingredients: { "Red rice": 150, "Fish": 200, "Coconut": 100, "Buttermilk": 150 } },
        { name: "Choru (1 cup), Beef Ularthiyathu, Thoran", cal: 700, veg: false, type: 'non-veg', ingredients: { "Red rice": 150, "Beef": 200, "Coconut pieces": 30, "Onion": 50 } },
        { name: "Choru (1 cup), Chicken Curry & Thoran", cal: 650, veg: false, type: 'non-veg', ingredients: { "Red rice": 150, "Chicken": 200, "Onion": 50, "Tomato": 50, "Coconut": 50 } },
        { name: "Kerala Sadhya Lite (Small portions)", cal: 600, veg: true, ingredients: { "Red rice": 150, "Lentils": 50, "Mixed Vegetables": 250, "Coconut": 100 } },
        { name: "Vegetable Biryani with Raita", cal: 550, veg: true, ingredients: { "Basmati rice": 150, "Mixed Vegetables": 150, "Curd": 50, "Onion": 50 } },
        { name: "Fish Biryani (Kerala Style)", cal: 650, veg: false, type: 'fish', ingredients: { "Basmati rice": 150, "Fish": 200, "Onion": 100, "Spices": 10 } }
    ],
    dinner: [
        { name: "2 Wheat Chapati with Vegetable Kurma", cal: 350, veg: true, ingredients: { "Wheat flour": 100, "Mixed Vegetables": 150, "Coconut": 50 } },
        { name: "2 Wheat Chapati with Chicken Roast", cal: 450, veg: false, type: 'non-veg', ingredients: { "Wheat flour": 100, "Chicken": 150, "Onion": 100, "Tomato": 50 } },
        { name: "Kanji (Rice Gruel), Payar & Vanpayar Thoran", cal: 400, veg: true, ingredients: { "Rice": 100, "Green gram": 50, "Red cowpea": 50, "Coconut": 50 } },
        { name: "2 Wheat Chapati with Egg Roast", cal: 400, veg: false, type: 'egg', ingredients: { "Wheat flour": 100, "Eggs": 2, "Onion": 100 } },
        { name: "Grilled Fish with Sautéed Vegetables", cal: 350, veg: false, type: 'fish', ingredients: { "Fish": 200, "Broccoli": 100, "Carrot": 50, "Beans": 50 } },
        { name: "Mixed Vegetable Salad with Boiled Chickpeas", cal: 300, veg: true, ingredients: { "Lettuce": 100, "Cucumber": 50, "Tomato": 50, "Chickpeas": 50 } },
        { name: "Wheat Dosa (2) with Tomato Chutney", cal: 320, veg: true, ingredients: { "Wheat flour": 100, "Rice": 50, "Tomato": 50, "Onion": 50 } }
    ],
    suhoor: [
        { name: "Wheat Chapati (2) with Milk & Dates", cal: 450, veg: true, ingredients: { "Wheat flour": 100, "Milk": 250, "Dates": 5 } },
        { name: "Oats with Banana, Dates & Almonds", cal: 400, veg: true, ingredients: { "Oats": 50, "Banana": 1, "Dates": 5, "Almonds": 10 } },
        { name: "Appam (3) with Egg Roast", cal: 550, veg: false, type: 'egg', ingredients: { "Rice powder": 150, "Eggs": 2, "Onion": 100 } },
        { name: "Choru (Small) with Curd & Thoran", cal: 450, veg: true, ingredients: { "Red rice": 100, "Curd": 100, "Vegetables": 50 } }
    ],
    iftar: [
        { name: "3 Dates, Fresh Lime Juice & 2 Parippu Vada", cal: 350, veg: true, ingredients: { "Dates": 3, "Lemon": 1, "Split peas": 100, "Onion": 50 } },
        { name: "3 Dates, Oats Milkshake & 1 Banana", cal: 400, veg: true, ingredients: { "Dates": 3, "Oats": 30, "Milk": 250, "Banana": 1 } },
        { name: "3 Dates, Fruit Salad & 1 Unnakkaya", cal: 350, veg: true, ingredients: { "Dates": 3, "Mixed fruits": 200, "Plantain": 1, "Coconut": 30 } },
        { name: "3 Dates, Watermelon Juice & 2 Samosas", cal: 450, veg: true, ingredients: { "Dates": 3, "Watermelon": 250, "Wheat flour": 50, "Potato": 50 } }
    ],
    ramadanDinner: [
        { name: "Ney Pathiri (3) with Beef Curry", cal: 750, veg: false, type: 'non-veg', ingredients: { "Rice flour": 200, "Beef": 200, "Coconut": 50, "Onion": 100 } },
        { name: "Rice Pathiri (3) with Chicken Stew", cal: 600, veg: false, type: 'non-veg', ingredients: { "Rice flour": 200, "Chicken": 200, "Coconut milk": 250, "Potato": 100 } },
        { name: "Wheat Chapati (3) with Fish Moliee", cal: 650, veg: false, type: 'fish', ingredients: { "Wheat flour": 150, "Fish": 200, "Coconut milk": 200, "Ginger": 10 } },
        { name: "Choru (Small) with Chicken Fry & Thoran", cal: 700, veg: false, type: 'non-veg', ingredients: { "Red rice": 100, "Chicken": 200, "Coconut": 50 } }
    ]
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEAL_ICONS = {
    breakfast: '🍳', lunch: '🍛', dinner: '🍱',
    suhoor: '🌙', iftar: '🍹', ramadanDinner: '🍽️'
};

/**
 * APP STATE & DOM ELEMENTS
 */
const form = document.getElementById('diet-form');
const inputSection = document.getElementById('input-section');
const resultSection = document.getElementById('result-section');
const dietPlanContainer = document.getElementById('diet-plan-container');
const targetCalsEl = document.getElementById('target-calories');
const waterIntakeEl = document.getElementById('water-intake');
const resetBtn = document.getElementById('reset-btn');
const reGenBtn = document.getElementById('re-generate-btn');
const groceryListEl = document.getElementById('grocery-list');

// Tabs
const tabDiet = document.getElementById('tab-diet');
const tabGrocery = document.getElementById('tab-grocery');
const dietContent = document.getElementById('diet-tab-content');
const groceryContent = document.getElementById('grocery-tab-content');

let currentProfile = null;
let lastMeals = { m1: null, m2: null, m3: null };
let weeklyIngredients = {}; // Now a dictionary for quantity aggregation

/**
 * CORE LOGIC
 */

function calculateTDEE(age, gender, weight, height, activity) {
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return Math.round(bmr * activity);
}

function getFilteredMeals(category, preference) {
    return MEALS[category].filter(meal => {
        if (preference === 'veg') return meal.veg;
        if (preference === 'veg-fish') return meal.veg || meal.type === 'fish' || meal.type === 'egg';
        return true;
    });
}

function getRandomMeal(list, lastMeal) {
    if (!list || list.length === 0) return { name: "N/A", ingredients: {} };
    if (list.length <= 1) return list[0];
    let meal;
    do {
        meal = list[Math.floor(Math.random() * list.length)];
    } while (meal === lastMeal);
    return meal;
}

function generateDailyPlan(profile) {
    const isRamadan = profile.ramadanMode;
    let m1, m2, m3;

    if (isRamadan) {
        const suhoorList = getFilteredMeals('suhoor', profile.preference);
        const iftarList = getFilteredMeals('iftar', profile.preference);
        const ramadanDinnerList = getFilteredMeals('ramadanDinner', profile.preference);

        m1 = getRandomMeal(suhoorList, lastMeals.m1);
        m2 = getRandomMeal(iftarList, lastMeals.m2);
        m3 = getRandomMeal(ramadanDinnerList, lastMeals.m3);
    } else {
        const breakfastList = getFilteredMeals('breakfast', profile.preference);
        const lunchList = getFilteredMeals('lunch', profile.preference);
        const dinnerList = getFilteredMeals('dinner', profile.preference);

        m1 = getRandomMeal(breakfastList, lastMeals.m1);
        m2 = getRandomMeal(lunchList, lastMeals.m2);
        m3 = getRandomMeal(dinnerList, lastMeals.m3);
    }

    lastMeals = { m1, m2, m3 };

    // Add to weekly ingredients with aggregation
    [m1, m2, m3].forEach(m => {
        if (m.ingredients) {
            for (const [item, amount] of Object.entries(m.ingredients)) {
                weeklyIngredients[item] = (weeklyIngredients[item] || 0) + amount;
            }
        }
    });

    return { m1, m2, m3 };
}

function formatQuantity(item, amount) {
    // Basic heuristics for units
    const itemsInGrams = ["Rice", "Rice powder", "Rice flour", "Basmati rice", "Red rice", "Wheat flour", "Semolina", "Oats", "Mixed Vegetables", "Chickpeas", "Lentils", "Urad dal", "Split peas", "Green gram", "Red cowpea", "Fish", "Chicken", "Beef", "Pappadam", "Onion", "Tomato", "Potato", "Carrot", "Green peas", "Coconut pieces", "Almonds", "Broccoli", "Beans", "Lettuce", "Cucumber", "Watermelon", "Mixed fruits", "Fried onions"];
    const itemsInMl = ["Milk", "Coconut milk", "Curd", "Buttermilk", "Juice"];
    const itemsInUnits = ["Eggs", "Bananas", "Dates", "Lemon", "Plantain", "Banana"];

    if (itemsInUnits.includes(item)) {
        return `${amount} unit${amount > 1 ? 's' : ''}`;
    }

    if (itemsInMl.includes(item)) {
        if (amount >= 1000) return `${(amount / 1000).toFixed(1)}L`;
        return `${amount}ml`;
    }

    // Default to grams/kg
    if (amount >= 1000) return `${(amount / 1000).toFixed(2)}kg`;
    return `${amount}g`;
}

function renderPlan(profile) {
    const tdee = calculateTDEE(profile.age, profile.gender, profile.weight, profile.height, profile.activity);
    const deficitMapping = { '0.25': 250, '0.5': 500, '0.75': 750 };
    const targetCals = Math.max(1200, tdee - deficitMapping[profile.goal]);

    const waterIntake = (profile.weight * 0.033).toFixed(1);

    targetCalsEl.textContent = targetCals;
    waterIntakeEl.textContent = profile.ramadanMode ? `${waterIntake} (Between Iftar & Suhoor)` : waterIntake;

    dietPlanContainer.innerHTML = '';
    weeklyIngredients = {};
    lastMeals = { m1: null, m2: null, m3: null };

    const isRamadan = profile.ramadanMode;
    const labels = isRamadan ? { l1: 'Suhoor', l2: 'Iftar', l3: 'Main Dinner' } : { l1: 'Breakfast', l2: 'Lunch', l3: 'Dinner' };
    const icons = isRamadan ? { i1: MEAL_ICONS.suhoor, i2: MEAL_ICONS.iftar, i3: MEAL_ICONS.ramadanDinner } : { i1: MEAL_ICONS.breakfast, i2: MEAL_ICONS.lunch, i3: MEAL_ICONS.dinner };

    DAYS.forEach(day => {
        const plan = generateDailyPlan(profile);
        const card = document.createElement('div');
        card.className = 'day-card fade-in';
        card.innerHTML = `
            <div class="day-name">${day}</div>
            <div class="meal">
                <span class="meal-type">${icons.i1} ${labels.l1}</span>
                <span class="meal-name">${plan.m1.name}</span>
            </div>
            <div class="meal">
                <span class="meal-type">${icons.i2} ${labels.l2}</span>
                <span class="meal-name">${plan.m2.name}</span>
            </div>
            <div class="meal">
                <span class="meal-type">${icons.i3} ${labels.l3}</span>
                <span class="meal-name">${plan.m3.name}</span>
            </div>
        `;
        dietPlanContainer.appendChild(card);
    });

    renderGroceryList();
    inputSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    switchTab('diet');
}

function renderGroceryList() {
    groceryListEl.innerHTML = '';
    const sorted = Object.keys(weeklyIngredients).sort();
    sorted.forEach(item => {
        const li = document.createElement('li');
        li.className = 'grocery-item';
        const formattedQty = formatQuantity(item, weeklyIngredients[item]);
        li.innerHTML = `<input type="checkbox"><span>${item}: <strong>${formattedQty}</strong></span>`;
        groceryListEl.appendChild(li);
    });
}

function switchTab(tab) {
    if (tab === 'diet') {
        tabDiet.classList.add('active');
        tabGrocery.classList.remove('active');
        dietContent.classList.remove('hidden');
        groceryContent.classList.add('hidden');
    } else {
        tabGrocery.classList.add('active');
        tabDiet.classList.remove('active');
        groceryContent.classList.remove('hidden');
        dietContent.classList.add('hidden');
    }
}

/**
 * EVENT LISTENERS
 */

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    currentProfile = {
        age: parseInt(formData.get('age')),
        gender: formData.get('gender'),
        weight: parseFloat(formData.get('weight')),
        height: parseFloat(formData.get('height')),
        activity: parseFloat(formData.get('activity')),
        preference: formData.get('preference'),
        goal: parseFloat(formData.get('goal')),
        ramadanMode: document.getElementById('ramadan-mode').checked
    };
    renderPlan(currentProfile);
});

resetBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    inputSection.classList.remove('hidden');
    form.reset();
});

reGenBtn.addEventListener('click', () => {
    if (currentProfile) renderPlan(currentProfile);
});

tabDiet.addEventListener('click', () => switchTab('diet'));
tabGrocery.addEventListener('click', () => switchTab('grocery'));

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const today = new Date().getDay(); // 0=Sun
  const todayIdx = today === 0 ? 6 : today - 1;

  const schedule = {
    Monday:    [
      { time:'06:00', ampm:'AM', name:'Power Strength', trainer:'Rajan Kumar', duration:'60 min', spots:'8 left', category:'strength', status:'filling' },
      { time:'07:30', ampm:'AM', name:'Morning HIIT', trainer:'Priya Venkat', duration:'45 min', spots:'12 left', category:'hiit', status:'open' },
      { time:'09:00', ampm:'AM', name:'Yoga Flow', trainer:'Meera Nair', duration:'60 min', spots:'2 left', category:'yoga', status:'filling' },
      { time:'12:00', ampm:'PM', name:'Lunchtime Boxing', trainer:'Arjun Sharma', duration:'45 min', spots:'6 left', category:'boxing', status:'filling' },
      { time:'06:00', ampm:'PM', name:'Evening HIIT', trainer:'Priya Venkat', duration:'45 min', spots:'15 left', category:'hiit', status:'open' },
      { time:'07:30', ampm:'PM', name:'Pilates', trainer:'Meera Nair', duration:'60 min', spots:'10 left', category:'pilates', status:'open' },
    ],
    Tuesday:   [
      { time:'06:00', ampm:'AM', name:'Barbell Club', trainer:'Rajan Kumar', duration:'75 min', spots:'5 left', category:'strength', status:'filling' },
      { time:'08:00', ampm:'AM', name:'Cycle Burn', trainer:'Priya Venkat', duration:'45 min', spots:'14 left', category:'cycle', status:'open' },
      { time:'10:00', ampm:'AM', name:'Pilates Core', trainer:'Meera Nair', duration:'60 min', spots:'8 left', category:'pilates', status:'open' },
      { time:'05:30', ampm:'PM', name:'Boxing Basics', trainer:'Arjun Sharma', duration:'60 min', spots:'12 left', category:'boxing', status:'open' },
      { time:'07:00', ampm:'PM', name:'Strength & Mobility', trainer:'Rajan Kumar', duration:'60 min', spots:'2 left', category:'strength', status:'filling' },
    ],
    Wednesday: [
      { time:'06:00', ampm:'AM', name:'Full Body HIIT', trainer:'Priya Venkat', duration:'45 min', spots:'10 left', category:'hiit', status:'open' },
      { time:'07:30', ampm:'AM', name:'Yoga Restore', trainer:'Meera Nair', duration:'60 min', spots:'15 left', category:'yoga', status:'open' },
      { time:'12:30', ampm:'PM', name:'Express Cycle', trainer:'Priya Venkat', duration:'30 min', spots:'6 left', category:'cycle', status:'filling' },
      { time:'06:00', ampm:'PM', name:'Olympic Lifting', trainer:'Rajan Kumar', duration:'75 min', spots:'4 left', category:'strength', status:'filling' },
      { time:'07:30', ampm:'PM', name:'Combat Conditioning', trainer:'Arjun Sharma', duration:'60 min', spots:'9 left', category:'boxing', status:'open' },
    ],
    Thursday:  [
      { time:'06:30', ampm:'AM', name:'Tabata HIIT', trainer:'Priya Venkat', duration:'30 min', spots:'12 left', category:'hiit', status:'open' },
      { time:'09:00', ampm:'AM', name:'Pilates Sculpt', trainer:'Meera Nair', duration:'60 min', spots:'7 left', category:'pilates', status:'filling' },
      { time:'12:00', ampm:'PM', name:'Power Cycle', trainer:'Priya Venkat', duration:'45 min', spots:'2 left', category:'cycle', status:'filling' },
      { time:'06:00', ampm:'PM', name:'Deadlift Workshop', trainer:'Rajan Kumar', duration:'90 min', spots:'6 left', category:'strength', status:'filling' },
      { time:'07:30', ampm:'PM', name:'Yin Yoga', trainer:'Meera Nair', duration:'60 min', spots:'20 left', category:'yoga', status:'open' },
    ],
    Friday:    [
      { time:'05:45', ampm:'AM', name:'Friday Fire HIIT', trainer:'Priya Venkat', duration:'45 min', spots:'5 left', category:'hiit', status:'filling' },
      { time:'07:00', ampm:'AM', name:'Strength Circuit', trainer:'Rajan Kumar', duration:'60 min', spots:'8 left', category:'strength', status:'open' },
      { time:'10:00', ampm:'AM', name:'Vinyasa Yoga', trainer:'Meera Nair', duration:'75 min', spots:'10 left', category:'yoga', status:'open' },
      { time:'06:00', ampm:'PM', name:'Boxing Sparring', trainer:'Arjun Sharma', duration:'60 min', spots:'6 left', category:'boxing', status:'filling' },
      { time:'07:30', ampm:'PM', name:'Cycle & Core', trainer:'Priya Venkat', duration:'45 min', spots:'14 left', category:'cycle', status:'open' },
    ],
    Saturday:  [
      { time:'07:00', ampm:'AM', name:'Weekend Warriors HIIT', trainer:'Priya Venkat', duration:'60 min', spots:'3 left', category:'hiit', status:'filling' },
      { time:'08:30', ampm:'AM', name:'Power Yoga', trainer:'Meera Nair', duration:'75 min', spots:'12 left', category:'yoga', status:'open' },
      { time:'10:00', ampm:'AM', name:'Strongman Intro', trainer:'Rajan Kumar', duration:'90 min', spots:'8 left', category:'strength', status:'open' },
      { time:'11:30', ampm:'AM', name:'Boxing Fundamentals', trainer:'Arjun Sharma', duration:'60 min', spots:'2 left', category:'boxing', status:'filling' },
      { time:'05:00', ampm:'PM', name:'Evening Cycle', trainer:'Priya Venkat', duration:'45 min', spots:'16 left', category:'cycle', status:'open' },
    ],
    Sunday:    [
      { time:'08:00', ampm:'AM', name:'Sunday Slow Flow', trainer:'Meera Nair', duration:'90 min', spots:'15 left', category:'yoga', status:'open' },
      { time:'10:00', ampm:'AM', name:'Pilates & Stretch', trainer:'Meera Nair', duration:'60 min', spots:'10 left', category:'pilates', status:'open' },
      { time:'11:30', ampm:'AM', name:'Open Barbell', trainer:'Rajan Kumar', duration:'60 min', spots:'12 left', category:'strength', status:'open' },
      { time:'05:00', ampm:'PM', name:'HIIT & Chill', trainer:'Priya Venkat', duration:'45 min', spots:'18 left', category:'hiit', status:'open' },
    ],
  };

  let activeDay = days[todayIdx];

  // Populate nav today's classes
  function renderNavClasses() {
    const todayName = days[todayIdx];
    document.getElementById('nav-today-label').textContent = todayName;
    const todayClasses = (schedule[todayName] || []).slice(0, 5);
    document.getElementById('nav-classes').innerHTML = todayClasses.map(c => {
      const spotClass = c.status === 'open' ? 'spots-open' : 'spots-filling';
      const spotText  = c.spots;
      return `
        <div class="mega-class-row cat-${c.category}" onclick="document.getElementById('schedule').scrollIntoView({behavior:'smooth'})">
          <div class="mega-class-time">${c.time}</div>
          <div>
            <div class="mega-class-name">${c.name}</div>
            <div class="mega-class-trainer">${c.trainer}</div>
          </div>
          <div class="mega-class-trainer">${c.duration}</div>
          <div class="mega-class-spots ${spotClass}">${spotText}</div>
        </div>`;
    }).join('');
  }
  renderNavClasses();

  function renderTabs() {
    const container = document.getElementById('dayTabs');
    container.innerHTML = days.map((d, i) => `
      <button class="day-tab ${d === activeDay ? 'active' : ''}" onclick="setDay('${d}')">
        ${d.slice(0,3).toUpperCase()}${i === todayIdx ? ' ·' : ''}
      </button>
    `).join('');
  }

  function renderSchedule() {
    const grid = document.getElementById('scheduleGrid');
    const classes = schedule[activeDay] || [];
    grid.innerHTML = classes.map(c => {
      const isToday = activeDay === days[todayIdx];
      const badgeClass = c.status === 'open' ? 'badge-open' : 'badge-filling';
      const badgeText = c.status === 'open' ? 'Open' : 'Filling';
      return `
        <div class="class-card category-${c.category} ${isToday ? 'highlight' : ''}">
          <div class="class-time">
            <div class="class-time-main">${c.time}</div>
            <div class="class-time-ampm">${c.ampm}</div>
          </div>
          <div class="class-info">
            <div class="class-name">${c.name}</div>
            <div class="class-meta">
              <span>with <strong>${c.trainer}</strong></span>
              <span>⏱ ${c.duration}</span>
              <span>👥 ${c.spots}</span>
              <span class="class-badge ${badgeClass}">${badgeText}</span>
            </div>
          </div>
          <div class="class-action">
            <button class="btn-book" onclick="openClassBooking('${c.name}','${c.time} ${c.ampm}','${c.trainer}','${c.duration}')">
              Book
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function setDay(day) {
    activeDay = day;
    renderTabs();
    renderSchedule();
  }

  renderTabs();
  renderSchedule();
  // ── DIET PLAN ──
  const dietGoals = {
    'Fat Loss': {
      icon: '🔥', kcal: 1800,
      protein: 160, carbs: 140, fat: 55,
      note: '<strong>Caloric deficit</strong> of ~400 kcal/day. High protein preserves muscle while burning fat. Limit refined carbs after 6 PM.',
      meals: [
        {
          time: '7:00 AM', name: 'Breakfast', kcal: 380,
          foods: [
            { name: 'Egg white omelette (3 whites + 1 yolk)', qty: '200g', cal: '140 kcal' },
            { name: 'Oats with cinnamon & chia seeds', qty: '60g dry', cal: '150 kcal' },
            { name: 'Black coffee (no sugar)', qty: '200ml', cal: '5 kcal' },
            { name: 'Green apple', qty: '1 medium', cal: '85 kcal' },
          ],
          tip: '💡 Have breakfast within 30 min of waking. Chia seeds slow digestion and keep you full until lunch.'
        },
        {
          time: '10:30 AM', name: 'Mid-Morning Snack', kcal: 180,
          foods: [
            { name: 'Greek yogurt (0% fat)', qty: '150g', cal: '90 kcal' },
            { name: 'Mixed berries', qty: '80g', cal: '45 kcal' },
            { name: 'Almonds', qty: '10 pieces', cal: '70 kcal' },
          ],
          tip: '💡 This snack prevents overeating at lunch. Greek yogurt provides 15g protein per serving.'
        },
        {
          time: '1:00 PM', name: 'Lunch', kcal: 480,
          foods: [
            { name: 'Grilled chicken breast', qty: '150g', cal: '165 kcal' },
            { name: 'Brown rice', qty: '80g cooked', cal: '110 kcal' },
            { name: 'Steamed broccoli & spinach', qty: '200g', cal: '60 kcal' },
            { name: 'Olive oil dressing', qty: '1 tsp', cal: '40 kcal' },
            { name: 'Buttermilk (no salt)', qty: '200ml', cal: '36 kcal' },
          ],
          tip: '💡 Eat slowly. It takes 20 minutes for your brain to register fullness.'
        },
        {
          time: '4:30 PM', name: 'Pre-Workout', kcal: 220,
          foods: [
            { name: 'Banana', qty: '1 large', cal: '120 kcal' },
            { name: 'Whey protein shake (water)', qty: '1 scoop', cal: '100 kcal' },
          ],
          tip: '💡 Have this 45–60 min before training. The banana provides fast carbs for energy.'
        },
        {
          time: '7:30 PM', name: 'Post-Workout Dinner', kcal: 420,
          foods: [
            { name: 'Baked salmon / paneer (for veg)', qty: '150g', cal: '180 kcal' },
            { name: 'Quinoa or boiled sweet potato', qty: '100g', cal: '100 kcal' },
            { name: 'Mixed salad with lemon dressing', qty: '200g', cal: '60 kcal' },
            { name: 'Cucumber raita', qty: '100g', cal: '45 kcal' },
          ],
          tip: '💡 Eat dinner within 90 min of finishing your workout. Your muscles are primed to absorb protein.'
        },
        {
          time: '10:00 PM', name: 'Night Snack', kcal: 120,
          foods: [
            { name: 'Casein protein / low-fat cottage cheese', qty: '150g', cal: '120 kcal' },
          ],
          tip: '💡 Casein digests slowly overnight, preventing muscle breakdown while you sleep.'
        },
      ],
      rules: [
        { icon: '💧', title: 'Hydration', desc: 'Drink 3–4 litres of water daily. Add lemon or mint for electrolytes.' },
        { icon: '🚫', title: 'Avoid', desc: 'Refined sugar, fried food, white bread, packaged juices, alcohol.' },
        { icon: '⏱️', title: 'Timing', desc: 'Eat every 2.5–3 hrs to keep metabolism elevated and prevent cravings.' },
        { icon: '🧂', title: 'Salt', desc: 'Limit sodium to 1500mg/day. Reduce bloating and water retention.' },
      ]
    },
    'Muscle Gain': {
      icon: '💪', kcal: 2800,
      protein: 210, carbs: 320, fat: 70,
      note: '<strong>Caloric surplus</strong> of ~300–400 kcal. High carbs fuel heavy lifts. Eat within 30 min post-workout without fail.',
      meals: [
        {
          time: '7:00 AM', name: 'Breakfast', kcal: 620,
          foods: [
            { name: 'Whole eggs scrambled (4 eggs)', qty: '200g', cal: '280 kcal' },
            { name: 'Whole wheat toast', qty: '2 slices', cal: '140 kcal' },
            { name: 'Peanut butter', qty: '1.5 tbsp', cal: '140 kcal' },
            { name: 'Banana', qty: '1 large', cal: '120 kcal' },
          ],
          tip: '💡 This breakfast delivers 35g protein and 70g carbs — exactly what growing muscle needs first thing.'
        },
        {
          time: '10:30 AM', name: 'Mid-Morning Snack', kcal: 350,
          foods: [
            { name: 'Mass gainer or whey + milk shake', qty: '1 scoop + 300ml', cal: '250 kcal' },
            { name: 'Mixed nuts', qty: '30g', cal: '180 kcal' },
          ],
          tip: '💡 Liquid calories are easier to hit on high-calorie days. Don\'t skip this if you\'re a hardgainer.'
        },
        {
          time: '1:30 PM', name: 'Lunch', kcal: 720,
          foods: [
            { name: 'Chicken thighs / dal + paneer (veg)', qty: '200g', cal: '300 kcal' },
            { name: 'White rice or roti (3)', qty: '200g cooked', cal: '260 kcal' },
            { name: 'Vegetable curry / sabzi', qty: '150g', cal: '100 kcal' },
            { name: 'Full-fat curd', qty: '150g', cal: '100 kcal' },
          ],
          tip: '💡 Lunch should be your biggest meal. Don\'t skip carbs here — they fuel afternoon training.'
        },
        {
          time: '4:30 PM', name: 'Pre-Workout', kcal: 320,
          foods: [
            { name: 'Rice cakes or banana (2)', qty: '2 pieces', cal: '180 kcal' },
            { name: 'Whey protein (water)', qty: '1 scoop', cal: '100 kcal' },
            { name: 'Black coffee or pre-workout', qty: '1 serving', cal: '10 kcal' },
          ],
          tip: '💡 Fast-digesting carbs 1 hour before training gives you explosive energy for heavy compound lifts.'
        },
        {
          time: '7:30 PM', name: 'Post-Workout Dinner', kcal: 680,
          foods: [
            { name: 'Grilled beef / chickpeas (veg)', qty: '200g', cal: '340 kcal' },
            { name: 'Sweet potato mash', qty: '200g', cal: '180 kcal' },
            { name: 'Broccoli & asparagus', qty: '150g', cal: '50 kcal' },
            { name: 'Olive oil', qty: '1 tbsp', cal: '120 kcal' },
          ],
          tip: '💡 The most anabolic window is within 45 min post-workout. Don\'t miss this meal.'
        },
        {
          time: '10:30 PM', name: 'Night Protein', kcal: 260,
          foods: [
            { name: 'Cottage cheese (paneer)', qty: '200g', cal: '200 kcal' },
            { name: 'Walnuts', qty: '5–6 pieces', cal: '90 kcal' },
          ],
          tip: '💡 Casein-rich cottage cheese feeds muscles for 6–8 hours while you sleep. Critical for overnight recovery.'
        },
      ],
      rules: [
        { icon: '🍚', title: 'Carbs are king', desc: 'Don\'t fear carbs. 300g+ daily is normal for muscle building. Time them around workouts.' },
        { icon: '😴', title: 'Sleep 8 hrs', desc: 'Growth hormone peaks during deep sleep. Muscle is built at rest, not in the gym.' },
        { icon: '📈', title: 'Progressive load', desc: 'Increase weight or reps each week. Nutrition without progressive overload won\'t build muscle.' },
        { icon: '🥚', title: 'Protein every meal', desc: 'Hit 30–40g protein at every meal. Spread intake across 5–6 meals for best absorption.' },
      ]
    },
    'Endurance': {
      icon: '⚡', kcal: 2400,
      protein: 150, carbs: 330, fat: 65,
      note: '<strong>Carb-focused plan</strong> for sustained aerobic performance. Prioritise glycogen replenishment after long sessions.',
      meals: [
        {
          time: '6:30 AM', name: 'Pre-Run Breakfast', kcal: 420,
          foods: [
            { name: 'Oatmeal with honey & banana', qty: '80g oats + toppings', cal: '320 kcal' },
            { name: 'Low-fat milk', qty: '200ml', cal: '100 kcal' },
          ],
          tip: '💡 High-GI carbs 60 min before your session. Easy on fats before long cardio to avoid GI distress.'
        },
        {
          time: '10:00 AM', name: 'Recovery Snack', kcal: 280,
          foods: [
            { name: 'Whole wheat sandwich with egg', qty: '1 sandwich', cal: '280 kcal' },
          ],
          tip: '💡 After long cardio, replenish glycogen within 30 min with a 3:1 carb-to-protein ratio.'
        },
        {
          time: '1:00 PM', name: 'Lunch', kcal: 600,
          foods: [
            { name: 'Tuna / rajma (veg) rice bowl', qty: '300g', cal: '380 kcal' },
            { name: 'Whole wheat chapati (2)', qty: '2 rotis', cal: '160 kcal' },
            { name: 'Cucumber & tomato salad', qty: '150g', cal: '35 kcal' },
          ],
          tip: '💡 Lean protein + complex carbs at lunch helps you recover and stay energised through the afternoon.'
        },
        {
          time: '4:00 PM', name: 'Energy Snack', kcal: 300,
          foods: [
            { name: 'Dates (energy bombs)', qty: '4–5 pieces', cal: '140 kcal' },
            { name: 'Boiled chickpeas', qty: '100g', cal: '160 kcal' },
          ],
          tip: '💡 Dates provide instant glycogen. Great 30 min before evening training or cycling sessions.'
        },
        {
          time: '7:00 PM', name: 'Dinner', kcal: 560,
          foods: [
            { name: 'Grilled chicken or tofu', qty: '150g', cal: '160 kcal' },
            { name: 'Pasta or brown rice', qty: '150g cooked', cal: '230 kcal' },
            { name: 'Tomato-based sauce with veggies', qty: '200g', cal: '120 kcal' },
          ],
          tip: '💡 Pasta is the classic endurance athlete dinner. Carbs replenish what you burned; protein aids repair.'
        },
        {
          time: '9:30 PM', name: 'Evening Snack', kcal: 200,
          foods: [
            { name: 'Banana with almond butter', qty: '1 banana + 1 tbsp', cal: '200 kcal' },
          ],
          tip: '💡 Potassium from banana reduces next-day muscle cramps. A must for high-volume cardio athletes.'
        },
      ],
      rules: [
        { icon: '🍌', title: 'Glycogen first', desc: 'Carbs are your engine fuel. Never train fasted on long-distance days.' },
        { icon: '⚗️', title: 'Electrolytes', desc: 'Replace sodium, potassium, and magnesium lost in sweat. Add coconut water or ORS post long sessions.' },
        { icon: '🏃', title: 'Carb loading', desc: 'Increase carbs 2 days before a race or long event. Taper fat and protein intake.' },
        { icon: '🧴', title: 'Iron & B12', desc: 'Endurance athletes are prone to deficiencies. Get bloodwork done every 6 months.' },
      ]
    },
  };

  let activeGoal = 'Fat Loss';

  function renderGoalTabs() {
    const container = document.getElementById('goalTabs');
    container.innerHTML = Object.keys(dietGoals).map(g => `
      <button class="goal-tab ${g === activeGoal ? 'active' : ''}" onclick="setGoal('${g}')">
        <span class="goal-icon">${dietGoals[g].icon}</span>${g}
      </button>
    `).join('');
  }

  function updateMacroRing(data) {
    const total = (data.protein * 4) + (data.carbs * 4) + (data.fat * 9);
    const pPct = (data.protein * 4) / total;
    const cPct = (data.carbs * 4) / total;
    const fPct = (data.fat * 9) / total;
    const circ = 339;
    const pDash = circ * pPct;
    const cDash = circ * cPct;
    const fDash = circ * fPct;
    const ringP = document.getElementById('ringProtein');
    const ringC = document.getElementById('ringCarbs');
    const ringF = document.getElementById('ringFat');
    ringP.setAttribute('stroke-dasharray', `${pDash} ${circ}`);
    ringP.setAttribute('stroke-dashoffset', '0');
    const cOffset = -pDash;
    ringC.setAttribute('stroke-dasharray', `${cDash} ${circ}`);
    ringC.setAttribute('stroke-dashoffset', cOffset);
    const fOffset = -(pDash + cDash);
    ringF.setAttribute('stroke-dasharray', `${fDash} ${circ}`);
    ringF.setAttribute('stroke-dashoffset', fOffset);
    document.getElementById('ringKcal').textContent = data.kcal;
    document.getElementById('macroBars').innerHTML = `
      <div class="macro-bar-row">
        <div class="macro-bar-label"><span class="name">Protein</span><span class="val">${data.protein}g</span></div>
        <div class="macro-bar-track"><div class="macro-bar-fill fill-protein" style="width:${Math.round(pPct*100)}%"></div></div>
      </div>
      <div class="macro-bar-row">
        <div class="macro-bar-label"><span class="name">Carbs</span><span class="val">${data.carbs}g</span></div>
        <div class="macro-bar-track"><div class="macro-bar-fill fill-carbs" style="width:${Math.round(cPct*100)}%"></div></div>
      </div>
      <div class="macro-bar-row">
        <div class="macro-bar-label"><span class="name">Fat</span><span class="val">${data.fat}g</span></div>
        <div class="macro-bar-track"><div class="macro-bar-fill fill-fat" style="width:${Math.round(fPct*100)}%"></div></div>
      </div>
    `;
    document.getElementById('macroNote').innerHTML = data.note;
  }

  function renderMeals(data) {
    document.getElementById('mealTimeline').innerHTML = data.meals.map((m, i) => `
      <div class="meal-card">
        <div class="meal-header" onclick="toggleMeal(${i})">
          <div class="meal-header-left">
            <div class="meal-time-badge">${m.time}</div>
            <div class="meal-title-group">
              <div class="meal-name">${m.name}</div>
              <div class="meal-kcal"><strong>${m.kcal} kcal</strong></div>
            </div>
          </div>
          <button class="meal-toggle" id="toggle-${i}">▾</button>
        </div>
        <div class="meal-body" id="meal-body-${i}">
          <div class="food-items">
            ${m.foods.map(f => `
              <div class="food-item">
                <span class="food-name">${f.name}</span>
                <span class="food-qty">${f.qty}</span>
                <span class="food-cal">${f.cal}</span>
              </div>
            `).join('')}
          </div>
          <div class="meal-tip">${m.tip}</div>
        </div>
      </div>
    `).join('');
    // Auto-open first meal
    document.getElementById('meal-body-0')?.classList.add('open');
    document.getElementById('toggle-0')?.classList.add('open');

    document.getElementById('dietRules').innerHTML = data.rules.map(r => `
      <div class="rule-card">
        <div class="rule-icon">${r.icon}</div>
        <div class="rule-title">${r.title}</div>
        <div class="rule-desc">${r.desc}</div>
      </div>
    `).join('');
  }

  function toggleMeal(i) {
    const body = document.getElementById(`meal-body-${i}`);
    const btn  = document.getElementById(`toggle-${i}`);
    body.classList.toggle('open');
    btn.classList.toggle('open');
  }

  function setGoal(goal) {
    activeGoal = goal;
    renderGoalTabs();
    const data = dietGoals[goal];
    updateMacroRing(data);
    renderMeals(data);
  }

  setGoal(activeGoal);

// ── PAYMENT MODAL JS ──
  let currentPlan = '', currentPrice = '', currentMethod = 'card';

  function openPayment(plan, price) {
    currentPlan = plan; currentPrice = price;
    document.getElementById('modalPlanName').textContent = plan + ' Plan';
    document.getElementById('modalPlanPrice').textContent = '₹' + price + ' / month';
    goStep(1);
    document.getElementById('paymentModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closePayment() {
    document.getElementById('paymentModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('paymentModal')) closePayment();
  }

  function goStep(n) {
    [1,2,3,4].forEach(i => {
      document.getElementById('step' + i).style.display = i === n ? 'block' : 'none';
    });
    if (n <= 3) {
      [1,2,3].forEach(i => {
        const ind = document.getElementById('step-ind-' + i);
        const num = document.getElementById('step-num-' + i);
        ind.className = 'modal-step' + (i < n ? ' done' : i === n ? ' active' : '');
        num.textContent = i < n ? '✓' : i;
        if (i < 3) {
          document.getElementById('step-line-' + i).className = 'step-line' + (i < n ? ' done' : '');
        }
      });
    }
    if (n === 3) populateSummary();
  }

  function selectMethod(m) {
    currentMethod = m;
    ['card','upi','netbanking'].forEach(k => {
      document.getElementById('pm-' + k).className = 'pay-method' + (k === m ? ' active' : '');
    });
    document.getElementById('card-fields').style.display = m === 'card' ? 'block' : 'none';
    document.getElementById('upi-fields').style.display  = m === 'upi'  ? 'block' : 'none';
    document.getElementById('nb-fields').style.display   = m === 'netbanking' ? 'block' : 'none';
  }

  // Auto-format card number with spaces
  document.getElementById('inp-cardnum').addEventListener('input', function(e) {
    let v = e.target.value.replace(/\D/g,'').substring(0,16);
    e.target.value = v.replace(/(.{4})/g,'$1  ').trim();
  });
  // Auto-format expiry
  document.getElementById('inp-expiry').addEventListener('input', function(e) {
    let v = e.target.value.replace(/\D/g,'');
    if (v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2,4);
    e.target.value = v;
  });

  function verifyUPI() {
    const v = document.getElementById('inp-upi').value.trim();
    if (!v.includes('@')) { alert('Please enter a valid UPI ID (e.g. name@okicici)'); return; }
    alert('✓ UPI ID verified: ' + v);
  }

  function populateSummary() {
    const fname = document.getElementById('inp-fname').value || 'Member';
    const lname = document.getElementById('inp-lname').value || '';
    const rawPrice = parseInt(currentPrice.replace(/,/g,''));
    const gst = Math.round(rawPrice * 0.18);
    const total = rawPrice + gst;
    document.getElementById('sum-plan').textContent = currentPlan + ' Plan';
    document.getElementById('sum-name').textContent = fname + ' ' + lname;
    document.getElementById('sum-gst').textContent = '₹' + gst.toLocaleString('en-IN');
    document.getElementById('sum-total').textContent = '₹' + total.toLocaleString('en-IN');
  }

  function processPayment() {
    const btn = document.getElementById('payBtn');
    btn.disabled = true;
    btn.textContent = '⏳ Processing…';
    setTimeout(() => {
      const ref = 'IF-' + Math.floor(100000 + Math.random() * 900000);
      document.getElementById('ref-code').textContent = ref;
      goStep(4);
      btn.disabled = false;
      btn.textContent = '🔒 Pay Now';
    }, 2000);
  }

function openClassBooking(name, time, trainer, duration) {
    document.getElementById('cb-classname').textContent = name;
    document.getElementById('cb-classmeta').textContent = time + ' · ' + trainer;
    document.getElementById('cb-sum-class').textContent = name;
    document.getElementById('cb-sum-time').textContent = time;
    document.getElementById('cb-sum-trainer').textContent = trainer;
    document.getElementById('cb-sum-dur').textContent = duration;
    document.getElementById('cb-form').style.display = 'block';
    document.getElementById('cb-success').style.display = 'none';
    document.getElementById('classModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeClassModal() {
    document.getElementById('classModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function handleClassOverlay(e) {
    if (e.target === document.getElementById('classModal')) closeClassModal();
  }
  function confirmClassBooking() {
    const fname = document.getElementById('cb-fname').value.trim();
    const phone = document.getElementById('cb-phone').value.trim();
    if (!fname) { document.getElementById('cb-fname').classList.add('error'); document.getElementById('cb-fname').focus(); return; }
    if (!phone) { document.getElementById('cb-phone').classList.add('error'); document.getElementById('cb-phone').focus(); return; }
    document.getElementById('cb-form').style.display = 'none';
    const ref = 'CLS-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('cb-ref').textContent = ref;
    document.getElementById('cb-success').style.display = 'block';
  }

  // ── REGISTRATION FORM ──
  function selectRegPill(el, groupId) {
    document.querySelectorAll('#' + groupId + ' button').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }
  function submitRegistration() {
    const fname = document.getElementById('reg-fname').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const terms = document.getElementById('reg-terms').checked;
    if (!fname) { document.getElementById('reg-fname').classList.add('error'); document.getElementById('reg-fname').focus(); return; }
    if (!phone) { document.getElementById('reg-phone').classList.add('error'); document.getElementById('reg-phone').focus(); return; }
    if (!terms) { alert('Please agree to be contacted to complete registration.'); return; }
    document.getElementById('regFormContent').classList.add('hide');
    document.getElementById('reg-ref').textContent = 'REG-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('regSuccess').classList.add('show');
  }

  // ── CONTACT FORM ──
  function submitContact() {
    const name = document.getElementById('con-name').value.trim();
    const contact = document.getElementById('con-contact').value.trim();
    if (!name) { document.getElementById('con-name').classList.add('error'); document.getElementById('con-name').focus(); return; }
    if (!contact) { document.getElementById('con-contact').classList.add('error'); document.getElementById('con-contact').focus(); return; }
    document.getElementById('contactFormContent').classList.add('hide');
    document.getElementById('contactSuccess').classList.add('show');
  }

// ── GALLERY ──
  const galleryPhotos = [
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', cat: 'weights', label: 'Free Weight Zone', big: true },
    { url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', cat: 'weights', label: 'Squat Rack Bay' },
    { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', cat: 'classes', label: 'HIIT Group Session' },
    { url: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80', cat: 'weights', label: 'Dumbbell Rack' },
    { url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', cat: 'cardio', label: 'Cardio Deck' },
    { url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80', cat: 'classes', label: 'Boxing Class' },
    { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', cat: 'facility', label: 'Main Training Floor', big: true },
    { url: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&q=80', cat: 'classes', label: 'Yoga & Stretch Studio' },
    { url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80', cat: 'weights', label: 'Barbell Platform' },
    { url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', cat: 'cardio', label: 'Treadmill Row' },
    { url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', cat: 'facility', label: 'Locker Room' },
    { url: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&q=80', cat: 'classes', label: 'Spin / Cycle Studio' },
  ];

  function renderGallery(filter) {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = galleryPhotos.map((p, i) => `
      <div class="gallery-item ${p.big ? 'big' : ''} ${filter !== 'all' && p.cat !== filter ? 'hidden' : ''}" data-cat="${p.cat}" onclick="openLightbox(${i})">
        <img src="${p.url}" alt="${p.label}" loading="lazy">
        <div class="gallery-item-overlay">
          <div>
            <div class="gallery-item-label">${p.label}</div>
            <div class="gallery-item-cat">${p.cat}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
  function filterGallery(cat, btn) {
    document.querySelectorAll('#galleryFilters .gallery-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(cat);
  }
  renderGallery('all');

  // Lightbox
  let lightboxIndex = 0;
  function openLightbox(i) {
    lightboxIndex = i;
    showLightboxImage();
    document.getElementById('lightboxOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    document.getElementById('lightboxOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  function handleLightboxOverlay(e) {
    if (e.target === document.getElementById('lightboxOverlay')) closeLightbox();
  }
  function navLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + galleryPhotos.length) % galleryPhotos.length;
    showLightboxImage();
  }
  function showLightboxImage() {
    const p = galleryPhotos[lightboxIndex];
    document.getElementById('lightboxImg').src = p.url.replace('w=800','w=1400');
    document.getElementById('lightboxImg').alt = p.label;
    document.getElementById('lightboxCaption').innerHTML = `<strong>${p.label}</strong> · ${p.cat}`;
  }
  document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lightboxOverlay').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });

  // ── INFO MODALS (footer links) ──
  const infoContent = {
    'our-story': {
      title: 'Our <span>Story</span>',
      body: `IronForge was founded in 2014 with one simple belief: real results come from real coaching, not fancy gimmicks. What started as a single 1,200 sq. ft. training floor has grown into a full-service fitness facility with 18 trainers and 3,400+ active members.<br><br>We've stayed true to our roots — barbells, hard work, and a community that holds you accountable.`
    },
    'open-gym': {
      title: 'Open <span>Gym</span>',
      body: `Open Gym access means you can train independently on our full equipment floor anytime during operating hours (5 AM – 11 PM, 7 days a week) — no class booking required.<br><br>Includes access to:<ul><li>Free weights & barbell platforms</li><li>Selectorized machines</li><li>Cardio deck (treadmills, bikes, rowers)</li><li>Stretching & mobility zone</li></ul>Included in all membership plans.`
    },
    'online-coaching': {
      title: 'Online <span>Coaching</span>',
      body: `Can't make it to the gym every day? Our trainers offer remote coaching with custom workout plans, video form checks, and weekly check-ins — all through WhatsApp and a simple tracking sheet.<br><br>Ask at the front desk or message us via the Contact section to get started.`
    },
    'blog': {
      title: 'Our <span>Blog</span>',
      body: `We're working on launching our fitness blog soon — covering training tips, nutrition guides, and member transformation stories.<br><br>Want early access? Drop your email in the Contact form and we'll notify you the moment it's live.`
    },
    'faqs': {
      title: 'Frequently Asked <span>Questions</span>',
      body: `<strong>Do I need to sign a long-term contract?</strong><br>No, all our plans are billed monthly and you can cancel anytime.<br><br><strong>Is there an admission fee?</strong><br>No hidden joining fees — the price you see is the price you pay.<br><br><strong>Can I freeze my membership?</strong><br>Yes, you can pause for up to 30 days per year for travel or medical reasons.<br><br>Have more questions? Use the AI assistant in the bottom-right corner!`
    },
    'booking-policy': {
      title: 'Booking <span>Policy</span>',
      body: `<ul><li>Classes can be booked up to 7 days in advance through the Schedule section</li><li>Please cancel at least 2 hours before class start time to free up your spot for others</li><li>No-shows after 3 consecutive bookings may result in a temporary booking restriction</li><li>Personal training sessions should be rescheduled at least 24 hours in advance</li></ul>`
    },
    'privacy': {
      title: '<span>Privacy</span> Policy',
      body: `We collect only the information needed to manage your membership — name, contact details, and billing information. We never sell your data to third parties.<br><br>Your information is used solely for class bookings, billing, and occasional updates about gym offers (which you can opt out of anytime).`
    },
  };
  function openInfoModal(key) {
    const data = infoContent[key];
    if (!data) return;
    document.getElementById('infoModalTitle').innerHTML = data.title;
    document.getElementById('infoModalBody').innerHTML = data.body;
    document.getElementById('infoModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeInfoModal() {
    document.getElementById('infoModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── AI ASK PLATFORM ──
  let aiChatOpened = false;

  function toggleAiChat() {
    const panel = document.getElementById('aiChatPanel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
      document.getElementById('aiFabBadge').style.display = 'none';
      aiChatOpened = true;
      document.getElementById('aiInput').focus();
    }
  }

  // Simple knowledge base — keyword matched
  const aiKnowledge = [
    { keys: ['time','timing','hour','open','close'], answer: "We're open every day from <strong>5:00 AM to 11:00 PM</strong>, including weekends and public holidays!" },
    { keys: ['price','pricing','cost','fee','plan','membership'], answer: "We have 3 plans: <strong>Starter ₹1,499</strong>, <strong>Elite ₹2,999</strong> (most popular), and <strong>Pro ₹4,999</strong> per month. You can see full details and join instantly by hovering <strong>Pricing</strong> in the top menu." },
    { keys: ['trial','free','demo'], answer: "Yes! Every new registration gets a <strong>free trial session</strong> plus a body composition analysis. Just fill the registration form on our site and our team will call you." },
    { keys: ['trainer','coach','instructor'], answer: "We have 4 expert coaches: Rajan Kumar (Strength), Priya Venkat (HIIT), Arjun Sharma (Boxing), and Meera Nair (Yoga/Pilates). Hover <strong>Trainers</strong> in the nav to see their profiles." },
    { keys: ['class','schedule','timetable','book'], answer: "We run 48+ classes a week — HIIT, Yoga, Boxing, Cycling, Strength, and Pilates. Check the <strong>Schedule</strong> section to see today's classes and book directly." },
    { keys: ['diet','nutrition','meal','food'], answer: "We offer 3 nutrition plans: Fat Loss (1800 kcal), Muscle Gain (2800 kcal), and Endurance (2400 kcal) — each with full daily meal breakdowns. Check the <strong>Diet</strong> section!" },
    { keys: ['location','address','where','near'], answer: "We're located in Jagamara, Khandagiri, Bhubaneswar, Odisha — right near ITER College. Easy to find and close to public transport!" },
    { keys: ['contact','phone','call','email','number'], answer: "You can call us at +91 44 1234 5678 or email hello@ironforgegym.in. Or just fill out the contact form below!" },
    { keys: ['cancel','refund','pause'], answer: "You can cancel your membership anytime — no long-term lock-in. Just speak to the front desk or call our support line." },
    { keys: ['personal training','pt','one on one','1 on 1'], answer: "Personal training sessions are included in our Elite (2/month) and Pro (4/month) plans. You can also book extra PT sessions at the front desk." },
    { keys: ['parking'], answer: "Yes, we have free dedicated parking for all members right outside the facility." },
    { keys: ['hi','hello','hey'], answer: "Hello! 👋 How can I help you today — pricing, classes, trainers, or something else?" },
  ];

  function findAiAnswer(question) {
    const q = question.toLowerCase();
    for (const item of aiKnowledge) {
      if (item.keys.some(k => q.includes(k))) return item.answer;
    }
    return "That's a great question! I don't have a specific answer for that right now, but our team can help — reach out via the <strong>Contact</strong> section or call +91 44 1234 5678, and we'll get back to you quickly.";
  }

  function appendAiMessage(text, sender) {
    const messages = document.getElementById('aiMessages');
    const div = document.createElement('div');
    div.className = 'ai-msg ' + sender;
    div.innerHTML = `
      <div class="ai-msg-avatar">${sender === 'bot' ? '🏋️' : '🙋'}</div>
      <div class="ai-msg-bubble">${text}</div>
    `;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showAiTyping() {
    const messages = document.getElementById('aiMessages');
    const div = document.createElement('div');
    div.className = 'ai-msg bot';
    div.id = 'aiTypingIndicator';
    div.innerHTML = `
      <div class="ai-msg-avatar">🏋️</div>
      <div class="ai-msg-bubble"><div class="ai-typing"><span></span><span></span><span></span></div></div>
    `;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function sendAiMessage() {
    const input = document.getElementById('aiInput');
    const text = input.value.trim();
    if (!text) return;
    appendAiMessage(text, 'user');
    input.value = '';
    showAiTyping();
    setTimeout(() => {
      document.getElementById('aiTypingIndicator')?.remove();
      appendAiMessage(findAiAnswer(text), 'bot');
    }, 900 + Math.random() * 500);
  }

  function askQuick(text) {
    document.getElementById('aiInput').value = text;
    sendAiMessage();
  }

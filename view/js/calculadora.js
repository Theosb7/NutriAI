document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activity = document.querySelector('input[name="activity"]:checked').value;
    const goal = document.getElementById('goal').value;

    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let activityMultiplier;
    switch (activity) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'light':
        activityMultiplier = 1.375;
        break;
      case 'moderate':
        activityMultiplier = 1.55;
        break;
      case 'active':
        activityMultiplier = 1.725;
        break;
      case 'very-active':
        activityMultiplier = 1.9;
        break;
    }

    const maintenanceCalories = bmr * activityMultiplier;
    let goalCalories;

    switch (goal) {
      case 'lose-weight':
        goalCalories = maintenanceCalories - 500;
        break;
      case 'gain-muscle':
        goalCalories = maintenanceCalories + 500;
        break;
      case 'maintain-weight':
      default:
        goalCalories = maintenanceCalories;
        break;
    }

    // 40% Carbs, 30% Protein, 30% Fat
    const proteinGrams = Math.round((goalCalories * 0.3) / 4);
    const carbsGrams = Math.round((goalCalories * 0.4) / 4);
    const fatsGrams = Math.round((goalCalories * 0.3) / 9);

    document.getElementById('maint-cals').textContent = Math.round(maintenanceCalories);
    document.getElementById('goal-cals').textContent = Math.round(goalCalories);
    document.getElementById('protein').textContent = proteinGrams;
    document.getElementById('carbs').textContent = carbsGrams;
    document.getElementById('fats').textContent = fatsGrams;

    document.getElementById('results').classList.remove('hidden');
  });
});

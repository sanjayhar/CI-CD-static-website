const workouts = {
    Men: {
        Chest: [
            "Barbell Bench Press",
            "Incline Dumbbell Press",
            "Push-Ups",
            "Chest Dips",
            "Cable Flyes"
        ],
        Arms: [
            "Bicep Curls",
            "Tricep Pushdowns",
            "Hammer Curls",
            "Overhead Tricep Extension"
        ],
        Legs: [
            "Squats",
            "Leg Press",
            "Lunges",
            "Calf Raises",
            "Hamstring Curls"
        ],
        Back: [
            "Deadlifts",
            "Pull-Ups",
            "Lat Pulldowns",
            "Bent-Over Rows"
        ],
        Shoulders: [
            "Military Press",
            "Lateral Raises",
            "Front Raises",
            "Reverse Flyes"
        ],
        Core: [
            "Planks",
            "Russian Twists",
            "Leg Raises",
            "Mountain Climbers"
        ]
    },
    Women: {
        Chest: [
            "Push-Ups",
            "Incline Dumbbell Press",
            "Standing Chest Flyes",
            "Chest Dips"
        ],
        Arms: [
            "Tricep Kickbacks",
            "Bicep Curls",
            "Resistance Band Pulls",
            "Overhead Extensions"
        ],
        Legs: [
            "Squats",
            "Glute Bridges",
            "Step-Ups",
            "Lunges",
            "Calf Raises"
        ],
        Back: [
            "Assisted Pull-Ups",
            "Lat Pulldowns",
            "Seated Cable Rows",
            "Supermans"
        ],
        Shoulders: [
            "Arnold Press",
            "Lateral Raises",
            "Front Raises",
            "Shoulder Taps"
        ],
        Core: [
            "Plank Variations",
            "Bicycle Crunches",
            "Leg Raises",
            "Flutter Kicks"
        ]
    }
};

const genderBtns = [document.getElementById('menBtn'), document.getElementById('womenBtn')];
const bodyPartTabs = document.querySelectorAll('.body-part-tabs button');
const workoutList = document.getElementById('workoutList');

let currentGender = 'Men';
let currentPart = 'Chest';

function renderWorkouts() {
    workoutList.innerHTML = '';
    const plans = workouts[currentGender][currentPart];
    plans.forEach(exercise => {
        const li = document.createElement('li');
        li.textContent = exercise;
        workoutList.appendChild(li);
    });
}

// Gender selection
genderBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        genderBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentGender = this.textContent;
        renderWorkouts();
    });
});

// Body part selection tabs
bodyPartTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        bodyPartTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentPart = this.dataset.part;
        renderWorkouts();
    });
});

// Initial render
<<<<<<< HEAD
renderWorkouts();
=======
renderWorkouts();
>>>>>>> 415f32f0987564c3fcd4e1fafc1035440f7d7307

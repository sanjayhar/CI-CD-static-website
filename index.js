const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Allows frontend to access this API

const workouts = {
    Men: {
        Chest: ["Barbell Bench Press", "Incline Dumbbell Press", "Push-Ups", "Chest Dips", "Cable Flyes"],
        Arms: ["Bicep Curls", "Tricep Pushdowns", "Hammer Curls", "Overhead Tricep Extension"],
        Legs: ["Squats", "Leg Press", "Lunges", "Calf Raises", "Hamstring Curls"],
        Back: ["Deadlifts", "Pull-Ups", "Lat Pulldowns", "Bent-Over Rows"],
        Shoulders: ["Military Press", "Lateral Raises", "Front Raises", "Reverse Flyes"],
        Core: ["Planks", "Russian Twists", "Leg Raises", "Mountain Climbers"]
    },
    Women: {
        Chest: ["Push-Ups", "Incline Dumbbell Press", "Standing Chest Flyes", "Chest Dips"],
        Arms: ["Tricep Kickbacks", "Bicep Curls", "Resistance Band Pulls", "Overhead Extensions"],
        Legs: ["Squats", "Glute Bridges", "Step-Ups", "Lunges", "Calf Raises"],
        Back: ["Assisted Pull-Ups", "Lat Pulldowns", "Seated Cable Rows", "Supermans"],
        Shoulders: ["Arnold Press", "Lateral Raises", "Front Raises", "Shoulder Taps"],
        Core: ["Plank Variations", "Bicycle Crunches", "Leg Raises", "Flutter Kicks"]
    }
};

// API Endpoint to get workouts
app.get('/workouts', (req, res) => {
    const gender = req.query.gender;
    const part = req.query.part;

    if (workouts[gender] && workouts[gender][part]) {
        res.json({
            success: true,
            gender: gender,
            part: part,
            workouts: workouts[gender][part]
        });
    } else {
        res.status(404).json({ success: false, message: "Invalid gender or body part" });
    }
});

app.listen(port, () => {
    console.log(`Workout API server running at http://localhost:${port}`);
});

import "./App.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./assets/bg.json";
import { useState } from "react";
import logoAnimation from "./assets/logo.json";

function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const defaultLogoOptions = {
        loop: true,
        autoplay: true,
        animationData: logoAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const wordList = [
        "itching",
        "skin_rash",
        "nodal_skin_eruptions",
        "continuous_sneezing",
        "shivering",
        "chills",
        "joint_pain",
        "stomach_pain",
        "acidity",
        "ulcers_on_tongue",
        "muscle_wasting",
        "vomiting",
        "burning_micturition",
        "spotting_ urination",
        "fatigue",
        "weight_gain",
        "anxiety",
        "cold_hands_and_feets",
        "mood_swings",
        "weight_loss",
        "restlessness",
        "lethargy",
        "patches_in_throat",
        "irregular_sugar_level",
        "cough",
        "high_fever",
        "sunken_eyes",
        "breathlessness",
        "sweating",
        "dehydration",
        "indigestion",
        "headache",
        "yellowish_skin",
        "dark_urine",
        "nausea",
        "loss_of_appetite",
        "pain_behind_the_eyes",
        "back_pain",
        "constipation",
        "abdominal_pain",
        "diarrhoea",
        "mild_fever",
        "yellow_urine",
        "yellowing_of_eyes",
        "acute_liver_failure",
        "fluid_overload",
        "swelling_of_stomach",
        "swelled_lymph_nodes",
        "malaise",
        "blurred_and_distorted_vision",
        "phlegm",
        "throat_irritation",
        "redness_of_eyes",
        "sinus_pressure",
        "runny_nose",
        "congestion",
        "chest_pain",
        "weakness_in_limbs",
        "fast_heart_rate",
        "pain_during_bowel_movements",
        "pain_in_anal_region",
        "bloody_stool",
        "irritation_in_anus",
        "neck_pain",
        "dizziness",
        "cramps",
        "bruising",
        "obesity",
        "swollen_legs",
        "swollen_blood_vessels",
        "puffy_face_and_eyes",
        "enlarged_thyroid",
        "brittle_nails",
        "swollen_extremeties",
        "excessive_hunger",
        "extra_marital_contacts",
        "drying_and_tingling_lips",
        "slurred_speech",
        "knee_pain",
        "hip_joint_pain",
        "muscle_weakness",
        "stiff_neck",
        "swelling_joints",
        "movement_stiffness",
        "spinning_movements",
        "loss_of_balance",
        "unsteadiness",
        "weakness_of_one_body_side",
        "loss_of_smell",
        "bladder_discomfort",
        "foul_smell_of urine",
        "continuous_feel_of_urine",
        "passage_of_gases",
        "internal_itching",
        "toxic_look_(typhos)",
        "depression",
        "irritability",
        "muscle_pain",
        "altered_sensorium",
        "red_spots_over_body",
        "belly_pain",
        "abnormal_menstruation",
        "dischromic _patches",
        "watering_from_eyes",
        "increased_appetite",
        "polyuria",
        "family_history",
        "mucoid_sputum",
        "rusty_sputum",
        "lack_of_concentration",
        "visual_disturbances",
        "receiving_blood_transfusion",
        "receiving_unsterile_injections",
        "coma",
        "stomach_bleeding",
        "distention_of_abdomen",
        "history_of_alcohol_consumption",
        "fluid_overload.1",
        "blood_in_sputum",
        "prominent_veins_on_calf",
        "palpitations",
        "painful_walking",
        "pus_filled_pimples",
        "blackheads",
        "scurring",
        "skin_peeling",
        "silver_like_dusting",
        "small_dents_in_nails",
        "inflammatory_nails",
        "blister",
        "red_sore_around_nose",
        "yellow_crust_ooze",
    ];

    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [suggestionsToShow, setSuggestionsToShow] = useState(4);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            // Filter word list based on input value
            const filteredSuggestions = wordList.filter((word) =>
                word.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions.slice(0, suggestionsToShow));
        } else {
            setSuggestions([]);
        }
    };

    const handleItemSelection = (item) => {
        // Check if the item is already selected
        const isSelected = selectedItems.includes(item);

        if (isSelected) {
            // Remove the item from selectedItems
            const updatedSelectedItems = selectedItems.filter(
                (selectedItem) => selectedItem !== item
            );
            setSelectedItems(updatedSelectedItems);
        } else {
            // Add the item to selectedItems
            const updatedSelectedItems = [...selectedItems, item];
            setSelectedItems(updatedSelectedItems);
        }

        // Clear the input field and hide suggestions
        setInputValue("");
        setSuggestions([]);
    };

    const handleResetSelections = () => {
        setSelectedItems([]);
    };

    return (
        <>
            <div className="bg-blue-800 min-h-screen flex flex-col">
                <div className="container mx-auto px-4 py-8 flex-grow">
                    <section className="w-3/6 mx-auto md:w-2/6 sm:max-w-1/6 lg:w-1/6 mb-8">
                        <Lottie options={defaultLogoOptions} />
                    </section>

                    <h1 className="text-3xl font-bold text-white text-center mb-8">
                        Disease Prediction
                    </h1>

                    <div className="max-w-md relative mx-auto">
                        <input
                            className="w-full px-4 py-2 mb-4 rounded-md placeholder-gray-400"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type your symptoms"
                        />
                        {suggestions.length > 0 && (
                            <ul className="absolute left-0 -mt-3 w-full bg-white bg-opacity-70 rounded-md shadow-md">
                                {suggestions.map((word, index) => (
                                    <li
                                        key={index}
                                        className={`px-4 py-2 cursor-pointer ${
                                            selectedItems.includes(word)
                                                ? "bg-blue-500 text-white"
                                                : "text-black"
                                        }`}
                                        onClick={() =>
                                            handleItemSelection(word)
                                        }
                                    >
                                        {word}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div>
                            <h3 className="text-lg font-semibold mt-4 text-white">
                                Selected Symptoms:
                            </h3>
                            <ul className="list-disc pl-8">
                                {selectedItems.map((item, index) => (
                                    <li key={index} className="text-gray-300">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                            // onClick={handlePredict}
                        >
                            Predict
                        </button>

                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                            onClick={handleResetSelections}
                        >
                            Reset Selections
                        </button>
                    </div>

                    <section className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-auto sm:max-w-md">
                        <Lottie options={defaultOptions} />
                    </section>
                </div>
            </div>
        </>
    );
}

export default App;

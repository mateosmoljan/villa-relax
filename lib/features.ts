import { StaticImageData } from "next/image";
import hairdryer from "@/public/assets/icons/hairdryer.png";
import hot_water from "@/public/assets/icons/hot-water.png";
import washer from "@/public/assets/icons/washer.png";
import dryer from "@/public/assets/icons/dryer.png";
import essentials from "@/public/assets/icons/essentials.png";
import hangers from "@/public/assets/icons/hangers.png";
import bed_linens from "@/public/assets/icons/bed_linens.png";
import pillows_blankets from "@/public/assets/icons/pillows_blankets.png";
import darkening_shades from "@/public/assets/icons/darkening_shades.png";
import iron from "@/public/assets/icons/iron.png";
import television from "@/public/assets/icons/television.png";
import crib from "@/public/assets/icons/crib.png";
import books_toys from "@/public/assets/icons/books_toys.png";
import high_chair from "@/public/assets/icons/high-chair.png";
import fireplace_guard from "@/public/assets/icons/fireplace_guard.png";
import window_guards from "@/public/assets/icons/window_guards.png";
import outlet_covers from "@/public/assets/icons/outlet_cover.png";
import baby_safety_gates from "@/public/assets/icons/baby_safety_gates.png";
import table_corner_guards from "@/public/assets/icons/table_corner_guards.png";
import air_conditioner from "@/public/assets/icons/air_conditioner.png";
import indoor_fireplace from "@/public/assets/icons/indoor_fireplace.png";
import heating from "@/public/assets/icons/heating.png";
import fire_extinguisher from "@/public/assets/icons/fire-extinguisher.png";
import aid_kit from "@/public/assets/icons/aid_kit.png";
import wifi from "@/public/assets/icons/wifi.png";
import dishes from "@/public/assets/icons/dishes.png";
import kitchen from "@/public/assets/icons/kitchen.png";
import microwave from "@/public/assets/icons/microwave.png";
import refrigerator from "@/public/assets/icons/refrigerator.png";
import cooking_basics from "@/public/assets/icons/cooking_basics.png";
import dishwasher from "@/public/assets/icons/dishwasher.png";
import stove from "@/public/assets/icons/stove.png";
import oven from "@/public/assets/icons/oven.png";
import coffee_maker from "@/public/assets/icons/coffee_maker.png";
import sheet from "@/public/assets/icons/sheet.png";
import grill from "@/public/assets/icons/grill.png";
import backyard from "@/public/assets/icons/backyard.png";
import parking from "@/public/assets/icons/parking.png";
import pool from "@/public/assets/icons/pool.png";
import luggage from "@/public/assets/icons/luggage.png";
import smoking from "@/public/assets/icons/smoking.png";
import long_term_stays from "@/public/assets/icons/long_term_stays.png";
import key from "@/public/assets/icons/key.png";
import smoke_detektor from "@/public/assets/icons/smoke-detector.png";
import carbon from "@/public/assets/icons/carbon.png";


type features = {
  icon: StaticImageData;
  icon_alt: string;
  title?: string;
  des?: string;
};

type DataObject = {
  features: features[];
};

export const Features: DataObject = {
  features: [
    // Bathroom
    {
      icon: hairdryer,
      icon_alt: "Hair dryer",
      title: "Hair dryer",
    },
    {
      icon: hot_water,
      icon_alt: "Hot water",
      title: "Hot water",
    },
    // Bedroom and laundry
    {
      icon: washer,
      icon_alt: "Washer",
      title: "Washer",
    },
    {
      icon: dryer,
      icon_alt: "Dryer",
      title: "Dryer",
    },
    {
      icon: essentials,
      title: "Essentials",
      icon_alt: "Essentials",
      des: "Towels, bed sheets, soap, and toilet paper",
    },
    {
      icon: hangers,
      icon_alt: "Hangers",
      title: "Hangers",
    },
    {
      icon: bed_linens,
      icon_alt: "Bed linens",
      title: "Bed linens",
    },
    {
      icon: pillows_blankets,
      icon_alt: "Extra pillows and blankets",
      title: "Extra pillows and blankets",
    },
    {
      icon: darkening_shades,
      icon_alt: "Room-darkening shades",
      title: "Room-darkening shades",
    },
    {
      icon: iron,
      icon_alt: "Iron",
      title: "Iron",
    },
    // Entertainment
    {
      icon: television,
      icon_alt: "TV with standard cable",
      title: "TV with standard cable",
    },
// Family
    {
      icon: crib,
      icon_alt: "Crib",
      title: "Crib",
    },
    {
      icon: books_toys,
      icon_alt: "Children’s books and toys",
      title: "Children’s books and toys",
    },
    {
      icon: high_chair,
      icon_alt: "High chair",
      title: "High chair",
    },
    {
      icon: fireplace_guard,
      icon_alt: "Fireplace guards",
      title: "Fireplace guards",
    },
    {
      icon: window_guards,
      icon_alt: "Window guards",
      title: "Window guards",
    },
    {
      icon: outlet_covers,
      icon_alt: "Outlet covers",
      title: "Outlet covers",
    },
    {
      icon: baby_safety_gates,
      icon_alt: "Baby safety gates",
      title: "Baby safety gates",
    },
    {
      icon: table_corner_guards,
      icon_alt: "Table corner guards",
      title: "Table corner guards",
    },
    // Heating and cooling
    {
      icon: air_conditioner,
      icon_alt: "Air conditioning",
      title: "Air conditioning",
    },
    {
      icon: indoor_fireplace,
      icon_alt: "Indoor fireplace",
      title: "Indoor fireplace",
    },
    {
      icon: heating,
      icon_alt: "Heating",
      title: "Heating",
    },
    // Home safety
    {
      icon: fire_extinguisher,
      icon_alt: "Fire extinguisher",
      title: "Fire extinguisher",
    },
    {
      icon: aid_kit,
      icon_alt: "First aid kit",
      title: "First aid kit",
    },
    // Internet and office
    {
      icon: wifi,
      icon_alt: "Wifi",
      title: "Wifi",
    },
    // Kitchen and dining
    {
      icon: kitchen,
      icon_alt: "Kitchen",
      title: "Kitchen",
      des: "Space where guests can cook their own meals",
    },
    {
      icon: refrigerator,
      icon_alt: "Refrigerator",
      title: "Refrigerator",
    },
    {
      icon: microwave,
      icon_alt: "Microwave",
      title: "Microwave",
    },
    {
      icon: cooking_basics,
      icon_alt: "Cooking basics",
      title: "Cooking basics",
      des: "Pots and pans, oil, salt and pepper",
    },
    {
      icon: dishes,
      icon_alt: "Dishes and silverware",
      title: "Dishes and silverware",
      des: "Bowls, chopsticks, plates, cups, etc.",
    },
    {
      icon: dishwasher,
      icon_alt: "Dishwasher",
      title: "Dishwasher",
    },
    {
      icon: stove,
      icon_alt: "Stove",
      title: "Stove",
    },
    {
      icon: oven,
      icon_alt: "Oven",
      title: "Oven",
    },
    {
      icon: coffee_maker,
      icon_alt: "Coffee maker",
      title: "Coffee maker",
    },
    {
      icon: sheet,
      icon_alt: "Baking sheet",
      title: "Baking sheet",
    },
    {
      icon: grill,
      icon_alt: "Barbecue utensils",
      title: "Barbecue utensils",
      des: "Grill, charcoal, bamboo skewers/iron skewers, etc.",
    },
    // Outdoor
    {
      icon: backyard,
      icon_alt: "Backyard",
      title: "Backyard",
      des: "An open space on the property usually covered in grass",
    },
    // Parking and facilities
    {
      icon: parking,
      icon_alt: "Free parking on premises",
      title: "Free parking on premises",
    },
    {
      icon: pool,
      icon_alt: "Pool",
      title: "Pool",
    },
    // Services
    {
      icon: luggage,
      icon_alt: "Luggage dropoff allowed",
      title: "Luggage dropoff allowed",
      des: "For guests' convenience when they have early arrival or late departure",
    },
    {
      icon: smoking,
      icon_alt: "Smoking allowed",
      title: "Smoking allowed",
    },
    {
      icon: long_term_stays,
      icon_alt: "Long term stays allowed",
      title: "Long term stays allowed",
      des: "Allow stay for 28 days or more",
    },
    {
      icon: key,
      icon_alt: "Host greets you",
      title: "Host greets you",
    },
    // Not included
    {
      icon: smoke_detektor,
      icon_alt: "Smoke alarm",
      title: "Smoke alarm",
      des: "There is no smoke alarm on the property.",
    },
    {
      icon: carbon,
      icon_alt: "Carbon monoxide alarm",
      title: "Carbon monoxide alarm",
      des: "There is no carbon monoxide detector on the property.",
    },
  ],
};
